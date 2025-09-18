"use client";

import { useEffect } from "react";

type CVModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CVModal({ isOpen, onClose }: CVModalProps) {
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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ashesh Resume SE.pdf"; // Path to your resume in public folder
    link.download = "Ashesh_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[var(--background-dark)] rounded-lg shadow-2xl max-w-4xl w-full mx-4 h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-2 px-6 border-b border-[var(--border-color)] flex-shrink-0">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">My Resume</h2>
          <button
            onClick={onClose}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* PDF Preview */}
        <div className="flex-1 p-2 min-h-0">
          <div className="bg-[var(--secondary-color)] rounded-lg overflow-hidden h-full">
            <iframe
              src="/Ashesh Resume SE.pdf#toolbar=0&navpanes=0&scrollbar=1"
              className="w-full h-full border-0"
              title="Resume Preview"
            />
          </div>
        </div>
        
        {/* Download Section - Fixed at bottom */}
        <div className="p-2 px-6 text-center border-t border-[var(--border-color)] flex-shrink-0">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--primary-color)] px-6 py-3 text-base font-semibold text-[var(--text-on-primary)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[var(--primary-color)]/30"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
