"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { usePathname } from "next/navigation";

import { trackEvent } from "@/lib/analytics";
import {
  actionLabels,
  leadActions,
  opportunityTypes,
  type LeadAction,
  type OpportunityType,
} from "@/lib/lead-options";

type Stage =
  | "name"
  | "action"
  | "category"
  | "custom"
  | "done";

type Message = {
  id: number;
  sender: "assistant" | "user";
  text: string;
};

const WHATSAPP_NUMBER = "573053971539";

const categoryPhrases: Record<
  OpportunityType,
  string
> = {
  Inmuebles: "un inmueble",
  "Empresas y negocios":
    "una empresa o negocio",
  Franquicias: "una franquicia",
  "Maquinaria y equipos":
    "maquinaria o equipos",
  Vehículos: "un vehículo",
  "Inventarios / mercancía":
    "inventario o mercancía",
  "Proyectos inmobiliarios":
    "un proyecto inmobiliario",
  Otra: "otra oportunidad",
};

function WhatsAppIcon({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 3C8.82 3 3 8.64 3 15.58c0 2.53.78 4.99 2.25 7.06L3.8 29l6.48-1.4a13.36 13.36 0 0 0 5.71 1.28C23.18 28.88 29 23.24 29 16.3 29 9.35 23.18 3 16 3Zm0 23.5c-1.8 0-3.57-.45-5.12-1.3l-.37-.2-3.85.83.82-3.63-.24-.37a10.3 10.3 0 0 1-1.68-5.53C5.56 10.61 10.25 6 16 6s10.44 4.61 10.44 10.3S21.75 26.5 16 26.5Zm5.73-7.68c-.31-.16-1.85-.9-2.14-1-.29-.1-.5-.16-.71.16-.21.3-.81.99-.99 1.19-.18.21-.37.23-.68.08-.31-.16-1.32-.48-2.51-1.51a9.12 9.12 0 0 1-1.74-2.1c-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.53.16-.18.21-.3.31-.51.11-.2.05-.38-.02-.53-.08-.16-.71-1.67-.97-2.29-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.38-.29.31-1.1 1.05-1.1 2.56s1.13 2.97 1.29 3.18c.16.2 2.22 3.31 5.37 4.64.75.32 1.33.51 1.79.65.75.24 1.43.21 1.97.13.61-.09 1.86-.74 2.12-1.45.26-.71.26-1.32.18-1.45-.08-.13-.29-.21-.6-.36Z" />
    </svg>
  );
}

function TypingIndicator() {
  return (
    <div
      className="
        flex
        w-fit
        items-center
        gap-1
        rounded-xl
        rounded-tl-sm
        bg-[#202c33]
        px-4
        py-3
      "
      aria-label="Escribiendo"
    >
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="
            h-1.5
            w-1.5
            animate-bounce
            rounded-full
            bg-white/50
          "
          style={{
            animationDelay: `${delay}ms`,
          }}
        />
      ))}
    </div>
  );
}

