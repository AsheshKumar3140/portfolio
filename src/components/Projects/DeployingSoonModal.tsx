"use client";

import { useEffect } from "react";

type DeployingSoonModalProps = {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
};

export default function DeployingSoonModal({ isOpen, onClose, projectTitle }: DeployingSoonModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[var(--background-dark)] rounded-lg shadow-2xl max-w-md w-full mx-4 p-8 text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-[var(--primary-color)]/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-[var(--primary-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Content */}
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
          Deploying Soon!
        </h2>
        
        <p className="text-[var(--text-secondary)] mb-6">
          <span className="font-semibold text-[var(--primary-color)]">{projectTitle}</span> is currently being prepared for deployment. 
          Check back soon to see it live!
        </p>

        {/* Progress indicator */}
        <div className="mb-6">
          <div className="flex justify-center space-x-1 mb-2">
            <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">Preparing deployment...</p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="w-full rounded-full bg-[var(--primary-color)] px-6 py-3 text-base font-semibold text-[var(--text-on-primary)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[var(--primary-color)]/30"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}

