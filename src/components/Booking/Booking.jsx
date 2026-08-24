import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";

import "./Booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <section
      className="booking-section"
      id="booking"
    >
      <div className="booking-container">

        {/* =====================================
            HEADER
        ====================================== */}

        <div className="booking-header">

          <div className="booking-label">
            <span />
            BOOK YOUR VISIT
          </div>

          <div className="booking-heading-row">

            <h2>
              Your next
              <br />
              visit starts
              <br />
              <span>here.</span>
            </h2>

            <div className="booking-intro">

              <p>
                Ready to take the next step?
                Request an appointment and our
                team will help you find a convenient
                time.
              </p>

              <div className="booking-trust">

                <span>
                  <Check size={11} />
                </span>

                <strong>
                  New patients welcome
                </strong>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            BOOKING AREA
        ====================================== */}

        <div className="booking-layout">

          {/* =================================
              LEFT INFORMATION
          ================================= */}

          <div className="booking-info">

            <div className="booking-info-card">

              <span className="booking-info-label">
                VISIT US
              </span>

              <h3>
                A calm space
                <br />
                for better care.
              </h3>

              <p>
                Oak & Ivory Dental is designed to
                make every part of your visit feel
                considered, comfortable and clear.
              </p>


              {/* Location */}

              <div className="booking-contact-item">

                <div className="booking-contact-icon">
                  <MapPin size={17} />
                </div>

                <div>
                  <small>
                    ADDRESS
                  </small>

                  <strong>
                    1847 Westlake Avenue,
                    <br />
                    Suite 210, Austin, Texas
                  </strong>
                </div>

              </div>


              {/* Phone */}

              <div className="booking-contact-item">

                <div className="booking-contact-icon">
                  <Phone size={17} />
                </div>

                <div>
                  <small>
                    PHONE
                  </small>

                  <strong>
                    (512) 555-0184
                  </strong>
                </div>

              </div>


              {/* Hours */}

              <div className="booking-contact-item">

                <div className="booking-contact-icon">
                  <Clock3 size={17} />
                </div>

                <div>
                  <small>
                    HOURS
                  </small>

                  <strong>
                    Mon–Fri · 8:00 AM–5:00 PM
                  </strong>
                </div>

              </div>

            </div>


            {/* Small note */}

            <div className="booking-note">

              <CalendarDays size={17} />

              <div>
                <strong>
                  Prefer to ask first?
                </strong>

                <span>
                  Talk to Ivy before booking.
                </span>
              </div>

              <a href="#ivy">
                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>


          {/* =================================
              FORM
          ================================= */}

          <div className="booking-form-card">

            {!submitted ? (

              <form
                onSubmit={handleSubmit}
                className="booking-form"
              >

                <div className="booking-form-heading">

                  <div>
                    <span>
                      APPOINTMENT REQUEST
                    </span>

                    <h3>
                      Tell us a little
                      <br />
                      about your visit.
                    </h3>
                  </div>

                  <div className="booking-form-number">
                    01
                  </div>

                </div>


                {/* Name + Email */}

                <div className="booking-fields-row">

                  <div className="booking-field">

                    <label htmlFor="name">
                      Your name
                    </label>

                    <div className="booking-input">

                      <UserRound size={15} />

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>


                  <div className="booking-field">

                    <label htmlFor="email">
                      Email address
                    </label>

                    <div className="booking-input">

                      <Mail size={15} />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>

                </div>


                {/* Phone + Service */}

                <div className="booking-fields-row">

                  <div className="booking-field">

                    <label htmlFor="phone">
                      Phone number
                    </label>

                    <div className="booking-input">

                      <Phone size={15} />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(512) 555-0184"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>


                  <div className="booking-field">

                    <label htmlFor="service">
                      What can we help with?
                    </label>

                    <div className="booking-input">

                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select a service
                        </option>

                        <option value="general">
                          General Dentistry
                        </option>

                        <option value="cleaning">
                          Teeth Cleaning
                        </option>

                        <option value="cosmetic">
                          Cosmetic Dentistry
                        </option>

                        <option value="implants">
                          Dental Implants
                        </option>

                        <option value="emergency">
                          Urgent Dental Care
                        </option>

                        <option value="consultation">
                          Consultation
                        </option>
                      </select>

                      <ChevronDown size={15} />

                    </div>

                  </div>

                </div>


                {/* Date */}

                <div className="booking-field">

                  <label htmlFor="date">
                    Preferred date
                  </label>

                  <div className="booking-input">

                    <CalendarDays size={15} />

                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                {/* Message */}

                <div className="booking-field">

                  <label htmlFor="message">
                    Anything else we should know?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us anything that might help us prepare for your visit..."
                    value={formData.message}
                    onChange={handleChange}
                  />

                </div>


                {/* Submit */}

                <div className="booking-submit-row">

                  <p>
                    By submitting this form, you're
                    requesting an appointment. Our team
                    will contact you to confirm the time.
                  </p>

                  <button
                    type="submit"
                    className="booking-submit"
                  >
                    <span>
                      Request Appointment
                    </span>

                    <span>
                      <ArrowUpRight size={17} />
                    </span>
                  </button>

                </div>

              </form>

            ) : (

              /* =================================
                 SUCCESS
              ================================= */

              <div className="booking-success">

                <div className="booking-success-icon">
                  <Check size={30} />
                </div>

                <span>
                  REQUEST RECEIVED
                </span>

                <h3>
                  Thank you,
                  <br />
                  <em>{formData.name || "there"}.</em>
                </h3>

                <p>
                  We've received your appointment
                  request. Our team will contact you
                  shortly to confirm your preferred time.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setSubmitted(false)
                  }
                  className="booking-back"
                >
                  Send another request
                </button>

              </div>

            )}

          </div>

        </div>


        {/* =====================================
            BOTTOM STRIP
        ====================================== */}

        <div className="booking-bottom">

          <div className="booking-bottom-item">

            <span>
              <Check size={13} />
            </span>

            <strong>
              New patients welcome
            </strong>

          </div>

          <div className="booking-bottom-item">

            <span>
              <Check size={13} />
            </span>

            <strong>
              Calm, judgement-free care
            </strong>

          </div>

          <div className="booking-bottom-item">

            <span>
              <Check size={13} />
            </span>

            <strong>
              Clear treatment options
            </strong>

          </div>

          <div className="booking-bottom-item">

            <span>
              <Check size={13} />
            </span>

            <strong>
              Patient-first approach
            </strong>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Booking;