export default function FloatingProspectChat() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] =
    useState(false);

  const [started, setStarted] =
    useState(false);

  const [stage, setStage] =
    useState<Stage>("name");

  const [name, setName] =
    useState("");

  const [input, setInput] =
    useState("");

  const [action, setAction] =
    useState<LeadAction | null>(null);

  const [category, setCategory] =
    useState<OpportunityType | null>(
      null
    );

  const [
    customCategory,
    setCustomCategory,
  ] = useState("");

  const [messages, setMessages] =
    useState<Message[]>([]);

  const [typing, setTyping] =
    useState(false);

  const scrollRef =
    useRef<HTMLDivElement>(null);

  const inputRef =
    useRef<HTMLInputElement>(null);

  const timeoutRef =
    useRef<ReturnType<
      typeof setTimeout
    > | null>(null);

  const startedRef =
    useRef(false);

  const isAdmin =
    pathname.startsWith("/admin") ||
    pathname.startsWith(
      "/admin-login"
    );

  function addMessage(
    sender: Message["sender"],
    text: string
  ) {
    setMessages((current) => [
      ...current,
      {
        id:
          Date.now() +
          Math.floor(
            Math.random() * 10000
          ),
        sender,
        text,
      },
    ]);
  }

  function safeTrack(
    eventName: string,
    data: Record<
      string,
      string
    >
  ) {
    try {
      trackEvent(
        eventName,
        data
      );
    } catch {
      // Analytics nunca debe romper el chat.
    }
  }

  function clearChatTimeout() {
    if (
      timeoutRef.current
    ) {
      clearTimeout(
        timeoutRef.current
      );

      timeoutRef.current =
        null;
    }
  }

  function assistantReply(
    text: string,
    nextStage: Stage,
    delay = 650
  ) {
    clearChatTimeout();

    setTyping(true);

    timeoutRef.current =
      setTimeout(() => {
        setTyping(false);

        addMessage(
          "assistant",
          text
        );

        setStage(nextStage);

        timeoutRef.current =
          null;
      }, delay);
  }

  function startConversation() {
    if (
      startedRef.current
    ) {
      return;
    }

    startedRef.current =
      true;

    setStarted(true);
    setStage("name");
    setTyping(true);

    safeTrack(
      "prospect_chat_open",
      {
        source:
          "floating_chat",
      }
    );

    clearChatTimeout();

    timeoutRef.current =
      setTimeout(() => {
        setTyping(false);

        addMessage(
          "assistant",
          "Hola 👋 Soy el asistente de Gestor de Negocios. ¿Cómo te llamas?"
        );

        timeoutRef.current =
          null;
      }, 500);
  }

  function toggleChat() {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);

    if (
      !startedRef.current
    ) {
      startConversation();
    }
  }

  function submitText(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (typing) {
      return;
    }

    const clean = input
      .trim()
      .replace(/\s+/g, " ")
      .slice(0, 160);

    if (
      clean.length < 2
    ) {
      return;
    }

    setInput("");

    addMessage(
      "user",
      clean
    );

    if (
      stage === "name"
    ) {
      const cleanName =
        clean.slice(0, 60);

      setName(cleanName);

      assistantReply(
        `Mucho gusto, ${cleanName}. ¿Qué quieres hacer?`,
        "action"
      );

      return;
    }

    if (
      stage === "custom"
    ) {
      setCustomCategory(
        clean
      );

      assistantReply(
        `Gracias, ${name}. Ya tengo una mejor idea de la oportunidad. Puedes continuar directamente con David por WhatsApp.`,
        "done"
      );
    }
  }

  function chooseAction(
    selected: LeadAction
  ) {
    if (typing) {
      return;
    }

    setAction(selected);

    addMessage(
      "user",
      actionLabels[selected]
    );

    safeTrack(
      "prospect_action_selected",
      {
        action: selected,
        source:
          "floating_chat",
      }
    );

    assistantReply(
      `${name}, ¿qué tipo de oportunidad te interesa?`,
      "category"
    );
  }

  function chooseCategory(
    selected: OpportunityType
  ) {
    if (
      typing ||
      !action
    ) {
      return;
    }

    setCategory(selected);

    addMessage(
      "user",
      selected
    );

    safeTrack(
      "prospect_category_selected",
      {
        action,
        opportunity_type:
          selected,
        source:
          "floating_chat",
      }
    );

    if (
      selected === "Otra"
    ) {
      assistantReply(
        "Cuéntame qué tipo de oportunidad es.",
        "custom"
      );

      return;
    }

    assistantReply(
      `Perfecto, ${name}. Ya tengo una mejor idea de la oportunidad. Puedes continuar directamente con David por WhatsApp.`,
      "done"
    );
  }

  function buildWhatsAppMessage() {
    let subject =
      "una oportunidad de negocio";

    if (
      category === "Otra" &&
      customCategory
    ) {
      subject =
        customCategory;
    } else if (category) {
      subject =
        categoryPhrases[
          category
        ];
    }

    if (
      action === "Vender"
    ) {
      return `Hola David, soy ${name}. Quiero vender ${subject} y quisiera conversar sobre esta oportunidad.`;
    }

    if (
      action === "Comprar"
    ) {
      return `Hola David, soy ${name}. Quiero comprar ${subject} y quisiera conversar sobre esta oportunidad.`;
    }

    if (
      action === "Invertir"
    ) {
      return `Hola David, soy ${name}. Quiero invertir en ${subject} y quisiera conversar sobre esta oportunidad.`;
    }

    return `Hola David, soy ${name}. Quiero explorar ${subject} y recibir orientación.`;
  }

  function goToWhatsApp() {
    safeTrack(
      "prospect_whatsapp_click",
      {
        action:
          action ??
          "sin_definir",
        opportunity_type:
          category ??
          "sin_definir",
        source:
          "floating_chat",
      }
    );

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(
        buildWhatsAppMessage()
      )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function resetConversation() {
    clearChatTimeout();

    setMessages([]);
    setName("");
    setInput("");
    setAction(null);
    setCategory(null);
    setCustomCategory("");

    setStage("name");
    setTyping(true);

    timeoutRef.current =
      setTimeout(() => {
        setTyping(false);

        addMessage(
          "assistant",
          "Hola 👋 Soy el asistente de Gestor de Negocios. ¿Cómo te llamas?"
        );

        timeoutRef.current =
          null;
      }, 500);
  }

  useEffect(() => {
    if (
      !scrollRef.current
    ) {
      return;
    }

    scrollRef.current.scrollTop =
      scrollRef.current.scrollHeight;
  }, [
    messages,
    typing,
    stage,
  ]);

  useEffect(() => {
    if (
      !isOpen ||
      typing
    ) {
      return;
    }

    if (
      stage !== "name" &&
      stage !== "custom"
    ) {
      return;
    }

    const timer =
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

    return () =>
      clearTimeout(timer);
  }, [
    stage,
    isOpen,
    typing,
  ]);

  useEffect(() => {
    return () => {
      clearChatTimeout();
    };
  }, []);

  if (isAdmin) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <div
          role="dialog"
          aria-label="Chat de Gestor de Negocios"
          className="
            fixed
            bottom-24
            right-3
            z-[80]
            flex
            h-[min(590px,calc(100vh-120px))]
            w-[calc(100vw-1.5rem)]
            max-w-[400px]
            flex-col
            overflow-hidden
            rounded-[1.6rem]
            border
            border-white/10
            bg-[#0b141a]
            text-white
            shadow-[0_30px_90px_rgba(0,0,0,0.55)]
            sm:right-6
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              items-center
              justify-between
              bg-[#202c33]
              px-4
              py-3.5
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#25D366]
                  text-white
                "
              >
                <WhatsAppIcon className="h-7 w-7" />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  Gestor de Negocios
                </p>

                <div
                  className="
                    mt-1
                    flex
                    items-center
                    gap-1.5
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#25D366]
                    "
                  />

                  <p
                    className="
                      text-xs
                      text-white/55
                    "
                  >
                    En línea · WhatsApp
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setIsOpen(false)
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-2xl
                text-white/60
                transition
                hover:bg-white/10
                hover:text-white
              "
              aria-label="Cerrar chat"
            >
              ×
            </button>
          </div>

          {/* MENSAJES */}
          <div
            ref={scrollRef}
            className="
              flex-1
              space-y-3
              overflow-y-auto
              bg-[#0b141a]
              px-4
              py-5
            "
            aria-live="polite"
          >
            <div
              className="
                flex
                justify-center
                pb-1
              "
            >
              <span
                className="
                  rounded-lg
                  bg-[#182229]
                  px-3
                  py-1
                  text-[11px]
                  text-white/50
                "
              >
                Hoy
              </span>
            </div>

            {messages.map(
              (message) => (
                <div
                  key={
                    message.id
                  }
                  className={
                    message.sender ===
                    "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >
                  <div
                    className={
                      message.sender ===
                      "user"
                        ? `
                          max-w-[85%]
                          rounded-xl
                          rounded-tr-sm
                          bg-[#005c4b]
                          px-3.5
                          py-2.5
                          text-sm
                          leading-5
                          text-white
                        `
                        : `
                          max-w-[85%]
                          rounded-xl
                          rounded-tl-sm
                          bg-[#202c33]
                          px-3.5
                          py-2.5
                          text-sm
                          leading-5
                          text-white/90
                        `
                    }
                  >
                    {message.text}
                  </div>
                </div>
              )
            )}

            {typing && (
              <TypingIndicator />
            )}
          </div>

          {/* CONTROLES */}
          <div
            className="
              border-t
              border-white/[0.06]
              bg-[#202c33]
              p-3
            "
          >
            {!typing &&
              (stage ===
                "name" ||
                stage ===
                  "custom") && (
                <form
                  onSubmit={
                    submitText
                  }
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <input
                    ref={
                      inputRef
                    }
                    type="text"
                    value={input}
                    onChange={(
                      event
                    ) =>
                      setInput(
                        event
                          .target
                          .value
                      )
                    }
                    placeholder={
                      stage ===
                      "name"
                        ? "Escribe tu nombre..."
                        : "Escribe el tipo..."
                    }
                    maxLength={
                      160
                    }
                    autoComplete={
                      stage ===
                      "name"
                        ? "name"
                        : "off"
                    }
                    className="
                      min-h-12
                      min-w-0
                      flex-1
                      rounded-full
                      border-0
                      bg-[#2a3942]
                      px-5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/35
                    "
                    aria-label={
                      stage ===
                      "name"
                        ? "Tu nombre"
                        : "Tipo de oportunidad"
                    }
                  />

                  <button
                    type="submit"
                    disabled={
                      input
                        .trim()
                        .length <
                      2
                    }
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#25D366]
                      text-lg
                      text-white
                      transition
                      hover:bg-[#20bd5a]
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
                    aria-label="Enviar"
                  >
                    ➤
                  </button>
                </form>
              )}

            {!typing &&
              stage ===
                "action" && (
                <div
                  className="
                    grid
                    grid-cols-2
                    gap-2
                  "
                >
                  {leadActions.map(
                    (item) => (
                      <button
                        key={
                          item
                        }
                        type="button"
                        onClick={() =>
                          chooseAction(
                            item
                          )
                        }
                        className="
                          min-h-11
                          rounded-xl
                          border
                          border-white/10
                          bg-[#2a3942]
                          px-3
                          text-sm
                          font-semibold
                          text-white/85
                          transition
                          hover:border-[#25D366]/50
                          hover:bg-[#31434d]
                        "
                      >
                        {item ===
                        "Explorar"
                          ? "Explorar"
                          : item}
                      </button>
                    )
                  )}
                </div>
              )}

            {!typing &&
              stage ===
                "category" && (
                <div>
                  <p
                    className="
                      mb-3
                      text-xs
                      uppercase
                      tracking-[0.16em]
                      text-white/40
                    "
                  >
                    Selecciona una opción
                  </p>

                  <div
                    className="
                      grid
                      max-h-56
                      grid-cols-2
                      gap-2
                      overflow-y-auto
                    "
                  >
                    {opportunityTypes.map(
                      (item) => (
                        <button
                          key={
                            item
                          }
                          type="button"
                          onClick={() =>
                            chooseCategory(
                              item
                            )
                          }
                          className="
                            min-h-11
                            rounded-xl
                            border
                            border-white/10
                            bg-[#2a3942]
                            px-3
                            text-sm
                            text-white/75
                            transition
                            hover:border-[#25D366]/50
                            hover:bg-[#31434d]
                          "
                        >
                          {
                            item
                          }
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

            {!typing &&
              stage ===
                "done" && (
                <div
                  className="
                    space-y-2
                  "
                >
                  <button
                    type="button"
                    onClick={
                      goToWhatsApp
                    }
                    className="
                      flex
                      min-h-12
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-[#25D366]
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#20bd5a]
                    "
                  >
                    <WhatsAppIcon className="h-5 w-5" />

                    Continuar por WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={
                      resetConversation
                    }
                    className="
                      min-h-11
                      w-full
                      rounded-xl
                      text-sm
                      text-white/50
                      transition
                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    Empezar de nuevo
                  </button>
                </div>
              )}
          </div>
        </div>
      )}

      {/* BOTÓN FLOTANTE */}
      <button
        type="button"
        onClick={
          toggleChat
        }
        className="
          fixed
          bottom-5
          right-4
          z-[75]
          flex
          min-h-14
          items-center
          gap-2.5
          rounded-full
          bg-[#25D366]
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          shadow-[0_15px_40px_rgba(37,211,102,0.35)]
          transition
          hover:-translate-y-0.5
          hover:bg-[#20bd5a]
          sm:right-6
        "
        aria-label={
          isOpen
            ? "Cerrar conversación"
            : "Abrir conversación"
        }
        aria-expanded={
          isOpen
        }
      >
        <WhatsAppIcon className="h-6 w-6" />

        <span>
          Chatea por WhatsApp
        </span>
      </button>
    </>
  );
}