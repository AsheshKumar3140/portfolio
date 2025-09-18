import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section className="py-24 sm:py-32" id="about">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3 lg:gap-16">
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
}
