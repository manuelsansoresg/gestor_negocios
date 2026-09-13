"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function BackToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (pathname.startsWith("/admin")) return null;
  return <button type="button" onClick={() => { const start = document.getElementById("inicio"); if (start) start.scrollIntoView({ behavior: "smooth" }); else window.scrollTo({ top: 0, behavior: "smooth" }); }} aria-label="Volver al inicio" className={`fixed bottom-5 left-4 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#07111f] text-xl text-white shadow-lg transition sm:left-6 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}>↑</button>;
}
