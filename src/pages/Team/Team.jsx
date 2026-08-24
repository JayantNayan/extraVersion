import {
  ArrowUpRight,
  Award,
  Heart,
  ShieldCheck,
} from "lucide-react";

import "./Team.css";

const teamMembers = [
  {
    name: "Dr. Emily Carter",
    role: "Founder & Lead Dentist",
    experience: "12+ years experience",
    specialty: "Cosmetic & Restorative Dentistry",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dr. Daniel Brooks",
    role: "Associate Dentist",
    experience: "8+ years experience",
    specialty: "General & Preventive Dentistry",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dr. Sophia Mitchell",
    role: "Cosmetic Dentist",
    experience: "7+ years experience",
    specialty: "Smile Design & Cosmetic Dentistry",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sarah Wilson",
    role: "Patient Care Coordinator",
    experience: "Patient Experience",
    specialty: "Appointments & Patient Support",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Maya Thompson",
    role: "Dental Hygienist",
    experience: "Preventive Care",
    specialty: "Hygiene & Oral Health",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
  },
];

const Team = () => {
  return (
    <main className="team-page">

      {/* =========================================
          PAGE HERO
      ========================================= */}

      <section className="team-page-hero">

        <div className="container">

          <div className="team-page-eyebrow">
            <span />
            OUR DENTAL SPECIALISTS
          </div>

          <div className="team-page-hero-grid">

            <h1>
              Meet the people
              <br />
              behind your
              <br />
              <em>care.</em>
            </h1>

            <div className="team-page-hero-copy">

              <p>
                Our team combines clinical expertise
                with a genuinely personal approach.
                We take time to understand you first,
                then build care around what matters
                to you.
              </p>

              <a
                href="/booking"
                className="team-page-button"
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


      {/* =========================================
          TEAM INTRO
      ========================================= */}

      <section className="team-page-intro">

        <div className="container">

          <div className="team-page-intro-grid">

            <div className="team-stat">
              <strong>12+</strong>

              <span>
                YEARS OF
                <br />
                EXPERIENCE
              </span>
            </div>

            <div className="team-intro-copy">

              <span>
                PEOPLE FIRST
              </span>

              <p>
                At Oak & Ivory, great dentistry starts
                with great relationships. Every member
                of our team is committed to making you
                feel heard, informed and comfortable.
              </p>

            </div>

            <div className="team-intro-badge">

              <Heart size={18} />

              <span>
                Care that
                <br />
                feels personal.
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          TEAM GRID
      ========================================= */}

      <section className="team-members">

        <div className="container">

          <div className="team-section-heading">

            <div className="team-page-eyebrow">
              <span />
              THE OAK & IVORY TEAM
            </div>

            <h2>
              Experienced.
              <br />
              <em>Compassionate.</em>
            </h2>

          </div>


          <div className="team-members-grid">

            {teamMembers.map((member) => (

              <article
                className="team-member-card"
                key={member.name}
              >

                <div className="team-member-image">

                  <img
                    src={member.image}
                    alt={member.name}
                  />

                  <div className="team-member-image-overlay">
                    <span>
                      OAK & IVORY
                    </span>
                  </div>

                </div>


                <div className="team-member-content">

                  <span className="team-member-role">
                    {member.role}
                  </span>

                  <h3>
                    {member.name}
                  </h3>

                  <p>
                    {member.specialty}
                  </p>

                  <div className="team-member-experience">
                    <Award size={13} />

                    {member.experience}
                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          TEAM PHILOSOPHY
      ========================================= */}

      <section className="team-philosophy">

        <div className="container">

          <div className="team-philosophy-grid">

            <div>

              <div className="team-page-eyebrow light">
                <span />
                OUR APPROACH
              </div>

              <h2>
                Expertise
                <br />
                with a
                <br />
                <em>human touch.</em>
              </h2>

            </div>


            <div className="team-philosophy-content">

              <p>
                We believe the best dental experience
                combines clinical excellence with
                empathy. That's why we listen first,
                explain clearly and make sure you feel
                confident about every decision.
              </p>


              <div className="team-principles">

                <div>
                  <ShieldCheck size={18} />

                  <span>
                    Clear and honest communication
                  </span>
                </div>

                <div>
                  <Heart size={18} />

                  <span>
                    Patient-first care
                  </span>
                </div>

                <div>
                  <Award size={18} />

                  <span>
                    Modern clinical expertise
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="team-page-cta">

        <div className="container">

          <div className="team-page-cta-inner">

            <div>

              <span>
                READY TO MEET YOUR CARE TEAM?
              </span>

              <h2>
                Your smile is in
                <br />
                good
                <em> hands.</em>
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

export default Team;