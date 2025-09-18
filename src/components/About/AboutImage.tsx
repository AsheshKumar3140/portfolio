import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="animate-fade-in-up flex justify-center md:col-span-1">
      <div className="relative h-64 w-64 md:h-80 md:w-80">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-purple-600 opacity-70 blur-2xl"></div>
        <Image
          alt="Ashesh Kumar's Headshot"
          className="relative h-full w-full rounded-full border-4 border-[var(--border-color)] object-cover shadow-lg"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBobyRkRotWSJWOcLOQEYzLmKAJvyjJ22BF7cx0iNYtMubAl7tuqh3fJLVzjtv88fONjAtYd4JAHfDyJBSlDGG1MS0FZX7ebjPldChQRscL_RzSnTptyB4FaE10v5Fg64i1xB_j9W15MrgVbrksenWXABBjJYL-lywrsN3Fdsf5au1816coG4JD6yqeHER17FeFnDhz-dUfDnKvN8Il8dTe5KHLfPu3LAOBpfpYxbmSdkBfRtP-3oRQWN28GZ2HMDzucfZU06KUY5o"
          width={320}
          height={320}
        />
      </div>
    </div>
  );
}
