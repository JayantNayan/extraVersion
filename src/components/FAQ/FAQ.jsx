import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import "./FAQ.css";

const faqData = [
  {
    question: "Do you accept new patients?",
    answer:
      "Yes. Oak & Ivory Dental welcomes new patients.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're located at 1847 Westlake Avenue, Suite 210, Austin, Texas.",
  },
  {
    question: "Do you offer emergency appointments?",
    answer:
      "We offer urgent dental care for qualifying situations. Contact our team so we can understand your situation and advise you on the appropriate next step.",
  },
  {
    question: "Do you offer cosmetic dentistry?",
    answer:
      "Yes. Our cosmetic services include veneers, composite bonding, professional whitening and smile makeovers.",
  },
  {
    question: "Do you offer dental implants?",
    answer:
      "Yes. Our dentists provide implant consultations and can determine whether implants are appropriate for your individual situation.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Our team can help you understand accepted insurance plans and available payment options. Coverage varies by plan.",
  },
  {
    question: "What if I'm nervous about visiting the dentist?",
    answer:
      "That's completely okay. We regularly work with patients who experience dental anxiety and focus on creating a calm, judgement-free experience.",
  },
  {
    question: "Can I book an appointment online?",
    answer:
      "Yes. You can request an appointment online or speak with Ivy, our AI receptionist.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <section className="faq-section" id="faq">

      <div className="faq-container">

        {/* =====================================
            HEADER
        ====================================== */}

        <div className="faq-header">

          <div className="faq-label">
            <span />
            FREQUENTLY ASKED QUESTIONS
          </div>

          <div className="faq-heading-row">

            <h2>
              Questions?
              <br />
              <span>We've got answers.</span>
            </h2>

            <div className="faq-intro">

              <p>
                Everything you need to know before
                your visit. And if you still have
                questions, Ivy is always ready to help.
              </p>

              <a
                href="#ivy"
                className="faq-ivy-link"
              >
                <MessageCircle size={15} />

                <span>
                  Ask Ivy
                </span>

                <ArrowUpRight size={15} />
              </a>

            </div>

          </div>

        </div>


        {/* =====================================
            FAQ CONTENT
        ====================================== */}

        <div className="faq-layout">

          {/* Left visual */}

          <div className="faq-visual">

            <div className="faq-visual-card">

              <div className="faq-visual-icon">
                <Sparkles size={24} />
              </div>

              <span className="faq-visual-small">
                STILL HAVE QUESTIONS?
              </span>

              <h3>
                Just ask
                <br />
                <em>Ivy.</em>
              </h3>

              <p>
                Our AI receptionist can help you
                understand services, appointments,
                opening hours and what to do next.
              </p>

              <a
                href="#ivy"
                className="faq-visual-button"
              >
                Talk to Ivy

                <span>
                  <ArrowUpRight size={15} />
                </span>
              </a>

            </div>

            <div className="faq-circle circle-one" />
            <div className="faq-circle circle-two" />

          </div>


          {/* Questions */}

          <div className="faq-list">

            {faqData.map((item, index) => {

              const isActive =
                activeIndex === index;

              return (
                <div
                  className={`faq-item ${
                    isActive
                      ? "faq-item-active"
                      : ""
                  }`}
                  key={item.question}
                >

                  <button
                    type="button"
                    className="faq-question"
                    onClick={() =>
                      toggleFAQ(index)
                    }
                    aria-expanded={isActive}
                  >

                    <span className="faq-number">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="faq-question-text">
                      {item.question}
                    </span>

                    <span className="faq-chevron">
                      <ChevronDown size={17} />
                    </span>

                  </button>


                  <div
                    className={`faq-answer ${
                      isActive
                        ? "faq-answer-open"
                        : ""
                    }`}
                  >
                    <p>
                      {item.answer}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* =====================================
            BOTTOM CTA
        ====================================== */}

        <div className="faq-bottom">

          <div className="faq-bottom-left">

            <span>
              CAN'T FIND WHAT YOU'RE LOOKING FOR?
            </span>

            <h3>
              We're happy to
              <em> help.</em>
            </h3>

          </div>

          <div className="faq-bottom-actions">

            <a
              href="#ivy"
              className="faq-secondary-button"
            >
              <MessageCircle size={16} />

              Talk to Ivy
            </a>

            <a
              href="#booking"
              className="faq-primary-button"
            >
              <span>
                Book an Appointment
              </span>

              <span>
                <ArrowUpRight size={17} />
              </span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;