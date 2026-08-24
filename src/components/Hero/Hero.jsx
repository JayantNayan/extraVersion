import {
  ArrowUpRight,
  CalendarDays,
  Check,
  CircleCheck,
  Play,
  Sparkles,
  Star,
} from "lucide-react";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* ================================
            LEFT CONTENT
        ================================= */}

        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            MODERN DENTISTRY · PERSONAL CARE
          </div>


          <h1 className="hero-title">
            Your smile
            <br />

            <span>deserves</span>

            <br />

            exceptional care.
          </h1>


          <p className="hero-description">
            At Oak & Ivory Dental, we combine modern
            dental technology with a warm, personal
            approach to make every visit more
            comfortable, convenient and confidence-
            inspiring.
          </p>


          {/* ================================
              BUTTONS
          ================================= */}

          <div className="hero-actions">

            <a
              href="#booking"
              className="hero-primary-button"
            >
              <span>Book an Appointment</span>

              <span className="hero-button-arrow">
                <ArrowUpRight size={18} />
              </span>
            </a>


            <a
              href="#ivy"
              className="hero-secondary-button"
            >
              <span className="hero-play">
                <Play
                  size={13}
                  fill="currentColor"
                />
              </span>

              Talk to Ivy
            </a>

          </div>


          {/* ================================
              TRUST AREA
          ================================= */}

          <div className="hero-trust">

            <div className="hero-trust-faces">

              <span>EC</span>
              <span>DB</span>
              <span>SM</span>

              <div className="hero-trust-more">
                +
              </div>

            </div>


            <div className="hero-trust-rating">

              <div className="hero-stars">

                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />

              </div>

              <span>
                Trusted dental care
              </span>

            </div>

          </div>

        </div>


        {/* ================================
            RIGHT IMAGE AREA
        ================================= */}

        <div className="hero-visual">

          {/* Main Image */}

          <div className="hero-image-frame">

            <img
              src="https://images.pexels.com/photos/5355860/pexels-photo-5355860.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Professional dentist at Oak and Ivory Dental"
              className="hero-image"
            />

            <div className="hero-image-gradient" />

          </div>


          {/* ================================
              EXPERIENCE BADGE
          ================================= */}

          <div className="hero-experience">

            <div className="hero-experience-icon">
              <Sparkles size={19} />
            </div>

            <div className="hero-experience-text">

              <strong>
                12+
              </strong>

              <span>
                Years of experience
              </span>

            </div>

          </div>


          {/* ================================
              APPOINTMENT CARD
          ================================= */}

          <div className="hero-appointment-card">

            <div className="hero-card-header">

              <div className="hero-card-icon">
                <CalendarDays size={18} />
              </div>

              <div>
                <span>
                  New patients
                </span>

                <strong>
                  Welcome
                </strong>
              </div>

            </div>


            <div className="hero-card-divider" />


            <div className="hero-card-feature">

              <div className="hero-check">
                <Check size={12} />
              </div>

              <span>
                Easy online booking
              </span>

            </div>


            <div className="hero-card-feature">

              <div className="hero-check">
                <Check size={12} />
              </div>

              <span>
                Personalised care
              </span>

            </div>

          </div>


          {/* ================================
              ROUND BADGE
          ================================= */}

          <div className="hero-round-badge">

            <div className="hero-round-badge-inner">

              <CircleCheck size={21} />

              <span>
                NEW
              </span>

              <span>
                PATIENTS
              </span>

              <span>
                WELCOME
              </span>

            </div>

          </div>


          {/* Small blue decoration */}

          <div className="hero-blue-dot" />

        </div>

      </div>


      {/* =====================================
          BOTTOM INFORMATION STRIP
      ====================================== */}

      <div className="hero-bottom">

        <div className="hero-bottom-inner">

          <div className="hero-bottom-item">

            <span className="hero-bottom-number">
              01
            </span>

            <span>
              Personalised care
            </span>

          </div>


          <div className="hero-bottom-item">

            <span className="hero-bottom-number">
              02
            </span>

            <span>
              Modern technology
            </span>

          </div>


          <div className="hero-bottom-item">

            <span className="hero-bottom-number">
              03
            </span>

            <span>
              Comfortable experience
            </span>

          </div>


          <div className="hero-bottom-item hero-bottom-cta">

            <span>
              Ready to smile?
            </span>

            <a href="#booking">
              Book now
              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;