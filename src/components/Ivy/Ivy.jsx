import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Mic,
  Send,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./Ivy.css";

const quickQuestions = [
  {
    question: "I'd like to book a cleaning.",
    answer:
      "Absolutely! I can help you get started with a cleaning appointment. Would you like to book online?",
  },
  {
    question: "Do you offer veneers?",
    answer:
      "Yes. We offer cosmetic consultations for veneers and can help you understand the next steps.",
  },
  {
    question: "What appointments do you have this week?",
    answer:
      "I can help you find a suitable appointment. Choose a time that works for you and we'll take it from there.",
  },
  {
    question: "Where are you located?",
    answer:
      "Oak & Ivory Dental is located in Austin, Texas. I can also help you with directions and appointment information.",
  },
];

const Ivy = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [isListening, setIsListening] = useState(false);

  const handleSend = (customMessage = null) => {
    const text = customMessage || message;

    if (!text.trim()) return;

    const matchedQuestion = quickQuestions.find(
      (item) => item.question === text
    );

    const aiResponse =
      matchedQuestion?.answer ||
      "Thanks for reaching out. I can help with appointments, services, clinic information and your next steps.";

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text,
      },
      {
        type: "ai",
        text: aiResponse,
      },
    ]);

    setMessage("");
  };

  const handleQuickQuestion = (question) => {
    handleSend(question);
  };

  const toggleVoice = () => {
    setIsListening((prev) => !prev);
  };

  return (
    <section className="ivy-section" id="ivy">

      <div className="ivy-container">

        {/* =====================================
            LEFT CONTENT
        ====================================== */}

        <div className="ivy-content">

          <div className="ivy-label">
            <span />
            MEET IVY
          </div>

          <h2 className="ivy-title">
            Your dental
            <br />
            questions,
            <br />
            <span>answered.</span>
          </h2>

          <p className="ivy-description">
            Ivy is Oak & Ivory Dental's AI receptionist,
            available whenever you need help. Ask a
            question, explore your options or get started
            with your next appointment.
          </p>


          {/* FEATURES */}

          <div className="ivy-features">

            <div className="ivy-feature">

              <span>
                <CalendarDays size={16} />
              </span>

              <div>
                <strong>
                  Book appointments
                </strong>

                <small>
                  Find the right appointment for you.
                </small>
              </div>

            </div>


            <div className="ivy-feature">

              <span>
                <MessageCircle size={16} />
              </span>

              <div>
                <strong>
                  Answer questions
                </strong>

                <small>
                  Services, hours, location and more.
                </small>
              </div>

            </div>


            <div className="ivy-feature">

              <span>
                <Clock3 size={16} />
              </span>

              <div>
                <strong>
                  Help with next steps
                </strong>

                <small>
                  Rescheduling, callbacks and guidance.
                </small>
              </div>

            </div>

          </div>


          {/* DISCLAIMER */}

          <div className="ivy-disclaimer">

            <CheckCircle2 size={14} />

            <span>
              Ivy provides information and guidance.
              She does not diagnose medical conditions.
            </span>

          </div>

        </div>


        {/* =====================================
            IVY CHAT
        ====================================== */}

        <div className="ivy-chat-wrapper">

          <div className="ivy-glow" />

          <div className="ivy-chat">

            {/* HEADER */}

            <div className="ivy-chat-header">

              <div className="ivy-profile">

                <div className="ivy-avatar">
                  <Sparkles size={20} />
                </div>

                <div>

                  <strong>
                    Ivy
                  </strong>

                  <span>
                    <i />
                    AI Receptionist
                  </span>

                </div>

              </div>


              <div className="ivy-online">
                <span />
                Online
              </div>

            </div>


            {/* CHAT BODY */}

            <div className="ivy-chat-body">

              <div className="ivy-time">
                TODAY · NOW
              </div>


              {/* INITIAL IVY MESSAGE */}

              <div className="ivy-message ivy-message-ai">

                <div className="ivy-small-avatar">
                  <Sparkles size={12} />
                </div>

                <div className="ivy-bubble">

                  <p>
                    Hi, I'm Ivy 👋
                  </p>

                  <p>
                    I'm here to help you find the
                    right next step. What can I
                    help you with?
                  </p>

                </div>

              </div>


              {/* QUICK QUESTIONS */}

              <div className="ivy-question-title">
                TRY ASKING
              </div>

              <div className="ivy-questions">

                {quickQuestions.map((item) => (

                  <button
                    type="button"
                    key={item.question}
                    onClick={() =>
                      handleQuickQuestion(item.question)
                    }
                  >

                    {item.question}

                    <ArrowUpRight size={13} />

                  </button>

                ))}

              </div>


              {/* CONVERSATION */}

              {messages.map((item, index) => (

                <div
                  key={`${item.type}-${index}`}
                  className={`ivy-message ${
                    item.type === "user"
                      ? "ivy-message-user"
                      : "ivy-message-ai"
                  }`}
                >

                  {item.type === "ai" && (
                    <div className="ivy-small-avatar">
                      <Sparkles size={12} />
                    </div>
                  )}

                  {item.type === "user" && (
                    <div className="ivy-user-avatar">
                      <UserRound size={12} />
                    </div>
                  )}

                  <div
                    className={`ivy-bubble ${
                      item.type === "user"
                        ? "ivy-user-bubble"
                        : ""
                    }`}
                  >
                    <p>
                      {item.text}
                    </p>
                  </div>

                </div>

              ))}

            </div>


            {/* INPUT */}

            <div className="ivy-input-area">

              <div className="ivy-input">

                <input
                  type="text"
                  value={message}
                  placeholder="Ask Ivy anything..."
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  onKeyDown={(e) => {

                    if (e.key === "Enter") {
                      handleSend();
                    }

                  }}
                />


                {/* VOICE */}

                <button
                  type="button"
                  className={`ivy-voice-button ${
                    isListening
                      ? "ivy-voice-active"
                      : ""
                  }`}
                  onClick={toggleVoice}
                  aria-label="Talk to Ivy"
                >
                  <Mic size={15} />
                </button>


                {/* SEND */}

                <button
                  type="button"
                  onClick={() => handleSend()}
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>

              </div>


              <span>
                Powered by ClinicOS
              </span>

            </div>

          </div>


          {/* FLOATING LOCATION */}

          <div className="ivy-floating-card ivy-location-card">

            <div className="ivy-floating-icon">
              <MapPin size={15} />
            </div>

            <div>

              <small>
                LOCATION
              </small>

              <strong>
                Austin, Texas
              </strong>

            </div>

          </div>


          {/* FLOATING APPOINTMENT */}

          <div className="ivy-floating-card ivy-appointment-card">

            <div className="ivy-floating-icon">
              <CalendarDays size={15} />
            </div>

            <div>

              <small>
                APPOINTMENT
              </small>

              <strong>
                Request anytime
              </strong>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================
          BOTTOM CTA
      ====================================== */}

      <div className="ivy-bottom">

        <div className="ivy-bottom-inner">

          <div className="ivy-bottom-content">

            <span>
              NOT SURE WHERE TO START?
            </span>

            <h3>
              Just ask Ivy.
              <em>
                {" "}
                She's here to help.
              </em>
            </h3>

          </div>


          <Link
            to="/booking"
            className="ivy-bottom-button"
          >

            <span>
              Book an Appointment
            </span>

            <span>
              <ArrowUpRight size={17} />
            </span>

          </Link>

        </div>

      </div>

    </section>
  );
};

export default Ivy;