import {
  ArrowUpRight,
  
  Sparkles,
} from "lucide-react";

import "./Doctors.css";

const doctors = [
  {
    number: "01",
    name: "Dr. Emily Carter",
    credentials: "DDS",
    role: "Founder & Lead Dentist",
    focus:
      "Cosmetic Dentistry, Restorative Dentistry, Smile Makeovers, General Dentistry",
    experience: "12+ Years",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },

  {
    number: "02",
    name: "Dr. Daniel Brooks",
    credentials: "DMD",
    role: "Associate Dentist",
    focus:
      "General Dentistry, Dental Implants, Crowns & Bridges, Emergency Dentistry",
    experience: "10+ Years",
    image:
      "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },

  {
    number: "03",
    name: "Dr. Sophia Mitchell",
    credentials: "DDS",
    role: "Cosmetic & Restorative Dentist",
    focus:
      "Veneers, Composite Bonding, Whitening, Cosmetic & Restorative Dentistry",
    experience: "9+ Years",
    image:
      "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];

const Doctors = () => {
  return (
    <section className="doctors-section" id="team">

      <div className="doctors-container">

        {/* =====================================
            HEADER
        ====================================== */}

        <div className="doctors-header">

          <div className="doctors-label">
            <span />
            OUR TEAM
          </div>

          <div className="doctors-heading-row">

            <h2>
              Experienced people.
              <br />
              <span>Personal care.</span>
            </h2>

            <div className="doctors-heading-content">

              <p>
                Meet the experienced clinicians behind
                Oak & Ivory Dental. Every member of our
                team is committed to making your care
                clear, comfortable and personal.
              </p>

              <div className="doctors-heading-meta">

                <span>
                  03
                </span>

                <span>
                  DENTAL SPECIALISTS
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            DOCTOR CARDS
        ====================================== */}

        <div className="doctors-grid">

          {doctors.map((doctor) => (
            <article
              className="doctor-card"
              key={doctor.number}
            >

              {/* Image */}

              <div className="doctor-image-wrapper">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-image"
                />

                <div className="doctor-image-overlay" />


                {/* Number */}

                <span className="doctor-number">
                  {doctor.number}
                </span>


                {/* Experience */}

                <div className="doctor-experience">

                  <Sparkles size={12} />

                  {doctor.experience}

                </div>


                {/* Social */}

                


                {/* Hover button */}

                <a
                  href="#contact"
                  className="doctor-view"
                >
                  <span>
                    View Profile
                  </span>

                  <span>
                    <ArrowUpRight size={16} />
                  </span>
                </a>

              </div>


              {/* Content */}

              <div className="doctor-content">

                <div className="doctor-name-row">

                  <div>

                    <h3>
                      {doctor.name}
                    </h3>

                    <span className="doctor-credentials">
                      {doctor.credentials}
                    </span>

                  </div>

                  <ArrowUpRight
                    className="doctor-static-arrow"
                    size={19}
                  />

                </div>


                <span className="doctor-role">
                  {doctor.role}
                </span>


                <div className="doctor-focus">

                  <span>
                    FOCUS
                  </span>

                  <p>
                    {doctor.focus}
                  </p>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* =====================================
            TEAM CTA
        ====================================== */}

        <div className="doctors-bottom">

          <div className="doctors-bottom-left">

            <div className="doctors-bottom-icon">
              <Sparkles size={18} />
            </div>

            <div>

              <strong>
                The right care starts with
                the right conversation.
              </strong>

              <span>
                Tell us what you need and we'll
                help you find the right next step.
              </span>

            </div>

          </div>


          <a
            href="#booking"
            className="doctors-book-button"
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

    </section>
  );
};

export default Doctors;