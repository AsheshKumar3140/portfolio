"use client";

import Link from "next/link";
import { useState } from "react";
import DeployingSoonModal from "./DeployingSoonModal";

type ProjectCardProps = {
  title: string;
  imageUrl: string;
  url?: string;
  delay?: string;
};

export default function ProjectCard({ title, imageUrl, url, delay = "" }: ProjectCardProps) {
  const [isDeployingModalOpen, setIsDeployingModalOpen] = useState(false);

  const handleViewDetails = () => {
    if (url) {
      // Open external link
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // Show deploying soon modal
      setIsDeployingModalOpen(true);
    }
  };

  const closeDeployingModal = () => {
    setIsDeployingModalOpen(false);
  };

  return (
    <>
      <div className={`animate-fade-in-up ${delay} group relative overflow-hidden rounded-lg bg-[var(--secondary-color)] shadow-lg`}>
        <div 
          className="w-full transform bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
          style={{ 
            backgroundImage: `url("${imageUrl}")`,
            aspectRatio: "1472/704"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8">
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">{title}</h3>
          <button 
            onClick={handleViewDetails}
            className="mt-4 inline-flex items-center font-semibold text-[var(--primary-color)] transition-all group-hover:text-[var(--text-primary)]"
          >
            View Details 
            <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <DeployingSoonModal 
        isOpen={isDeployingModalOpen} 
        onClose={closeDeployingModal} 
        projectTitle={title}
      />
    </>
  );
}
