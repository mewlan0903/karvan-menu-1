"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={goTop}
      aria-label="Yukarı çık"
      className={`fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full border border-[#c9a55c]/60 bg-[#1a0f08]/90 backdrop-blur text-[#c9a55c] shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_20px_rgba(201,165,92,0.2)] hover:bg-[#c9a55c] hover:text-[#1a0f08] transition-all ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mx-auto">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
