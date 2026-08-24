import {
  ArrowUpRight,
  Check,
  Heart,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import "./About.css";

const values = [
  {
    icon: Heart,
    title: "Patient First",
    text: "Every decision starts with what is right for the person sitting in the chair.",
  },
  {
    icon: Sparkles,
    title: "Modern Dentistry",
    text: "Thoughtful technology and contemporary techniques support better care.",
  },
  {
    icon: ShieldCheck,
    title: "Clear & Honest",
    text: "We explain your options clearly so you can make confident decisions.",
  },
  {
    icon: UsersRound,
    title: "Human Connection",
    text: "We believe great dentistry begins with listening and building trust.",
  },
];

const About = () => {
  return (
    <main className="about-page">

      {/* ================= HERO ================= */}

      <section className="about-hero">
        <div className="about-container">

          <div className="about-eyebrow">
            <span />
            ABOUT OAK & IVORY
          </div>

          <div className="about-hero-grid">

            <h1>
              Dentistry
              <br />
              with a
              <br />
              <em>human touch.</em>
            </h1>

            <div className="about-hero-content">

              <p>
                Oak & Ivory was created around a simple
                idea: dental care should feel personal,
                thoughtful, and easy to understand.
              </p>

              <p>
                We combine clinical expertise with a
                calm environment and modern technology
                to create a better experience for every
                patient.
              </p>

              <a
                href="/contact"
                className="about-primary-button"
              >
                <span>
                  Meet Oak & Ivory
                </span>

                <span>
                  <ArrowUpRight size={16} />
                </span>
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* ================= STORY ================= */}

      <section className="about-story">

        <div className="about-container">

          <div className="about-story-grid">

            <div className="about-story-image">

              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85"
                alt="Modern dental clinic"
              />

              <div className="about-image-badge">
                <strong>01</strong>
                <span>
                  THOUGHTFUL
                  <br />
                  DENTISTRY
                </span>
              </div>

            </div>


            <div className="about-story-content">

              <div className="about-eyebrow">
                <span />
                OUR STORY
              </div>

              <h2>
                Built around
                <br />
                <em>better care.</em>
              </h2>

              <p>
                Oak & Ivory began with a belief that
                dentistry could be both clinically
                excellent and genuinely comfortable.
              </p>

              <p>
                From the moment you discover us to
                every appointment that follows, we
                want you to feel informed, respected,
                and looked after.
              </p>

              <div className="about-story-points">

                <div>
                  <Check size={14} />
                  <span>
                    Personalised treatment
                  </span>
                </div>

                <div>
                  <Check size={14} />
                  <span>
                    Calm patient experience
                  </span>
                </div>

                <div>
                  <Check size={14} />
                  <span>
                    Transparent communication
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= VALUES ================= */}

      <section className="about-values">

        <div className="about-container">

          <div className="about-values-heading">

            <div className="about-eyebrow">
              <span />
              WHAT WE BELIEVE
            </div>

            <h2>
              The principles
              <br />
              behind
              <em> our care.</em>
            </h2>

          </div>


          <div className="about-values-grid">

            {values.map((value) => {

              const Icon = value.icon;

              return (
                <article
                  className="about-value-card"
                  key={value.title}
                >

                  <div className="about-value-top">

                    <div className="about-value-icon">
                      <Icon size={20} />
                    </div>

                  </div>

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.text}
                  </p>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= EXPERIENCE ================= */}

      <section className="about-experience">

        <div className="about-container">

          <div className="about-experience-grid">

            <div>

              <div className="about-eyebrow about-light-eyebrow">
                <span />
                THE OAK & IVORY WAY
              </div>

              <h2>
                More than
                <br />
                an
                <br />
                <em>appointment.</em>
              </h2>

            </div>


            <div className="about-experience-content">

              <p>
                We think about the entire patient
                journey — not just what happens during
                treatment.
              </p>

              <div className="about-experience-list">

                <div>
                  <span>01</span>
                  <div>
                    <strong>
                      Listen first
                    </strong>
                    <small>
                      We start by understanding you,
                      your concerns, and your goals.
                    </small>
                  </div>
                </div>

                <div>
                  <span>02</span>
                  <div>
                    <strong>
                      Explain clearly
                    </strong>
                    <small>
                      We make treatment options easy
                      to understand.
                    </small>
                  </div>
                </div>

                <div>
                  <span>03</span>
                  <div>
                    <strong>
                      Care continuously
                    </strong>
                    <small>
                      We stay connected beyond the
                      appointment when you need us.
                    </small>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}

      <section className="about-cta">

        <div className="about-container">

          <div className="about-cta-inner">

            <div>

              <span>
                READY TO GET STARTED?
              </span>

              <h2>
                Come experience
                <br />
                <em>the difference.</em>
              </h2>

            </div>

            <a href="/booking">
              Book an Appointment

              <span>
                <ArrowUpRight size={15} />
              </span>
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default About;