import {
  ArrowUpRight,
  CalendarDays,
  Check,
  MessageCircle,
  Smile,
  Sparkles,
} from "lucide-react";

import "./PatientExperience.css";

const steps = [
  {
    number: "01",
    title: "Book",
    subtitle: "Choose a time that works for you.",
    description:
      "Book online in just a few moments. Choose your preferred appointment time and tell us a little about what you'd like help with.",
    icon: CalendarDays,
  },
  {
    number: "02",
    title: "Meet",
    subtitle: "Start with a conversation.",
    description:
      "Your first visit starts with listening. We'll understand your concerns, answer your questions and make sure you feel comfortable.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Your Plan",
    subtitle: "Understand your options.",
    description:
      "We'll explain our findings and walk you through the treatment options available, so you can make an informed decision.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Your Smile",
    subtitle: "Move forward with confidence.",
    description:
      "With a clear plan and a team you can trust, we'll support you throughout your treatment and beyond.",
    icon: Smile,
  },
];

const PatientExperience = () => {
  return (
    <section className="journey-section" id="journey">

      <div className="journey-container">

        {/* ================================
            HEADER
        ================================= */}

        <div className="journey-header">

          <div className="journey-label">
            <span />
            YOUR PATIENT EXPERIENCE
          </div>

          <div className="journey-heading-row">

            <h2>
              From first hello
              <br />
              to your
              <br />
              <span>best smile.</span>
            </h2>

            <div className="journey-intro">

              <p>
                We make every step simple, clear and
                comfortable — so you always know
                what happens next.
              </p>

              <div className="journey-mini-note">

                <span className="journey-mini-check">
                  <Check size={11} />
                </span>

                <span>
                  No confusing steps. No pressure.
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* ================================
            STEPS
        ================================= */}

        <div className="journey-timeline">

          <div className="journey-line" />

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <article
                className="journey-step"
                key={step.number}
              >

                {/* Number */}

                <div className="journey-number">
                  {step.number}
                </div>


                {/* Center icon */}

                <div className="journey-node">
                  <Icon size={21} />
                </div>


                {/* Card */}

                <div className="journey-card">

                  <div className="journey-card-top">

                    <span>
                      STEP {step.number}
                    </span>

                    {index !== steps.length - 1 && (
                      <ArrowUpRight size={17} />
                    )}

                  </div>


                  <h3>
                    {step.title}
                  </h3>


                  <h4>
                    {step.subtitle}
                  </h4>


                  <p>
                    {step.description}
                  </p>


                  <div className="journey-card-bottom">

                    <span>
                      Oak & Ivory Dental
                    </span>

                    <span className="journey-card-dot" />

                    <span>
                      Patient first
                    </span>

                  </div>

                </div>

              </article>
            );
          })}

        </div>


        {/* ================================
            CTA
        ================================= */}

        <div className="journey-cta">

          <div className="journey-cta-content">

            <span className="journey-cta-label">
              READY WHEN YOU ARE
            </span>

            <h3>
              Your next step
              <span>
                starts here.
              </span>
            </h3>

            <p>
              Whether you're due for a check-up or
              thinking about changing your smile,
              we're here to help.
            </p>

          </div>


          <div className="journey-cta-actions">

            <a
              href="#booking"
              className="journey-primary-button"
            >
              <span>
                Book an Appointment
              </span>

              <span>
                <ArrowUpRight size={17} />
              </span>
            </a>


            <a
              href="#ivy"
              className="journey-secondary-button"
            >
              <MessageCircle size={16} />
              Talk to Ivy
            </a>

          </div>


          <div className="journey-smile-icon">
            <Smile size={34} />
          </div>

        </div>

      </div>

    </section>
  );
};

export default PatientExperience;