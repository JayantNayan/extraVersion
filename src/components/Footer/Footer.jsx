import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* =====================================
          TOP CTA
      ====================================== */}

      <div className="footer-cta">

        <div className="footer-cta-inner">

          <div className="footer-cta-content">

            <span className="footer-cta-label">
              READY TO GET STARTED?
            </span>

            <h2>
              A healthier smile
              <br />
              starts with a
              <span> conversation.</span>
            </h2>

            <p>
              Whether you need a check-up, have a
              question or want to explore your smile
              options, we're here to help.
            </p>

          </div>


          <div className="footer-cta-actions">

            <a
              href="#booking"
              className="footer-book-button"
            >
              <span>
                Book an Appointment
              </span>

              <span>
                <ArrowUpRight size={18} />
              </span>
            </a>


            <a
              href="#ivy"
              className="footer-ivy-button"
            >
              <Sparkles size={15} />

              Talk to Ivy
            </a>

          </div>

        </div>

      </div>


      {/* =====================================
          MAIN FOOTER
      ====================================== */}

      <div className="footer-main">

        <div className="footer-container">

          {/* =================================
              BRAND
          ================================= */}

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
            >
              <span className="footer-logo-mark">
                O
              </span>

              <span>
                OAK & IVORY
                <small>
                  DENTAL
                </small>
              </span>
            </a>


            <p>
              Modern dentistry with a more
              thoughtful approach. Clear advice,
              comfortable care and a team that
              puts you first.
            </p>


            <div className="footer-socials">


            </div>

          </div>


          {/* =================================
              NAVIGATION
          ================================= */}

          <div className="footer-column">

            <span className="footer-column-title">
              EXPLORE
            </span>

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#team">
              Our Team
            </a>

            <a href="#testimonials">
              Patient Stories
            </a>

          </div>


          {/* =================================
              PATIENTS
          ================================= */}

          <div className="footer-column">

            <span className="footer-column-title">
              PATIENTS
            </span>

            <a href="#journey">
              Patient Experience
            </a>

            <a href="#ivy">
              Ask Ivy
            </a>

            <a href="#faq">
              FAQs
            </a>

            <a href="#booking">
              Book an Appointment
            </a>

            <a href="#contact">
              Contact Us
            </a>

          </div>


          {/* =================================
              CONTACT
          ================================= */}

          <div className="footer-contact">

            <span className="footer-column-title">
              FIND US
            </span>


            <div className="footer-contact-item">

              <MapPin size={15} />

              <span>
                1847 Westlake Avenue,
                <br />
                Suite 210,
                <br />
                Austin, Texas
              </span>

            </div>


            <div className="footer-contact-item">

              <Phone size={15} />

              <a href="tel:+15125550184">
                (512) 555-0184
              </a>

            </div>


            <div className="footer-contact-item">

              <Mail size={15} />

              <a href="mailto:hello@oakandivory.com">
                hello@oakandivory.com
              </a>

            </div>


            <div className="footer-hours">

              <span>
                HOURS
              </span>

              <strong>
                Mon–Fri · 8:00 AM–5:00 PM
              </strong>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================
          BOTTOM
      ====================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-inner">

          <span>
            © 2026 Oak & Ivory Dental.
            All rights reserved.
          </span>

          <div className="footer-bottom-links">

            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

            <a href="#">
              Accessibility
            </a>

          </div>


          <a
            href="#home"
            className="footer-back-top"
          >
            Back to top

            <ArrowUpRight size={14} />

          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;