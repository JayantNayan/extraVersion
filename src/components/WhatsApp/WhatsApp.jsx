import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

import "./WhatsApp.css";

const WhatsApp = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="whatsapp-card">

          <button
            type="button"
            className="whatsapp-close"
            onClick={() => setOpen(false)}
            aria-label="Close WhatsApp"
          >
            <X size={16} />
          </button>

          <div className="whatsapp-card-icon">
            <MessageCircle size={20} />
          </div>

          <div>
            <strong>
              Need help?
            </strong>

            <p>
              Chat with Oak & Ivory about
              your appointment or questions.
            </p>
          </div>

          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-chat-button"
          >
            Start a conversation
          </a>

        </div>
      )}

      <button
        type="button"
        className="whatsapp-float"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open WhatsApp"
      >
        <MessageCircle size={25} />
      </button>
    </>
  );
};

export default WhatsApp;