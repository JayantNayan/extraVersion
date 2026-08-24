import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import "./BookingPage.css";

const services = [
  "General Dentistry",
  "Preventive Care",
  "Cosmetic Dentistry",
  "Restorative Dentistry",
  "Emergency Care",
  "Consultation",
];

const doctors = [
  "Any available doctor",
  "Dr. Sarah Mitchell",
  "Dr. James Carter",
  "Dr. Emily Wilson",
];

const dates = [
  { day: "MON", date: "24", month: "AUG" },
  { day: "TUE", date: "25", month: "AUG" },
  { day: "WED", date: "26", month: "AUG" },
  { day: "THU", date: "27", month: "AUG" },
  { day: "FRI", date: "28", month: "AUG" },
];

const times = [
  "9:00 AM",
  "10:00 AM",
  "11:30 AM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM",
  "5:30 PM",
];

const BookingPage = () => {
  const [service, setService] = useState("");
  const [doctor, setDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("25");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="booking-page">
        <section className="booking-success">

          <div className="booking-success-card">

            <div className="booking-success-icon">
              <Check size={30} />
            </div>

            <span className="booking-label">
              APPOINTMENT REQUESTED
            </span>

            <h1>
              You're all
              <br />
              <em>set.</em>
            </h1>

            <p>
              Your appointment request has been
              received. Our team will confirm the
              details with you shortly.
            </p>

            <div className="booking-success-details">

              <div>
                <CalendarDays size={17} />

                <span>
                  AUGUST {selectedDate}, 2026
                </span>
              </div>

              <div>
                <Clock3 size={17} />

                <span>
                  {selectedTime}
                </span>
              </div>

              <div>
                <MapPin size={17} />

                <span>
                  Oak & Ivory Dental
                </span>
              </div>

            </div>

            <button
              className="booking-success-button"
              onClick={() => setSubmitted(false)}
            >
              Make another appointment

              <ArrowUpRight size={15} />
            </button>

          </div>

        </section>
      </main>
    );
  }

  return (
    <main className="booking-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="booking-hero">

        <div className="booking-container">

          <div className="booking-eyebrow">
            <span />
            BOOK YOUR VISIT
          </div>

          <div className="booking-hero-grid">

            <div>

              <h1>
                Your next
                <br />
                visit starts
                <br />
                <em>here.</em>
              </h1>

            </div>

            <div className="booking-hero-copy">

              <p>
                Choose a service, find a convenient
                time, and tell us a little about
                yourself. We'll take care of the rest.
              </p>

              <div className="booking-hero-note">
                <Sparkles size={15} />

                <span>
                  A calm, simple way to book your care.
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          BOOKING AREA
      ========================================= */}

      <section className="booking-section">

        <div className="booking-container">

          <div className="booking-layout">

            {/* =====================================
                LEFT INFORMATION
            ===================================== */}

            <aside className="booking-sidebar">

              <div className="booking-sidebar-top">

                <span>
                  YOUR APPOINTMENT
                </span>

                <div className="booking-step">
                  <strong>01</strong>
                  <small>/ 03</small>
                </div>

              </div>

              <h2>
                Let's find
                <br />
                your
                <em> time.</em>
              </h2>

              <p>
                Select your preferred appointment
                details. You can update everything
                before submitting your request.
              </p>


              <div className="booking-benefits">

                <div>
                  <div>
                    <ShieldCheck size={16} />
                  </div>

                  <span>
                    Private & secure
                  </span>
                </div>

                <div>
                  <div>
                    <Clock3 size={16} />
                  </div>

                  <span>
                    Flexible appointment times
                  </span>
                </div>

                <div>
                  <div>
                    <MessageCircle size={16} />
                  </div>

                  <span>
                    Questions? Talk to Ivy
                  </span>
                </div>

              </div>

            </aside>


            {/* =====================================
                FORM
            ===================================== */}

            <form
              className="booking-card"
              onSubmit={handleSubmit}
            >

              {/* SERVICE */}

              <div className="booking-field-section">

                <div className="booking-field-heading">

                  <div>
                    <span>01</span>
                    <h3>
                      What can we help with?
                    </h3>
                  </div>

                  <small>
                    REQUIRED
                  </small>

                </div>

                <div className="booking-options">

                  {services.map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={
                        service === item
                          ? "booking-option active"
                          : "booking-option"
                      }
                      onClick={() => setService(item)}
                    >
                      {item}

                      {service === item && (
                        <Check size={14} />
                      )}
                    </button>
                  ))}

                </div>

              </div>


              {/* DOCTOR */}

              <div className="booking-field-section">

                <div className="booking-field-heading">

                  <div>
                    <span>02</span>
                    <h3>
                      Preferred doctor
                    </h3>
                  </div>

                  <small>
                    OPTIONAL
                  </small>

                </div>

                <div className="booking-select-wrapper">

                  <select
                    value={doctor}
                    onChange={(event) =>
                      setDoctor(event.target.value)
                    }
                  >
                    <option value="">
                      Select a doctor
                    </option>

                    {doctors.map((item) => (
                      <option
                        value={item}
                        key={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>

                  <ArrowRight size={15} />

                </div>

              </div>


              {/* DATE */}

              <div className="booking-field-section">

                <div className="booking-field-heading">

                  <div>
                    <span>03</span>
                    <h3>
                      Choose a date
                    </h3>
                  </div>

                  <small>
                    AUGUST 2026
                  </small>

                </div>

                <div className="booking-date-grid">

                  {dates.map((item) => (
                    <button
                      type="button"
                      key={item.date}
                      className={
                        selectedDate === item.date
                          ? "booking-date active"
                          : "booking-date"
                      }
                      onClick={() =>
                        setSelectedDate(item.date)
                      }
                    >
                      <span>{item.day}</span>

                      <strong>{item.date}</strong>

                      <small>{item.month}</small>
                    </button>
                  ))}

                </div>

              </div>


              {/* TIME */}

              <div className="booking-field-section">

                <div className="booking-field-heading">

                  <div>
                    <span>04</span>
                    <h3>
                      Pick a time
                    </h3>
                  </div>

                  <small>
                    LOCAL TIME
                  </small>

                </div>

                <div className="booking-time-grid">

                  {times.map((time) => (
                    <button
                      type="button"
                      key={time}
                      className={
                        selectedTime === time
                          ? "booking-time active"
                          : "booking-time"
                      }
                      onClick={() =>
                        setSelectedTime(time)
                      }
                    >
                      {time}
                    </button>
                  ))}

                </div>

              </div>


              {/* PATIENT DETAILS */}

              <div className="booking-field-section">

                <div className="booking-field-heading">

                  <div>
                    <span>05</span>
                    <h3>
                      About you
                    </h3>
                  </div>

                  <small>
                    REQUIRED
                  </small>

                </div>

                <div className="booking-input-grid">

                  <label>
                    <span>FIRST NAME</span>

                    <input
                      type="text"
                      placeholder="First name"
                      required
                    />
                  </label>

                  <label>
                    <span>LAST NAME</span>

                    <input
                      type="text"
                      placeholder="Last name"
                      required
                    />
                  </label>

                  <label>
                    <span>EMAIL</span>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </label>

                  <label>
                    <span>PHONE</span>

                    <input
                      type="tel"
                      placeholder="+1 (___) ___-____"
                      required
                    />
                  </label>

                </div>

                <label className="booking-message">

                  <span>
                    ANYTHING WE SHOULD KNOW?
                  </span>

                  <textarea
                    rows="4"
                    placeholder="Optional message..."
                  />

                </label>

              </div>


              {/* SUMMARY */}

              <div className="booking-summary">

                <div className="booking-summary-heading">
                  <span>YOUR SELECTION</span>
                  <Check size={15} />
                </div>

                <div className="booking-summary-content">

                  <div>
                    <small>SERVICE</small>

                    <strong>
                      {service || "Not selected"}
                    </strong>
                  </div>

                  <div>
                    <small>DATE & TIME</small>

                    <strong>
                      Aug {selectedDate}, 2026 ·{" "}
                      {selectedTime}
                    </strong>
                  </div>

                </div>

              </div>


              {/* SUBMIT */}

              <div className="booking-submit">

                <p>
                  By submitting, you agree to be
                  contacted about your appointment.
                </p>

                <button
                  type="submit"
                  className="booking-submit-button"
                >
                  Request Appointment

                  <span>
                    <ArrowUpRight size={15} />
                  </span>
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>


      {/* =========================================
          IVY CTA
      ========================================= */}

      <section className="booking-ivy">

        <div className="booking-container">

          <div className="booking-ivy-inner">

            <div className="booking-ivy-icon">
              <MessageCircle size={23} />
            </div>

            <div>

              <span>
                NOT SURE WHAT TO BOOK?
              </span>

              <h2>
                Ask Ivy.
              </h2>

              <p>
                Our AI receptionist can help you
                choose the right appointment and
                answer common questions.
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

export default BookingPage;