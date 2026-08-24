import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Heart,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import "./Experience.css";

const patientProfiles = [
  {
    number: "01",
    icon: Clock3,
    title: "Busy Professional",
    description:
      "Fast booking, efficient visits, and clear treatment plans designed to fit around a busy schedule.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Nervous Patient",
    description:
      "A calm environment, gentle communication, and thoughtful care for patients who feel anxious about dentistry.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Smile Transformation",
    description:
      "Personalised cosmetic care for patients who want to improve their smile and feel more confident.",
  },
  {
    number: "04",
    icon: UsersRound,
    title: "Family",
    description:
      "Convenient, comfortable dental care designed to support the needs of your whole family.",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore Oak & Ivory, our services, and the kind of care we provide.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Talk with Ivy or our team and tell us what you need.",
  },
  {
    number: "03",
    title: "Visit",
    description:
      "Meet your care team in a calm, welcoming environment.",
  },
  {
    number: "04",
    title: "Treat",
    description:
      "Receive personalised treatment based around your needs and goals.",
  },
  {
    number: "05",
    title: "Continue",
    description:
      "Stay connected through follow-ups and ongoing dental care.",
  },
];

const Experience = () => {
  return (
    <main className="experience-page">

      {/* ==================================================
          PAGE HERO
      ================================================== */}

      <section className="experience-hero">

        <div className="experience-container">

          <div className="experience-eyebrow">
            <span />
            THE PATIENT EXPERIENCE
          </div>

          <div className="experience-hero-grid">

            <div className="experience-hero-heading">

              <h1>
                Care that
                <br />
                fits
                <em>
                  real life.
                </em>
              </h1>

            </div>

            <div className="experience-hero-content">

              <p>
                Every patient is different. Your
                schedule, concerns, goals, and
                expectations are unique.
              </p>

              <p>
                That's why we designed the Oak &
                Ivory experience around people —
                not just appointments.
              </p>

              <a
                href="/booking"
                className="experience-primary-button"
              >
                <span>
                  Start Your Journey
                </span>

                <span className="experience-button-icon">
                  <ArrowUpRight size={16} />
                </span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          PATIENT PROFILES
      ================================================== */}

      <section className="experience-profiles">

        <div className="experience-container">

          <div className="experience-section-heading">

            <div className="experience-eyebrow">
              <span />
              CARE FOR REAL LIFE
            </div>

            <h2>
              Different patients.
              <br />
              <em>One thoughtful experience.</em>
            </h2>

            <p>
              Whether you're fitting an appointment
              into a busy day or looking for extra
              reassurance, our approach adapts around
              what matters to you.
            </p>

          </div>


          <div className="experience-profile-grid">

            {patientProfiles.map((profile) => {

              const Icon = profile.icon;

              return (
                <article
                  className="experience-profile-card"
                  key={profile.number}
                >

                  <div className="experience-profile-top">

                    <span className="experience-profile-number">
                      {profile.number}
                    </span>

                    <div className="experience-profile-icon">
                      <Icon size={20} />
                    </div>

                  </div>


                  <div className="experience-profile-body">

                    <h3>
                      {profile.title}
                    </h3>

                    <p>
                      {profile.description}
                    </p>

                  </div>


                  <div className="experience-profile-line" />

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* ==================================================
          PATIENT JOURNEY
      ================================================== */}

      <section className="experience-journey">

        <div className="experience-container">

          <div className="experience-journey-grid">

            <div className="experience-journey-intro">

              <div className="experience-eyebrow experience-eyebrow-light">
                <span />
                YOUR JOURNEY
              </div>

              <h2>
                From first
                <br />
                hello to
                <br />
                <em>ongoing care.</em>
              </h2>

              <p>
                We make every step simple, clear,
                and connected — from your first
                conversation to your ongoing care.
              </p>

            </div>


            <div className="experience-journey-list">

              {journeySteps.map((step) => (

                <div
                  className="experience-journey-item"
                  key={step.number}
                >

                  <div className="experience-journey-number">
                    {step.number}
                  </div>

                  <div className="experience-journey-content">

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>

                  </div>

                  <div className="experience-journey-check">
                    <Check size={15} />
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          WHAT YOU CAN EXPECT
      ================================================== */}

      <section className="experience-expect">

        <div className="experience-container">

          <div className="experience-expect-grid">

            <div className="experience-expect-heading">

              <div className="experience-eyebrow">
                <span />
                WHAT YOU CAN EXPECT
              </div>

              <h2>
                A better
                <br />
                dental
                <br />
                <em>experience.</em>
              </h2>

            </div>


            <div className="experience-expect-list">

              <div className="experience-expect-item">

                <div className="experience-expect-icon">
                  <Check size={15} />
                </div>

                <div>
                  <h3>
                    Clear communication
                  </h3>

                  <p>
                    We explain your options clearly
                    so you can make informed decisions
                    about your care.
                  </p>
                </div>

              </div>


              <div className="experience-expect-item">

                <div className="experience-expect-icon">
                  <Heart size={15} />
                </div>

                <div>
                  <h3>
                    Genuine comfort
                  </h3>

                  <p>
                    Your comfort matters throughout
                    every appointment and interaction.
                  </p>
                </div>

              </div>


              <div className="experience-expect-item">

                <div className="experience-expect-icon">
                  <ShieldCheck size={15} />
                </div>

                <div>
                  <h3>
                    Personalised care
                  </h3>

                  <p>
                    Your treatment is shaped around
                    your goals, needs, and circumstances.
                  </p>
                </div>

              </div>


              <div className="experience-expect-item">

                <div className="experience-expect-icon">
                  <CalendarDays size={15} />
                </div>

                <div>
                  <h3>
                    Connected follow-up
                  </h3>

                  <p>
                    We help you stay on track with
                    ongoing care after your visit.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          CTA
      ================================================== */}

      <section className="experience-cta">

        <div className="experience-container">

          <div className="experience-cta-inner">

            <div>

              <span>
                YOUR EXPERIENCE STARTS HERE
              </span>

              <h2>
                Dental care designed
                <br />
                around
                <em>
                  you.
                </em>
              </h2>

            </div>

            <a href="/booking">

              Book an Appointment

              <span>
                <ArrowUpRight size={16} />
              </span>

            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Experience;