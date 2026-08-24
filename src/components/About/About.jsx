import {
  ArrowUpRight,
  Check,
  Quote,
  Sparkles,
} from "lucide-react";

import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* =====================================
            LEFT — IMAGE COMPOSITION
        ====================================== */}

        <div className="about-visual">

          <div className="about-main-image">

            <img
              src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Dr Emily Carter providing personalised dental care"
            />

            <div className="about-image-overlay" />

          </div>


          {/* Doctor information card */}

          <div className="about-doctor-card">

            <div className="about-doctor-image">

              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Dr Emily Carter"
              />

            </div>

            <div className="about-doctor-info">

              <span>
                FOUNDER & LEAD DENTIST
              </span>

              <strong>
                Dr. Emily Carter
              </strong>

              <small>
                DDS · 12+ Years
              </small>

            </div>

          </div>


          {/* Experience badge */}

          <div className="about-experience">

            <Sparkles size={17} />

            <strong>
              12+
            </strong>

            <span>
              YEARS OF
              <br />
              EXPERIENCE
            </span>

          </div>


          {/* Decorative number */}

          <div className="about-number">
            02
          </div>

        </div>


        {/* =====================================
            RIGHT — CONTENT
        ====================================== */}

        <div className="about-content">

          <div className="about-label">
            <span />
            ABOUT OAK & IVORY
          </div>


          <h2 className="about-title">
            Dentistry
            <br />
            <span>built around</span>
            <br />
            people.
          </h2>


          <div className="about-story">

            <p className="about-lead">
              Oak & Ivory Dental was founded on a
              simple idea:
              <strong>
                {" "}Dental care should feel personal.
              </strong>
            </p>

            <p>
              Too many people leave dental appointments
              feeling rushed, confused or anxious about
              their treatment. We wanted to create
              something different.
            </p>

            <p>
              Our practice brings together experienced
              clinicians, modern technology and a
              genuinely welcoming environment where
              patients can take the time they need to
              understand their dental health.
            </p>

          </div>


          {/* =====================================
              VALUES
          ====================================== */}

          <div className="about-values">

            <div className="about-value">

              <span>
                01
              </span>

              <div>
                <strong>
                  Listen first
                </strong>

                <p>
                  We take time to understand
                  your concerns and goals.
                </p>
              </div>

            </div>


            <div className="about-value">

              <span>
                02
              </span>

              <div>
                <strong>
                  Explain clearly
                </strong>

                <p>
                  Your treatment options should
                  always be easy to understand.
                </p>
              </div>

            </div>


            <div className="about-value">

              <span>
                03
              </span>

              <div>
                <strong>
                  Care personally
                </strong>

                <p>
                  Every treatment plan starts
                  with the person behind the smile.
                </p>
              </div>

            </div>

          </div>


          {/* =====================================
              QUOTE
          ====================================== */}

          <div className="about-quote">

            <div className="about-quote-icon">
              <Quote size={18} />
            </div>

            <p>
              “Our goal is always the same:
              give you exceptional care and
              make you feel confident about
              your dental decisions.”
            </p>

          </div>


          {/* =====================================
              CTA
          ====================================== */}

          <a
            href="#team"
            className="about-button"
          >
            <span>
              Meet Dr. Carter
            </span>

            <span className="about-button-icon">
              <ArrowUpRight size={17} />
            </span>
          </a>


          <div className="about-trust">

            <Check size={14} />

            <span>
              Experienced clinicians · Modern technology · Personal care
            </span>

          </div>

        </div>

      </div>


      {/* =====================================
          BOTTOM BLUE STATEMENT
      ====================================== */}

      <div className="about-statement">

        <div className="about-statement-inner">

          <span className="about-statement-label">
            OUR APPROACH
          </span>

          <h3>
            Healthy smiles.
            <span>
              Confident decisions.
            </span>
          </h3>

          <div className="about-statement-arrow">
            <ArrowUpRight size={21} />
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;