"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { actionLabels, leadActions, opportunityTypes, type LeadAction, type OpportunityType } from "@/lib/lead-options";

type Stage = "name" | "action" | "category" | "custom" | "done";
type Message = { id: number; sender: "assistant" | "user"; text: string };
const WHATSAPP_NUMBER = "573053971539";

const categoryPhrases: Record<OpportunityType, string> = {
  Inmuebles: "un inmueble",
  "Empresas y negocios": "una empresa o negocio",
  Franquicias: "una franquicia",
  "Maquinaria y equipos": "maquinaria o equipos",
  Vehículos: "un vehículo",
  "Inventarios / mercancía": "inventario o mercancía",
  "Proyectos inmobiliarios": "un proyecto inmobiliario",
  Otra: "otra oportunidad",
};

function TypingIndicator() {
  return <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] px-4 py-3" aria-label="Escribiendo">
    {[0, 140, 280].map((delay) => <span key={delay} className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50" style={{ animationDelay: `${delay}ms` }} />)}
  </div>;
}

export default function FloatingProspectChat() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [stage, setStage] = useState<Stage>("name");
  const [name, setName] = useState("");
  const [input, setInput] = useState("");
  const [action, setAction] = useState<LeadAction | null>(null);
  const [category, setCategory] = useState<OpportunityType | null>(null);
  const [customCategory, setCustomCategory] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAdmin = pathname.startsWith("/admin") || pathname.startsWith("/admin-login");

  function addMessage(sender: Message["sender"], text: string) {
    setMessages((current) => [...current, { id: Date.now() + Math.random(), sender, text }]);
  }

  function assistantReply(text: string, nextStage: Stage, delay = 750) {
    setTyping(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setTyping(false);
      addMessage("assistant", text);
      setStage(nextStage);
    }, delay);
  }

  function startConversation() {
    if (started) return;
    setStarted(true);
    setStage("name");
    setTyping(true);
    trackEvent("prospect_chat_open", { source: "floating_chat" });
    timeoutRef.current = setTimeout(() => {
      setTyping(false);
      addMessage("assistant", "Hola 👋 Soy el asistente de Gestor de Negocios. ¿Cómo te llamas?");
    }, 650);
  }

  function submitText(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (typing) return;
    const clean = input.trim().replace(/\s+/g, " ").slice(0, 160);
    if (clean.length < 2) return;
    setInput("");
    addMessage("user", clean);
    if (stage === "name") {
      setName(clean.slice(0, 60));
      assistantReply(`Mucho gusto, ${clean.slice(0, 60)}. ¿Qué quieres hacer?`, "action", 700);
    } else if (stage === "custom") {
      setCustomCategory(clean);
      assistantReply(`Gracias, ${name}. Ya tengo una mejor idea de la oportunidad. Puedes continuar directamente con David por WhatsApp.`, "done", 850);
    }
  }

  function chooseAction(selected: LeadAction) {
    if (typing) return;
    setAction(selected);
    addMessage("user", actionLabels[selected]);
    trackEvent("prospect_action_selected", { action: selected, source: "floating_chat" });
    assistantReply(`${name}, ¿qué tipo de oportunidad te interesa?`, "category");
  }

  function chooseCategory(selected: OpportunityType) {
    if (typing || !action) return;
    setCategory(selected);
    addMessage("user", selected);
    trackEvent("prospect_category_selected", { action, opportunity_type: selected, source: "floating_chat" });
    if (selected === "Otra") {
      assistantReply("Cuéntame qué tipo de oportunidad es.", "custom");
      return;
    }
    assistantReply(`Perfecto, ${name}. Ya tengo una mejor idea de la oportunidad. Puedes continuar directamente con David por WhatsApp.`, "done", 850);
  }

  function buildWhatsAppMessage() {
    const subject = category === "Otra" && customCategory ? customCategory : category ? categoryPhrases[category] : "una oportunidad de negocio";
    if (action === "Vender") return `Hola David, soy ${name}. Quiero vender ${subject} y quisiera conversar sobre esta oportunidad.`;
    if (action === "Comprar") return `Hola David, soy ${name}. Quiero comprar ${subject} y quisiera conversar sobre esta oportunidad.`;
    if (action === "Invertir") return `Hola David, soy ${name}. Quiero invertir en ${subject} y quisiera conversar sobre esta oportunidad.`;
    return `Hola David, soy ${name}. Quiero explorar ${subject} y recibir orientación.`;
  }

  function goToWhatsApp() {
    trackEvent("prospect_whatsapp_click", { action: action ?? "sin_definir", opportunity_type: category ?? "sin_definir", source: "floating_chat" });
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage())}`, "_blank", "noopener,noreferrer");
  }

  function resetConversation() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMessages([]); setName(""); setInput(""); setAction(null); setCategory(null); setCustomCategory("");
    setStage("name"); setTyping(true);
    timeoutRef.current = setTimeout(() => {
      setTyping(false);
      addMessage("assistant", "Hola 👋 Soy el asistente de Gestor de Negocios. ¿Cómo te llamas?");
    }, 650);
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, stage]);

  useEffect(() => {
    if ((stage === "name" || stage === "custom") && isOpen && !typing) {
      const timer = setTimeout(() => inputRef.current?.focus(), 120);
      return () => clearTimeout(timer);
    }
  }, [stage, isOpen, typing]);

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);
  if (isAdmin) return null;

  return <>
    {isOpen && <div className="fixed bottom-24 right-4 z-[80] w-[calc(100vw-2rem)] max-w-[390px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#07111f] text-white shadow-[0_30px_90px_rgba(0,0,0,0.55)] sm:right-6" role="dialog" aria-label="Asistente de Gestor de Negocios">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0a1525] px-5 py-4">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1668ff]/15 text-[#68a0ff]">✦</span><div><p className="text-sm font-semibold">Gestor de Negocios</p><p className="mt-0.5 text-xs text-white/45">Asistente comercial</p></div></div>
        <button type="button" onClick={() => setIsOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-full text-xl text-white/55 hover:bg-white/10 hover:text-white" aria-label="Cerrar chat">×</button>
      </div>

      <div ref={scrollRef} className="max-h-[360px] min-h-[270px] space-y-3 overflow-y-auto px-4 py-5" aria-live="polite">
        {messages.map((message) => <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}><div className={message.sender === "user" ? "max-w-[82%] rounded-2xl rounded-br-md bg-[#1668ff] px-4 py-3 text-sm leading-6" : "max-w-[88%] rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-6 text-white/80"}>{message.text}</div></div>)}
        {typing && <TypingIndicator />}
      </div>

      <div className="border-t border-white/10 bg-[#091321] px-4 py-4">
        {!typing && (stage === "name" || stage === "custom") && <form onSubmit={submitText} className="flex items-center gap-2"><input ref={inputRef} type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder={stage === "name" ? "Escribe tu nombre..." : "Escribe el tipo..."} maxLength={160} autoComplete={stage === "name" ? "name" : "off"} className="min-h-11 min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#2878ff]/60" aria-label={stage === "name" ? "Tu nombre" : "Tipo de oportunidad"} /><button type="submit" disabled={input.trim().length < 2} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1668ff] text-white disabled:opacity-40" aria-label="Enviar">→</button></form>}
        {!typing && stage === "action" && <div className="grid grid-cols-2 gap-2">{leadActions.map((item) => <button key={item} type="button" onClick={() => chooseAction(item)} className="min-h-11 rounded-xl border border-[#2878ff]/30 bg-[#1668ff]/10 px-3 text-sm font-semibold text-[#8ab7ff] hover:bg-[#1668ff]/20">{item === "Explorar" ? "Explorar" : item}</button>)}</div>}
        {!typing && stage === "category" && <div><p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-white/35">Selecciona una opción</p><div className="grid max-h-56 grid-cols-2 gap-2 overflow-y-auto">{opportunityTypes.map((item) => <button key={item} type="button" onClick={() => chooseCategory(item)} className="min-h-11 rounded-xl border border-white/10 bg-white/[0.035] px-3 text-sm text-white/70 hover:border-[#2878ff]/40 hover:bg-[#1668ff]/10 hover:text-white">{item}</button>)}</div></div>}
        {!typing && stage === "done" && <div className="space-y-2"><button type="button" onClick={goToWhatsApp} className="min-h-12 w-full rounded-xl bg-[#1fa855] px-4 text-sm font-semibold text-white hover:bg-[#25b760]">Continuar por WhatsApp</button><button type="button" onClick={resetConversation} className="min-h-11 w-full rounded-xl text-sm text-white/50 hover:bg-white/5 hover:text-white">Empezar de nuevo</button></div>}
      </div>
    </div>}

    <button type="button" onClick={() => { setIsOpen((current) => !current); if (!started) startConversation(); }} className="fixed bottom-5 right-4 z-[75] flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-[#1668ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] hover:bg-[#347cff] sm:right-6" aria-label={isOpen ? "Cerrar conversación" : "Abrir conversación"} aria-expanded={isOpen}><span aria-hidden="true">✦</span>Hablemos</button>
  </>;
}
