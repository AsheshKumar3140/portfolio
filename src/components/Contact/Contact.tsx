import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="py-24 sm:py-32" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
          Contact Me
        </h2>
        <p className="mt-4 text-lg text-[var(--text-secondary)]">
          Have a project in mind or want to connect? Let&apos;s talk.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
