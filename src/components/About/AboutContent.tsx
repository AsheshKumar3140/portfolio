"use client";

import Link from "next/link";
import { useState } from "react";
import CVModal from "@/components/CV/CVModal";

export default function AboutContent() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const openCVModal = () => {
    setIsCVModalOpen(true);
  };

  const closeCVModal = () => {
    setIsCVModalOpen(false);
  };
  return (
    <>
    <div className="animate-fade-in-up animate-delay-200 md:col-span-2">
      <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
        About Me
      </h2>
      <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
        From a childhood fascination with tinkering with computers to a career in software development, my journey has been driven by a relentless curiosity and a passion for creating things that make a difference. I thrive on the challenge of building beautiful, intuitive, and performant digital experiences.
      </p>
      <p className="mt-4 text-lg leading-8 text-[var(--text-secondary)]">
        My goal is to work on projects that push the boundaries of technology and have a positive impact on people's lives. When I'm not coding, you can find me exploring hiking trails, experimenting with new recipes, or contributing to open-source projects.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={openCVModal}
          className="flex items-center justify-center rounded-full bg-[var(--primary-color)] px-6 py-3 text-base font-semibold text-[var(--text-on-primary)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[var(--primary-color)]/30"
        >
          My Resume
        </button>
        <Link
          href="https://www.linkedin.com/in/ashesh-kumar-b04446244/"
          className="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
          </svg>
        </Link>
      </div>
    </div>
    <CVModal isOpen={isCVModalOpen} onClose={closeCVModal} />
    </>
  );
}
