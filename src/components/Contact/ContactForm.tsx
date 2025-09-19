"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Initialize EmailJS with your public key
      emailjs.init("PkUB3Cb2ifiTtnZf3"); // Replace with your EmailJS public key
      
      const result = await emailjs.send(
        "service_kh39vnc", // Replace with your EmailJS service ID
        "template_ei0pbif", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "aashukumar3140@gmail.com" // Your email
        }
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in-up animate-delay-200">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="sr-only" htmlFor="name">Name</label>
          <input
            className="w-full rounded-md border border-[var(--border-color)] bg-[var(--secondary-color)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:outline-none"
            id="name"
            placeholder="Your Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            className="w-full rounded-md border border-[var(--border-color)] bg-[var(--secondary-color)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:outline-none"
            id="email"
            placeholder="Your Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="subject">Subject</label>
          <input
            className="w-full rounded-md border border-[var(--border-color)] bg-[var(--secondary-color)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:outline-none"
            id="subject"
            placeholder="Subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea
            className="w-full rounded-md border border-[var(--border-color)] bg-[var(--secondary-color)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] focus:outline-none"
            id="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="p-4 rounded-md bg-green-500/20 border border-green-500/30">
            <p className="text-green-400 text-center">Message sent successfully! I'll get back to you soon.</p>
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="p-4 rounded-md bg-red-500/20 border border-red-500/30">
            <p className="text-red-400 text-center">Failed to send message. Please try again or email me directly.</p>
          </div>
        )}
        
        <div>
          <button
            className="w-full rounded-full bg-[var(--primary-color)] px-8 py-4 text-base font-bold text-[var(--text-on-primary)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[var(--primary-color)]/30 disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
