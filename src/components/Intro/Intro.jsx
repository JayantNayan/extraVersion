import {
  ArrowUpRight,
  Check,
  Heart,
  Sparkles,
} from "lucide-react";

import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro-section" id="about">

      <div className="intro-container">

        {/* =====================================
            LEFT IMAGE COMPOSITION
        ====================================== */}

        <div className="intro-visual">

          <div className="intro-image-main">

            <img
              src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Dentist caring for a patient"
            />

          </div>


          <div className="intro-image-small">

            <img
              src="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Modern dental treatment"
            />

          </div>


          {/* Blue experience badge */}

          <div className="intro-experience-badge">

            <Sparkles size={20} />

            <strong>
              12+
            </strong>

            <span>
              YEARS OF
              <br />
              EXPERIENCE
            </span>

          </div>


          {/* Decorative circle */}

          <div className="intro-circle">
            <span>CARE</span>
            <span>✦</span>
            <span>TRUST</span>
            <span>✦</span>
          </div>

        </div>


        {/* =====================================
            RIGHT CONTENT
        ====================================== */}

        <div className="intro-content">

          <div className="intro-label">
            <span />
            A DIFFERENT KIND OF DENTAL EXPERIENCE
          </div>


          <h2 className="intro-title">
            Dentistry that
            <br />
            <span>puts you first.</span>
          </h2>


          <p className="intro-description">
            We believe great dental care starts with
            listening. Our team takes the time to
            understand your concerns, explain your
            options and create a treatment plan that
            works for you.
          </p>


          <p className="intro-description intro-description-secondary">
            From preventive care to advanced cosmetic
            and restorative dentistry, we're here for
            your smile at every stage.
          </p>


          {/* =====================================
              FEATURES
          ====================================== */}

          <div className="intro-features">

            <div className="intro-feature">

              <div className="intro-feature-icon">
                <Heart size={18} />
              </div>

              <div>
                <strong>
                  Personalised care
                </strong>

                <span>
                  Care designed around you.
                </span>
              </div>

            </div>


            <div className="intro-feature">

              <div className="intro-feature-icon">
                <Sparkles size={18} />
              </div>

              <div>
                <strong>
                  Modern technology
                </strong>

                <span>
                  Advanced care, made comfortable.
                </span>
              </div>

            </div>

          </div>


          {/* =====================================
              CTA
          ====================================== */}

          <a
            href="#team"
            className="intro-button"
          >
            <span>
              Meet Our Team
            </span>

            <span className="intro-button-icon">
              <ArrowUpRight size={17} />
            </span>
          </a>


          {/* Small trust statement */}

          <div className="intro-trust">

            <div className="intro-trust-check">
              <Check size={13} />
            </div>

            <span>
              No-pressure consultations · Clear communication
            </span>

          </div>

        </div>

      </div>


      {/* =====================================
          BLUE STATEMENT STRIP
      ====================================== */}

      <div className="intro-statement">

        <div className="intro-statement-inner">

          <span className="intro-statement-number">
            01
          </span>

          <p>
            Dental care should feel
            <strong> personal.</strong>
          </p>

          <span className="intro-statement-line" />

          <span className="intro-statement-text">
            Modern technology · Human care
          </span>

        </div>

      </div>

    </section>
  );
};

export default Intro;