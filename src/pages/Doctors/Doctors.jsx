import {
  ArrowUpRight,
  Award,
  CalendarDays,
  Check,
  Heart,
  ShieldCheck,
} from "lucide-react";

import "./Doctors.css";

const doctors = [
  {
    name: "Dr. Emily Carter",
    role: "Founder & Lead Dentist",
    specialty: "Cosmetic & Restorative Dentistry",
    experience: "12+ years experience",
    description:
      "Dr. Emily Carter leads Oak & Ivory with a focus on personalised, thoughtful dentistry and long-term patient relationships.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Dr. Daniel Brooks",
    role: "Associate Dentist",
    specialty: "General & Preventive Dentistry",
    experience: "Experienced in comprehensive dental care",
    description:
      "Dr. Daniel Brooks provides comprehensive dental care with an emphasis on prevention, comfort and clear communication.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Dr. Sophia Mitchell",
    role: "Cosmetic Dentist",
    specialty: "Smile Design & Cosmetic Dentistry",
    experience: "Focused on confident smiles",
    description:
      "Dr. Sophia Mitchell helps patients achieve natural-looking smile improvements through personalised cosmetic care.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1000&q=85",
  },
];

const Doctors = () => {
  return (
    <main className="doctors-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="doctors-hero">

        <div className="doctors-container">

          <div className="doctors-eyebrow">
            <span />
            OUR DENTAL SPECIALISTS
          </div>

          <div className="doctors-hero-grid">

            <h1>
              Meet the
              <br />
              experts behind
              <br />
              <em>your smile.</em>
            </h1>

            <div className="doctors-hero-content">

              <p>
                Experienced clinicians who combine
                modern dentistry with a calm,
                personal approach to care.
              </p>

              <a
                href="/booking"
                className="doctors-primary-button"
              >
                <span>
                  Book an Appointment
                </span>

                <span>
                  <ArrowUpRight size={16} />
                </span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          INTRO
      ================================================== */}

      <section className="doctors-intro">

        <div className="doctors-container">

          <div className="doctors-intro-grid">

            <div className="doctors-intro-stat">
              <strong>3</strong>

              <span>
                DENTAL
                <br />
                SPECIALISTS
              </span>
            </div>

            <div className="doctors-intro-copy">

              <span>
                CLINICAL EXPERTISE
              </span>

              <p>
                At Oak & Ivory, our dentists bring
                different areas of expertise together
                around one shared goal: exceptional,
                patient-first care.
              </p>

            </div>

            <div className="doctors-intro-badge">

              <Check size={14} />

              <span>
                Care that
                <br />
                feels personal.
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          DOCTORS
      ================================================== */}

      <section className="doctors-list">

        <div className="doctors-container">

          <div className="doctors-section-heading">

            <div className="doctors-eyebrow">
              <span />
              MEET YOUR CARE TEAM
            </div>

            <h2>
              Expertise you can
              <br />
              <em>feel confident in.</em>
            </h2>

          </div>


          <div className="doctors-grid">

            {doctors.map((doctor, index) => (

              <article
                className="doctor-profile-card"
                key={doctor.name}
              >

                <div className="doctor-profile-image">

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                  />

                  <div className="doctor-profile-number">
                    0{index + 1}
                  </div>

                </div>


                <div className="doctor-profile-content">

                  <span className="doctor-profile-role">
                    {doctor.role}
                  </span>

                  <h3>
                    {doctor.name}
                  </h3>

                  <div className="doctor-profile-specialty">
                    <Award size={13} />
                    {doctor.specialty}
                  </div>

                  <p>
                    {doctor.description}
                  </p>

                  <div className="doctor-profile-experience">
                    <Check size={13} />
                    {doctor.experience}
                  </div>

                  <a
                    href="/booking"
                    className="doctor-profile-link"
                  >
                    Book an appointment

                    <ArrowUpRight size={14} />
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          CARE PHILOSOPHY
      ================================================== */}

      <section className="doctors-philosophy">

        <div className="doctors-container">

          <div className="doctors-philosophy-grid">

            <div>

              <div className="doctors-eyebrow doctors-eyebrow-light">
                <span />
                OUR APPROACH
              </div>

              <h2>
                Great dentistry
                <br />
                starts with
                <br />
                <em>trust.</em>
              </h2>

            </div>


            <div className="doctors-philosophy-content">

              <p>
                We believe clinical expertise is only
                part of exceptional care. The other
                part is listening, explaining clearly
                and making sure every patient feels
                comfortable with their decisions.
              </p>


              <div className="doctors-values">

                <div>

                  <span>
                    <Heart size={17} />
                  </span>

                  <div>
                    <strong>
                      Patient first
                    </strong>

                    <small>
                      Your concerns and goals guide
                      the conversation.
                    </small>
                  </div>

                </div>


                <div>

                  <span>
                    <ShieldCheck size={17} />
                  </span>

                  <div>
                    <strong>
                      Clear care
                    </strong>

                    <small>
                      We explain your options without
                      unnecessary complexity.
                    </small>
                  </div>

                </div>


                <div>

                  <span>
                    <Award size={17} />
                  </span>

                  <div>
                    <strong>
                      Modern expertise
                    </strong>

                    <small>
                      Thoughtful treatment supported
                      by modern dental techniques.
                    </small>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          CTA
      ================================================== */}

      <section className="doctors-cta">

        <div className="doctors-container">

          <div className="doctors-cta-inner">

            <div>

              <span>
                READY TO MEET YOUR DENTIST?
              </span>

              <h2>
                Your smile is in
                <br />
                <em>good hands.</em>
              </h2>

            </div>

            <a href="/booking">

              <CalendarDays size={15} />

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

export default Doctors;