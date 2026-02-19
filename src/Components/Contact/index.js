import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [sendingEmail, setSendingEmail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingEmail(true);

    emailjs
      .sendForm(
        "service_69c97on",
        "template_ohm8p2i",
        form.current,
        "pUP4SkBvOgTjuFu-C"
      )
      .then(
        () => {
          e.target.reset();
          toast.success("Message sent successfully.", {
            duration: 4000,
            position: "bottom-center",
          });
          setSendingEmail(false);
        },
        () => {
          toast.error("Something went wrong. Please try again.", {
            duration: 4000,
            position: "bottom-center",
          });
          setSendingEmail(false);
        }
      );
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-28 md:py-56
">

      {/* Section Header */}
      <div className="mb-32">
        <h2 className="text-4xl font-semibold tracking-tight mb-6">
          Contact
        </h2>
        <p className="text-[16px] leading-[1.9] md:text-[17px] md:leading-[1.8] text-gray-600 max-w-[60ch]">
          If you'd like to connect, collaborate or discuss a project,
          feel free to reach out.
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-10 max-w-[60ch]"
      >

        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="border-b border-gray-300 pb-3 text-[16px] focus:outline-none focus:border-black transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="border-b border-gray-300 pb-3 text-[16px] focus:outline-none focus:border-black transition"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your message"
          required
          className="border-b border-gray-300 pb-3 text-[16px] resize-none focus:outline-none focus:border-black transition"
        />

        <button
          type="submit"
          disabled={sendingEmail}
          className="mt-6 px-6 py-3 bg-black text-white rounded-md hover:opacity-80 transition w-fit"
        >
          {sendingEmail ? "Sending..." : "Send Message"}
        </button>

      </form>

      <Toaster />

    </section>
  );
};

export default Contact;
