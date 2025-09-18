export default function ContactForm() {
  return (
    <div className="animate-fade-in-up animate-delay-200">
      <form className="space-y-6">
        <div>
          <label className="sr-only" htmlFor="name">Name</label>
          <input
            className="w-full rounded-md border border-[var(--border-color)] bg-[var(--secondary-color)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:outline-none"
            id="name"
            placeholder="Your Name"
            type="text"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            className="w-full rounded-md border border-[var(--border-color)] bg-[var(--secondary-color)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:outline-none"
            id="email"
            placeholder="Your Email"
            type="email"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="subject">Subject</label>
          <input
            className="w-full rounded-md border border-[var(--border-color)] bg-[var(--secondary-color)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:outline-none"
            id="subject"
            placeholder="Subject"
            type="text"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea
            className="w-full rounded-md border border-[var(--border-color)] bg-[var(--secondary-color)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:outline-none"
            id="message"
            placeholder="Your Message"
            rows={5}
          />
        </div>
        <div>
          <button
            className="w-full rounded-full bg-[var(--primary-color)] px-8 py-4 text-base font-bold text-[var(--text-on-primary)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[var(--primary-color)]/30"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
