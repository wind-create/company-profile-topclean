"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Scroll to top"
      className="fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full bg-zinc-800 text-white flex items-center justify-center shadow-lg hover:bg-zinc-700 transition"
    >
      ↑
    </button>
  );
}
