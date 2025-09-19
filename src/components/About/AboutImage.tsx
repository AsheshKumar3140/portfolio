import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="animate-fade-in-up flex justify-center md:col-span-1">
      <div className="relative h-64 w-64 md:h-80 md:w-80">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-purple-600 opacity-70 blur-2xl"></div>
        <Image
          alt="Ashesh Kumar's Headshot"
          className="relative h-full w-full rounded-full border-4 border-[var(--border-color)] object-cover shadow-lg"
          src="/me.png"
          width={400}
          height={400}
          quality={99}
          priority
        />
      </div>
    </div>
  );
}
