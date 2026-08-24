import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import "./Contact.css";

const hours = [
  ["Monday", "8:00 AM – 5:30 PM"],
  ["Tuesday", "8:00 AM – 6:30 PM"],
  ["Wednesday", "8:00 AM – 5:30 PM"],
  ["Thursday", "8:00 AM – 6:30 PM"],
  ["Friday", "8:00 AM – 3:00 PM"],
  ["Saturday", "9:00 AM – 1:00 PM"],
  ["Sunday", "Closed"],
];

const Contact = () => {
  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">
        <div className="contact-container">

          <div className="contact-eyebrow">
            <span />
            GET IN TOUCH
          </div>

          <div className="contact-hero-grid">

            <div className="contact-hero-left">
              <h1>
                Let's talk
                <br />
                about your
                <br />
                <em>smile.</em>
              </h1>
            </div>

            <div className="contact-hero-right">

              <p>
                Have a question, need an appointment,
                or simply want to know what comes next?
                Our team is here to make getting started
                feel easy.
              </p>

              <div className="contact-hero-buttons">

                <a
                  href="/booking"
                  className="contact-main-button"
                >
                  <span>Book an Appointment</span>

                  <span className="contact-round-icon">
                    <ArrowUpRight size={16} />
                  </span>
                </a>

                <a
                  href="/ivy"
                  className="contact-outline-button"
                >
                  <MessageCircle size={15} />
                  Talk to Ivy
                </a>

              </div>

            </div>

          </div>

          <div className="contact-hero-bottom">

            <div>
              <span>1847 WESTLAKE AVENUE</span>
              <strong>Austin, Texas</strong>
            </div>

            <div>
              <span>CALL US</span>
              <strong>+1 (512) 555-0147</strong>
            </div>

            <div>
              <span>EMAIL</span>
              <strong>hello@oakandivory.example</strong>
            </div>

          </div>

        </div>
      </section>


      {/* ================= CONTACT CARDS ================= */}

      <section className="contact-details">

        <div className="contact-container">

          <div className="contact-details-heading">

            <div className="contact-eyebrow">
              <span />
              FIND US
            </div>

            <h2>
              We're here when
              <br />
              you <em>need us.</em>
            </h2>

          </div>


          <div className="contact-details-grid">

            {/* LOCATION */}

            <article className="contact-detail-card contact-location-card">

              <div className="contact-card-top">
                <div className="contact-card-icon">
                  <MapPin size={21} />
                </div>

                <span>01</span>
              </div>

              <div className="contact-card-content">

                <small>OUR CLINIC</small>

                <h3>
                  Oak & Ivory
                  <br />
                  Dental
                </h3>

                <p>
                  1847 Westlake Avenue
                  <br />
                  Suite 210
                  <br />
                  Austin, TX 78746
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=1847+Westlake+Avenue+Suite+210+Austin+TX+78746"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                  <ArrowUpRight size={14} />
                </a>

              </div>

            </article>


            {/* PHONE */}

            <article className="contact-detail-card">

              <div className="contact-card-top">
                <div className="contact-card-icon">
                  <Phone size={21} />
                </div>

                <span>02</span>
              </div>

              <div className="contact-card-content">

                <small>PHONE</small>

                <h3>
                  Speak with
                  <br />
                  our team.
                </h3>

                <a
                  href="tel:+15125550147"
                  className="contact-big-link"
                >
                  +1 (512) 555-0147
                </a>

                <p>
                  Call us for appointments,
                  questions, or help choosing
                  the right next step.
                </p>

              </div>

            </article>


            {/* EMAIL */}

            <article className="contact-detail-card">

              <div className="contact-card-top">
                <div className="contact-card-icon">
                  <Mail size={21} />
                </div>

                <span>03</span>
              </div>

              <div className="contact-card-content">

                <small>EMAIL</small>

                <h3>
                  Send us
                  <br />
                  a message.
                </h3>

                <a
                  href="mailto:hello@oakandivory.example"
                  className="contact-big-link contact-email-link"
                >
                  hello@oakandivory.example
                </a>

                <p>
                  Send your question and our
                  team will help you with the
                  next step.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ================= HOURS ================= */}

      <section className="contact-hours-section">

        <div className="contact-container">

          <div className="contact-hours-layout">

            <div className="contact-hours-intro">

              <div className="contact-eyebrow contact-light-eyebrow">
                <span />
                WHEN TO VISIT
              </div>

              <h2>
                Opening
                <br />
                <em>hours.</em>
              </h2>

              <p>
                Choose a time that works for you.
                For appointments outside regular
                hours, please contact our team.
              </p>

              <a
                href="/booking"
                className="contact-white-button"
              >
                Request an Appointment

                <span>
                  <ArrowUpRight size={15} />
                </span>
              </a>

            </div>


            <div className="contact-hours-box">

              <div className="contact-hours-title">

                <div>
                  <Clock3 size={17} />
                </div>

                <span>CLINIC HOURS</span>

              </div>


              <div className="contact-hours-list">

                {hours.map(([day, time]) => (
                  <div
                    className={`contact-hour ${
                      time === "Closed"
                        ? "contact-hour-closed"
                        : ""
                    }`}
                    key={day}
                  >

                    <span>{day}</span>

                    <strong>{time}</strong>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FORM ================= */}

      <section className="contact-message-section">

        <div className="contact-container">

          <div className="contact-message-heading">

            <div className="contact-eyebrow">
              <span />
              SEND A MESSAGE
            </div>

            <h2>
              How can we
              <br />
              <em>help?</em>
            </h2>

            <p>
              Tell us a little about what you need.
              Our team will help you find the
              appropriate next step.
            </p>

          </div>


          <form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >

            <div className="contact-form-row">

              <label>
                <span>FIRST NAME</span>

                <input
                  type="text"
                  placeholder="Your first name"
                  required
                />
              </label>

              <label>
                <span>LAST NAME</span>

                <input
                  type="text"
                  placeholder="Your last name"
                  required
                />
              </label>

            </div>


            <div className="contact-form-row">

              <label>
                <span>EMAIL ADDRESS</span>

                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                <span>PHONE NUMBER</span>

                <input
                  type="tel"
                  placeholder="+1 (___) ___-____"
                />
              </label>

            </div>


            <label className="contact-full-field">

              <span>WHAT CAN WE HELP WITH?</span>

              <select defaultValue="">
                <option value="" disabled>
                  Select a topic
                </option>

                <option>
                  General enquiry
                </option>

                <option>
                  Book an appointment
                </option>

                <option>
                  Cosmetic dentistry
                </option>

                <option>
                  Existing patient
                </option>

                <option>
                  Other
                </option>
              </select>

            </label>


            <label className="contact-full-field">

              <span>MESSAGE</span>

              <textarea
                rows="6"
                placeholder="Tell us how we can help..."
              />

            </label>


            <div className="contact-submit-row">

              <p>
                We respect your privacy and will
                only use your information to
                respond to your enquiry.
              </p>

              <button type="submit">

                Send Message

                <span>
                  <Send size={14} />
                </span>

              </button>

            </div>

          </form>

        </div>

      </section>


      {/* ================= IVY ================= */}

      <section className="contact-ivy-section">

        <div className="contact-container">

          <div className="contact-ivy-card">

            <div className="contact-ivy-symbol">
              <MessageCircle size={25} />
            </div>

            <div className="contact-ivy-content">

              <span>
                NEED HELP RIGHT NOW?
              </span>

              <h2>
                Talk to Ivy.
              </h2>

              <p>
                Our AI receptionist can help with
                appointments, common questions,
                and what to do next.
              </p>

            </div>

            <a href="/ivy">

              Talk to Ivy

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

export default Contact;