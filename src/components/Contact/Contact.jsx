import { useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Check,
} from "lucide-react";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* =====================================
            HEADER
        ====================================== */}

        <div className="contact-header">

          <div className="contact-label">
            <span />
            GET IN TOUCH
          </div>

          <div className="contact-heading-row">

            <h2>
              Let's start a
              <br />
              <span>conversation.</span>
            </h2>

            <p>
              Have a question before booking?
              Need help finding the right service?
              Our team is here to help.
            </p>

          </div>

        </div>


        {/* =====================================
            MAIN CONTACT AREA
        ====================================== */}

        <div className="contact-layout">

          {/* =================================
              LEFT
          ================================= */}

          <div className="contact-left">

            {/* Location Visual */}

            <div className="contact-location-card">

              <div className="contact-map">

                <div className="map-grid" />

                <div className="map-road road-one" />
                <div className="map-road road-two" />
                <div className="map-road road-three" />

                <div className="map-pin">

                  <div>
                    <MapPin size={21} />
                  </div>

                  <span>
                    OAK & IVORY
                  </span>

                </div>

              </div>

              <div className="contact-address">

                <div>
                  <small>
                    VISIT US
                  </small>

                  <strong>
                    1847 Westlake Avenue,
                    <br />
                    Suite 210, Austin, Texas
                  </strong>
                </div>

                <a
                  href="#"
                  aria-label="Get directions"
                >
                  <ArrowUpRight size={17} />
                </a>

              </div>

            </div>


            {/* Contact Details */}

            <div className="contact-details">

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <Phone size={17} />
                </div>

                <div>
                  <small>
                    CALL US
                  </small>

                  <a href="tel:+15125550184">
                    (512) 555-0184
                  </a>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <Mail size={17} />
                </div>

                <div>
                  <small>
                    EMAIL
                  </small>

                  <a href="mailto:hello@oakandivory.com">
                    hello@oakandivory.com
                  </a>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <Clock3 size={17} />
                </div>

                <div>
                  <small>
                    OPENING HOURS
                  </small>

                  <strong>
                    Mon–Fri · 8:00 AM–5:00 PM
                  </strong>
                </div>

              </div>

            </div>

          </div>


          {/* =================================
              RIGHT FORM
          ================================= */}

          <div className="contact-form-card">

            {!sent ? (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-top">

                  <span>
                    SEND US A MESSAGE
                  </span>

                  <h3>
                    How can we
                    <br />
                    help?
                  </h3>

                </div>


                {/* Name */}

                <div className="contact-field">

                  <label htmlFor="contact-name">
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Email */}

                <div className="contact-field">

                  <label htmlFor="contact-email">
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Message */}

                <div className="contact-field">

                  <label htmlFor="contact-message">
                    Your message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Submit */}

                <div className="contact-submit-row">

                  <p>
                    We aim to respond to enquiries
                    as soon as possible during
                    opening hours.
                  </p>

                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    <span>
                      Send Message
                    </span>

                    <span>
                      <Send size={15} />
                    </span>
                  </button>

                </div>

              </form>

            ) : (

              <div className="contact-success">

                <div className="contact-success-icon">
                  <Check size={28} />
                </div>

                <span>
                  MESSAGE SENT
                </span>

                <h3>
                  Thanks for
                  <br />
                  reaching out.
                </h3>

                <p>
                  We've received your message and
                  will get back to you as soon as
                  possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </button>

              </div>

            )}

          </div>

        </div>


        {/* =====================================
            QUICK CTA
        ====================================== */}

        <div className="contact-quick">

          <div className="contact-quick-icon">
            <MessageCircle size={20} />
          </div>

          <div className="contact-quick-text">

            <span>
              NEED HELP RIGHT NOW?
            </span>

            <strong>
              Ask Ivy, our AI receptionist.
            </strong>

          </div>

          <a
            href="#ivy"
            className="contact-ivy-button"
          >
            Talk to Ivy

            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;