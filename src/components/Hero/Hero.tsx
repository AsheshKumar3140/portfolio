import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center text-center">
      <div className="max-w-4xl">
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
      </div>
    </section>
  );
}
