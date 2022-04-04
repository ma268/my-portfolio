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
        (result) => {
          e.target.reset();
          toast.success(
            `Thank you for sending me a message. I'll get back to you as soon as I can.`,
            {
              duration: 8000,
              position: "top-right",
            }
          );
          setSendingEmail(false);
        },
        (error) => {
          console.log(error.text);
          toast.warning(
            `Oops, there was an error sending your message, please try again later.`,
            {
              duration: 8000,
              position: "top-right",
            }
          );
          setSendingEmail(false);
        }
      );
  };
  return (
    <section id="contact" className="container mx-auto my-28  md:my-60">
      <div className="text-center mb-14">
        <h5>feel like chatting?</h5>
        <h2 className="font-extrabold text-5xl mb-7">Contact Me</h2>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-5 max-w-xl mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
          className="w-100 p-6 rounded-lg ring ring-green-100 bg-green-200 active:ring-green-300 focus:ring-green-300 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          required
          className="w-100 p-6 rounded-lg ring ring-green-100 bg-green-200 active:ring-green-300 focus:ring-green-300 outline-none"
        />
        <textarea
          name="message"
          rows="7"
          placeholder="Ask Me Anything!"
          required
          className="w-100 p-6 rounded-lg ring ring-green-100 resize-none bg-green-200 active:ring-green-300 focus:ring-green-300 outline-none"
        />
        <button
          type="submit"
          className={`${
            sendingEmail ? " cursor-wait " : " cursor-pointer "
          } bg-green-600 hover:bg-green-700 rounded-xl text-white p-3`}
          disabled={sendingEmail ? true : false}
        >
          {sendingEmail ? `Sending...` : `Reach out`}
        </button>
      </form>
      <Toaster />
    </section>
  );
};

export default Contact;
