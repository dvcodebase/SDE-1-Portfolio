import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    const blockedDomains = [
      "tempmail.com",
      "10minutemail.com",
      "guerrillamail.com",
    ];

    const domain = email.split("@")[1];

    if (blockedDomains.includes(domain)) {
      setStatus("Temporary email addresses are not allowed.");
      return;
    }

    setLoading(true);
    setStatus("");

    const templateParams = {
      title: email,
      name: email,
      email,
      message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
      );

      setStatus("success");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-48 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Section */}
        <div>
          <p
            className="text-xs font-mono uppercase tracking-widest
            text-orange-600 mb-3 flex items-center gap-2"
          >
            <span className="inline-block w-6 h-px bg-orange-600"></span>
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build <span className="text-orange-600">Something.</span>
          </h2>

          <p className="text-gray-500 leading-relaxed mb-6">
            Open to ML Engineering roles, AI/ML internships, freelance projects,
            and collaborations.
          </p>

          <a
            href="mailto:dheerajverma.cp@gmail.com"
            className="font-mono text-sm text-orange-600
            border-b border-orange-400 pb-0.5"
          >
            dheerajverma.cp@gmail.com
          </a>
        </div>

        {/* Right Section */}
        <form onSubmit={handleSend} className="flex flex-col gap-6">
          <div>
            <label
              className="block text-xs font-mono uppercase
              tracking-wider text-gray-400 mb-1"
            >
              Your Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full bg-transparent border-0
  border-b border-gray-200 py-2 text-sm
  focus:outline-none focus:border-gray-900
  transition-colors placeholder:text-gray-300"
            />
          </div>

          <div>
            <label
              className="block text-xs font-mono uppercase
              tracking-wider text-gray-400 mb-1"
            >
              Message
            </label>

            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What's on your mind..."
              required
              className="w-full bg-transparent border-0
              border-b border-gray-200 py-2 text-sm
              focus:outline-none focus:border-gray-900
              transition-colors resize-none
              placeholder:text-gray-300"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !email || !message}
            className="w-full py-3 bg-gray-900 text-white
            text-sm font-semibold uppercase tracking-wider
            rounded-sm hover:bg-orange-600 transition-colors
            disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-sm">
              ✓ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-sm">
              Failed to send message. Please try again.
            </p>
          )}

          {status === "Please enter a valid email address." && (
            <p className="text-red-600 text-sm">
              Please enter a valid email address.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
