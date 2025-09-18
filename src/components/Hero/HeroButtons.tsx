"use client";

import Link from "next/link";
import { useState } from "react";
import CVModal from "@/components/CV/CVModal";

export default function HeroButtons() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const openCVModal = () => {
    setIsCVModalOpen(true);
  };

  const closeCVModal = () => {
    setIsCVModalOpen(false);
  };

  return (
    <>
      <div className="animate-fade-in-up animate-delay-400 mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="#projects"
          className="flex items-center justify-center rounded-full bg-[var(--primary-color)] px-8 py-4 text-base font-bold text-[var(--text-on-primary)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[var(--primary-color)]/30"
        >
          Explore My Work
        </Link>
        <button
          onClick={openCVModal}
          className="flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--secondary-color)] px-8 py-4 text-base font-bold text-[var(--text-primary)] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[var(--border-color)]"
        >
          Download CV
          <span className="material-symbols-outlined ml-2">download</span>
        </button>
      </div>
      <CVModal isOpen={isCVModalOpen} onClose={closeCVModal} />
    </>
  );
}
