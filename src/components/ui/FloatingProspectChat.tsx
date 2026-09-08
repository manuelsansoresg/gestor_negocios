"use client";

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";

type ActionType = "comprar" | "vender";

type CategoryType =
  | "Inmueble"
  | "Empresa"
  | "Negocio"
  | "Franquicia"
  | "Maquinaria"
  | "Vehículo"
  | "Inventario"
  | "Proyecto"
  | "Otro";

type Stage =
  | "name"
  | "action"
  | "category"
  | "done";

type Message = {
  id: number;
  sender: "assistant" | "user";
  text: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const categories: CategoryType[] = [
  "Inmueble",
  "Empresa",
  "Negocio",
  "Franquicia",
  "Maquinaria",
  "Vehículo",
  "Inventario",
  "Proyecto",
  "Otro",
];

const categoryPhrases: Record<CategoryType, string> = {
  Inmueble: "un inmueble",
  Empresa: "una empresa",
  Negocio: "un negocio",
  Franquicia: "una franquicia",
  Maquinaria: "maquinaria",
  Vehículo: "un vehículo",
  Inventario: "un inventario",
  Proyecto: "un proyecto",
  Otro: "otra oportunidad",
};

const WHATSAPP_NUMBER = "573053971539";

function trackEvent(
  event: string,
  data: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer =
    window.dataLayer || [];

  window.dataLayer.push({
    event,
    ...data,
  });
}

function TypingIndicator() {
  return (
    <div
      className="
        flex w-fit items-center gap-1
        rounded-2xl rounded-bl-md
        border border-white/10
        bg-white/[0.06]
        px-4 py-3
      "
      aria-label="Escribiendo"
    >
      <span
        className="
          h-1.5 w-1.5
          animate-bounce
          rounded-full
          bg-white/50
        "
        style={{
          animationDelay: "0ms",
        }}
      />

      <span
        className="
          h-1.5 w-1.5
          animate-bounce
          rounded-full
          bg-white/50
        "
        style={{
          animationDelay: "140ms",
        }}
      />

      <span
        className="
          h-1.5 w-1.5
          animate-bounce
          rounded-full
          bg-white/50
        "
        style={{
          animationDelay: "280ms",
        }}
      />
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

  const [nameInput, setNameInput] =
    useState("");

  const [action, setAction] =
    useState<ActionType | null>(
      null
    );

  const [category, setCategory] =
    useState<CategoryType | null>(
      null
    );

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
            Math.random() * 1000
          ),
        sender,
        text,
      },
    ]);
  }

  function assistantReply(
    text: string,
    callback?: () => void,
    delay = 750
  ) {
    setTyping(true);

    if (timeoutRef.current) {
      clearTimeout(
        timeoutRef.current
      );
    }

    timeoutRef.current =
      setTimeout(() => {
        setTyping(false);

        addMessage(
          "assistant",
          text
        );

        callback?.();
      }, delay);
  }

  function startConversation() {
    if (started) {
      return;
    }

    setStarted(true);
    setStage("name");
    setTyping(true);

    trackEvent(
      "prospect_chat_open"
    );

    timeoutRef.current =
      setTimeout(() => {
        setTyping(false);

        addMessage(
          "assistant",
          "Hola 👋 Soy el asistente de Gestor de Negocios. Antes de comenzar, ¿cómo te llamas?"
        );

        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }, 700);
  }

  function openChat() {
    setIsOpen(true);

    if (!started) {
      startConversation();
    }
  }

  function handleNameSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (typing) {
      return;
    }

    const cleanName =
      nameInput
        .trim()
        .replace(/\s+/g, " ");

    if (cleanName.length < 2) {
      return;
    }

    const finalName =
      cleanName.slice(0, 60);

    setName(finalName);
    setNameInput("");

    addMessage(
      "user",
      finalName
    );

    trackEvent(
      "prospect_name_entered"
    );

    assistantReply(
      `Mucho gusto, ${finalName}. ¿Qué quieres hacer?`,
      () => {
        setStage("action");
      },
      700
    );
  }

  function handleAction(
    selectedAction: ActionType
  ) {
    if (typing) {
      return;
    }

    setAction(
      selectedAction
    );

    addMessage(
      "user",
      selectedAction === "comprar"
        ? "Quiero comprar"
        : "Quiero vender"
    );

    trackEvent(
      "prospect_action_selected",
      {
        prospect_action:
          selectedAction,
      }
    );

    assistantReply(
      selectedAction === "comprar"
        ? `${name}, ¿qué tipo de oportunidad estás buscando comprar?`
        : `${name}, ¿qué tipo de oportunidad quieres vender?`,
      () => {
        setStage("category");
      }
    );
  }

  function handleCategory(
    selectedCategory: CategoryType
  ) {
    if (
      typing ||
      !action
    ) {
      return;
    }

    setCategory(
      selectedCategory
    );

    addMessage(
      "user",
      selectedCategory
    );

    trackEvent(
      "prospect_category_selected",
      {
        prospect_action:
          action,

        prospect_category:
          selectedCategory,
      }
    );

    const response =
      action === "comprar"
        ? `Perfecto, ${name}. Ya tengo una mejor idea de lo que estás buscando. Puedes continuar directamente con David por WhatsApp.`
        : `Perfecto, ${name}. Ya tengo una mejor idea de lo que quieres vender. Puedes continuar directamente con David por WhatsApp.`;

    assistantReply(
      response,
      () => {
        setStage("done");
      },
      900
    );
  }

  function buildWhatsAppMessage() {
    const firstName =
      name || "Hola";

    if (
      !action ||
      !category
    ) {
      return `Hola David, soy ${firstName}. Quisiera consultar sobre una oportunidad de negocio.`;
    }

    const phrase =
      categoryPhrases[
        category
      ];

    if (
      action === "comprar"
    ) {
      return `Hola David, soy ${firstName}. Estoy buscando comprar ${phrase} y quisiera consultar las oportunidades disponibles.`;
    }

    return `Hola David, soy ${firstName}. Quiero vender ${phrase} y me gustaría consultar una oportunidad.`;
  }

  function goToWhatsApp() {
    const whatsappMessage =
      buildWhatsAppMessage();

    trackEvent(
      "prospect_whatsapp_click",
      {
        prospect_action:
          action,

        prospect_category:
          category,

        prospect_has_name:
          Boolean(name),
      }
    );

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function resetConversation() {
    if (timeoutRef.current) {
      clearTimeout(
        timeoutRef.current
      );
    }

    setMessages([]);
    setName("");
    setNameInput("");
    setAction(null);
    setCategory(null);

    setStage("name");
    setStarted(false);
    setTyping(false);

    setTimeout(() => {
      startConversation();
    }, 50);
  }

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }

    scrollRef.current.scrollTo({
      top:
        scrollRef.current
          .scrollHeight,
      behavior: "smooth",
    });
  }, [
    messages,
    typing,
    stage,
  ]);

  useEffect(() => {
    if (
      stage === "name" &&
      isOpen &&
      !typing
    ) {
      const timer =
        setTimeout(() => {
          inputRef.current?.focus();
        }, 150);

      return () =>
        clearTimeout(timer);
    }
  }, [
    stage,
    isOpen,
    typing,
  ]);

  useEffect(() => {
    return () => {
      if (
        timeoutRef.current
      ) {
        clearTimeout(
          timeoutRef.current
        );
      }
    };
  }, []);

  if (isAdmin) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <div
          className="
            fixed bottom-24
            right-4 z-[80]
            w-[calc(100vw-2rem)]
            max-w-[390px]
            overflow-hidden
            rounded-[1.6rem]
            border
            border-white/10
            bg-[#07111f]
            text-white
            shadow-[0_30px_90px_rgba(0,0,0,0.55)]
            sm:right-6
          "
          role="dialog"
          aria-label="Asistente de Gestor de Negocios"
        >
          <div
            className="
              flex items-center
              justify-between
              border-b
              border-white/10
              bg-[#0a1525]
              px-5 py-4
            "
          >
            <div
              className="
                flex min-w-0
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex h-10 w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1668ff]/15
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    h-5 w-5
                    text-[#68a0ff]
                  "
                  aria-hidden="true"
                >
                  <path
                    d="M20 11.5a7.5 7.5 0 0 1-8 7.47A8.7 8.7 0 0 1 8 18l-4 1 1.25-3.55A7.5 7.5 0 1 1 20 11.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <p
                  className="
                    truncate
                    text-sm
                    font-semibold
                  "
                >
                  Gestor de Negocios
                </p>

                <div
                  className="
                    mt-0.5
                    flex items-center
                    gap-1.5
                  "
                >
                  <span
                    className="
                      h-1.5 w-1.5
                      rounded-full
                      bg-emerald-400
                    "
                  />

                  <span
                    className="
                      text-xs
                      text-white/45
                    "
                  >
                    Asistente comercial
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setIsOpen(false)
              }
              className="
                flex h-9 w-9
                items-center
                justify-center
                rounded-full
                text-white/45
                transition
                hover:bg-white/10
                hover:text-white
              "
              aria-label="Cerrar chat"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div
            ref={scrollRef}
            className="
              max-h-[360px]
              min-h-[270px]
              space-y-3
              overflow-y-auto
              px-4 py-5
            "
            aria-live="polite"
          >
            {messages.map(
              (message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender ===
                    "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={
                      message.sender ===
                      "user"
                        ? `
                          max-w-[82%]
                          rounded-2xl
                          rounded-br-md
                          bg-[#1668ff]
                          px-4 py-3
                          text-sm
                          leading-6
                          text-white
                        `
                        : `
                          max-w-[88%]
                          rounded-2xl
                          rounded-bl-md
                          border
                          border-white/10
                          bg-white/[0.06]
                          px-4 py-3
                          text-sm
                          leading-6
                          text-white/80
                        `
                    }
                  >
                    {message.text}
                  </div>
                </div>
              )
            )}

            {typing && (
              <div className="flex justify-start">
                <TypingIndicator />
              </div>
            )}
          </div>

          <div
            className="
              border-t
              border-white/10
              bg-[#091321]
              px-4 py-4
            "
          >
            {!typing &&
              stage === "name" && (
                <form
                  onSubmit={
                    handleNameSubmit
                  }
                  className="
                    flex items-center
                    gap-2
                  "
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={nameInput}
                    onChange={(event) =>
                      setNameInput(
                        event.target
                          .value
                      )
                    }
                    placeholder="Escribe tu nombre..."
                    maxLength={60}
                    autoComplete="name"
                    className="
                      min-h-11
                      min-w-0
                      flex-1
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.05]
                      px-4
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/30
                      focus:border-[#2878ff]/60
                    "
                    aria-label="Tu nombre"
                  />

                  <button
                    type="submit"
                    disabled={
                      nameInput.trim()
                        .length < 2
                    }
                    className="
                      flex h-11 w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#1668ff]
                      text-white
                      transition
                      hover:bg-[#347cff]
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
                    aria-label="Enviar nombre"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        d="m4 12 16-8-5.5 16-3-6.5L4 12Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />

                      <path
                        d="m11.5 13.5 4.5-4.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
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
                  <button
                    type="button"
                    onClick={() =>
                      handleAction(
                        "comprar"
                      )
                    }
                    className="
                      min-h-11
                      rounded-xl
                      border
                      border-[#2878ff]/30
                      bg-[#1668ff]/10
                      px-4
                      text-sm
                      font-semibold
                      text-[#8ab7ff]
                      transition
                      hover:border-[#2878ff]/60
                      hover:bg-[#1668ff]/20
                    "
                  >
                    Comprar
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleAction(
                        "vender"
                      )
                    }
                    className="
                      min-h-11
                      rounded-xl
                      border
                      border-[#d4af37]/30
                      bg-[#d4af37]/10
                      px-4
                      text-sm
                      font-semibold
                      text-[#e8c758]
                      transition
                      hover:border-[#d4af37]/60
                      hover:bg-[#d4af37]/15
                    "
                  >
                    Vender
                  </button>
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
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-white/35
                    "
                  >
                    Selecciona una opción
                  </p>

                  <div
                    className="
                      grid
                      grid-cols-2
                      gap-2
                    "
                  >
                    {categories.map(
                      (item) => (
                        <button
                          key={
                            item
                          }
                          type="button"
                          onClick={() =>
                            handleCategory(
                              item
                            )
                          }
                          className="
                            min-h-10
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.035]
                            px-3
                            text-sm
                            text-white/70
                            transition
                            hover:border-[#2878ff]/40
                            hover:bg-[#1668ff]/10
                            hover:text-white
                          "
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

            {!typing &&
              stage === "done" && (
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={
                      goToWhatsApp
                    }
                    className="
                      flex min-h-12
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#16a34a]
                      px-5
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#15803d]
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L4 20l1.1-3.9a8.4 8.4 0 1 1 15.4-4.5Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M9 8.2c.2-.5.4-.5.7-.5h.4c.2 0 .4 0 .5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.6.5 1 1.3 1.8 2.3 2.3.2.1.4.1.6-.1l.8-.9c.2-.2.4-.3.7-.1l1.8.8c.3.1.4.3.4.5 0 .3-.2 1.4-.9 2-.6.5-1.4.7-2.3.5-1.6-.4-3.3-1.3-4.7-2.7-1.1-1.1-2-2.6-2.3-4-.2-.8.1-1.5.5-2Z"
                        fill="currentColor"
                      />
                    </svg>

                    Continuar por WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={
                      resetConversation
                    }
                    className="
                      min-h-10
                      w-full
                      rounded-xl
                      px-4
                      text-xs
                      font-medium
                      text-white/40
                      transition
                      hover:bg-white/5
                      hover:text-white/70
                    "
                  >
                    Empezar de nuevo
                  </button>
                </div>
              )}
          </div>

          <div
            className="
              border-t
              border-white/5
              px-4 py-2.5
              text-center
            "
          >
            <p
              className="
                text-[10px]
                leading-4
                text-white/25
              "
            >
              Tus respuestas solo
              se utilizan para
              preparar tu consulta.
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            openChat();
          }
        }}
        className="
          fixed bottom-5
          right-4 z-[80]
          flex min-h-14
          items-center
          gap-3
          rounded-full
          border
          border-[#d4af37]/20
          bg-[#07111f]
          px-5
          text-sm
          font-semibold
          text-white
          shadow-[0_18px_50px_rgba(0,0,0,0.4)]
          transition
          duration-300
          hover:-translate-y-1
          hover:border-[#d4af37]/50
          hover:bg-[#0b192c]
          sm:right-6
        "
        aria-label={
          isOpen
            ? "Cerrar asistente comercial"
            : "Iniciar conversación"
        }
      >
        <span
          className="
            relative flex
            h-9 w-9
            items-center
            justify-center
            rounded-full
            bg-[#1668ff]
          "
        >
          {!isOpen && (
            <span
              className="
                absolute
                -right-0.5
                -top-0.5
                h-2.5 w-2.5
                rounded-full
                border-2
                border-[#07111f]
                bg-emerald-400
              "
            />
          )}

          {isOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="m7 10 5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M20 11.5a7.5 7.5 0 0 1-8 7.47A8.7 8.7 0 0 1 8 18l-4 1 1.25-3.55A7.5 7.5 0 1 1 20 11.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>

        <span className="hidden sm:inline">
          {isOpen
            ? "Cerrar"
            : "Hablemos"}
        </span>
      </button>
    </>
  );
}