import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaComments,
  FaCopy,
  FaCheck,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [senderInfo, setSenderInfo] = useState({ name: "", email: "" });

  const directEmail = "r26056824@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    toast.success("Email copied to clipboard! 📋", {
      position: "top-right",
      autoClose: 2500,
      theme: "dark",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(form.current);
    const name = formData.get("user_name")?.toString().trim() || "";
    const email = formData.get("user_email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "Portfolio Inquiry";
    const message = formData.get("message")?.toString().trim() || "";

    setSenderInfo({ name, email });

    // Gmail Web direct compose fallback link
    const gmailFallbackUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      directEmail
    )}&su=${encodeURIComponent(subject + " - " + name)}&body=${encodeURIComponent(
      "Sender Name: " + name + "\nSender Email: " + email + "\n\nMessage:\n" + message
    )}`;

    try {
      // Direct FormSubmit AJAX endpoint — delivers directly to r26056824@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${directEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
          _captcha: "false",
          _replyto: email,
          _template: "table",
          _subject: `New Portfolio Message from ${name}: ${subject}`,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && (result.success === "true" || result.success === true)) {
        setIsSuccess(true);
        if (form.current) form.current.reset();
        toast.success("Message sent successfully directly to Rahul's inbox! 🚀", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });
      } else if (result.message && result.message.toLowerCase().includes("activation")) {
        setIsSuccess(true);
        if (form.current) form.current.reset();
        toast.info(
          "Message submitted! Rahul, check your inbox (r26056824@gmail.com) to click 'Activate Form' if this is the first submission.",
          {
            position: "top-right",
            autoClose: 8000,
            theme: "dark",
          }
        );
      } else {
        throw new Error(result.message || "Failed to submit form directly");
      }
    } catch (err) {
      console.warn("Direct submission fallback triggered:", err);
      setErrorMessage(
        "Network issue sending directly. You can send your message with 1-click via Gmail Web below."
      );
      // Fallback: Open Gmail Web so the message is never lost
      window.open(gmailFallbackUrl, "_blank");
      toast.info(
        "Opening Gmail compose so you can send your message directly to r26056824@gmail.com! ✉️",
        {
          position: "top-right",
          autoClose: 6000,
          theme: "dark",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenGmailDirect = () => {
    if (!form.current) return;
    const formData = new FormData(form.current);
    const name = formData.get("user_name")?.toString().trim() || "";
    const email = formData.get("user_email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "Portfolio Inquiry";
    const message = formData.get("message")?.toString().trim() || "";

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      directEmail
    )}&su=${encodeURIComponent(subject + (name ? " - " + name : ""))}&body=${encodeURIComponent(
      (name ? "Sender Name: " + name + "\n" : "") +
      (email ? "Sender Email: " + email + "\n\n" : "\n") +
      "Message:\n" + message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-[6vw] lg:px-[12vw] font-sans"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          SEND A <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">MESSAGE</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(130,69,236,0.8)]"></div>
        <p className="text-gray-300 mt-4 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          Have a project, job opportunity, or question? Send a message directly to my inbox!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
        
        {/* Left Side Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gray-950/70 backdrop-blur-xl p-6 rounded-3xl border border-purple-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FaComments className="text-purple-400" />
              Let&apos;s Connect
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
              My inbox is always open. Whether you have an inquiry, project proposal, or want to discuss DevOps & Full-Stack engineering, send a message and I will respond promptly.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-400 shrink-0">
                  <FaEnvelope size={18} />
                </div>
                <div className="overflow-hidden flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Direct Email</h4>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 text-purple-200 transition"
                      title="Copy Email Address"
                    >
                      {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                      <span>{copied ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>
                  <a
                    href={`mailto:${directEmail}`}
                    className="text-sm font-semibold text-white hover:text-purple-300 transition break-all block mt-1"
                  >
                    {directEmail}
                  </a>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${directEmail}&su=Portfolio%20Inquiry`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] text-purple-400 hover:text-purple-300 underline mt-1"
                  >
                    Open directly in Gmail Web &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-400 shrink-0">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</h4>
                  <p className="text-sm font-semibold text-white leading-snug">
                    ABES Engineering College, Ghaziabad, UP, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connection */}
            <div className="mt-8 pt-6 border-t border-purple-500/20">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Connect Directly</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/RahulKr2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 border border-purple-500/20 text-gray-300 hover:text-white hover:border-purple-500/50 text-xs font-semibold transition"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-kumar-50275b380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 border border-purple-500/20 text-gray-300 hover:text-white hover:border-purple-500/50 text-xs font-semibold transition"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:col-span-7">
          <div className="bg-gray-950/70 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative">
            <h3 className="text-2xl font-bold text-white mb-2">
              Send Me A Message 📩
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-6">
              Enter your details below and send your message directly to{" "}
              <strong className="text-purple-300">{directEmail}</strong>.
            </p>

            {isSuccess ? (
              <div className="py-10 px-6 text-center rounded-2xl bg-purple-950/40 border border-purple-500/30">
                <div className="w-16 h-16 rounded-full bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                  <FaCheckCircle size={32} />
                </div>
                <h4 className="text-2xl font-extrabold text-white mb-2">Message Delivered! 🎉</h4>
                <p className="text-sm text-gray-300 max-w-md mx-auto mb-4 leading-relaxed">
                  Thank you, <strong className="text-purple-300">{senderInfo.name || "friend"}</strong>! Your message was sent directly to Rahul&apos;s email (<strong className="text-purple-300">{directEmail}</strong>). A reply will be sent to your email (<strong className="text-purple-300">{senderInfo.email}</strong>) shortly.
                </p>


                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs transition shadow-[0_0_15px_rgba(130,69,236,0.5)]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <FaExclamationCircle className="text-red-400 shrink-0 text-sm" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Enter your name"
                      required
                      className="w-full p-3.5 rounded-xl bg-gray-900/90 text-white placeholder-gray-500 text-sm border border-purple-500/20 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Your Email *</label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Enter your email"
                      required
                      className="w-full p-3.5 rounded-xl bg-gray-900/90 text-white placeholder-gray-500 text-sm border border-purple-500/20 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What is this message about?"
                    required
                    className="w-full p-3.5 rounded-xl bg-gray-900/90 text-white placeholder-gray-500 text-sm border border-purple-500/20 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    placeholder="Type your message here..."
                    rows="4"
                    required
                    className="w-full p-3.5 rounded-xl bg-gray-900/90 text-white placeholder-gray-500 text-sm border border-purple-500/20 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 py-4 rounded-xl text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_20px_rgba(130,69,236,0.5)] flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? "bg-purple-800/80 cursor-not-allowed opacity-80"
                        : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transform hover:scale-[1.01]"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin text-lg" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-base" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenGmailDirect}
                    className="py-4 px-5 rounded-xl bg-gray-900 hover:bg-gray-800 border border-purple-500/30 text-purple-200 hover:text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md hover:border-purple-500/60"
                    title="Open directly in Gmail Compose with pre-filled message"
                  >
                    <FaEnvelope className="text-purple-400" />
                    <span>Send via Gmail</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
