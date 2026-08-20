import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/contact.css";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus("Sending...");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        {
          publicKey: "YOUR_PUBLIC_KEY",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact">

      {/* LEFT SIDE */}

      <div className="contact-info">

        <h2>
          Contact
        </h2>

        <p className="contact-description">
          Have a story to share, a question to ask, or an
          interesting conversation in mind? I'd love to hear
          from you.
        </p>

      </div>


      {/* RIGHT SIDE */}

      <div className="contact-form-container">

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <div className="form-group">
            <label htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Your name"
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="your@email.com"
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              rows={7}
              required
            />
          </div>


          <button
            type="submit"
            className="send-button"
          >
            SEND MESSAGE
          </button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;