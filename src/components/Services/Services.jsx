import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import "./Services.css";

const services = [
  {
    number: "01",
    title: "General Dentistry",
    description:
      "Keep your smile healthy with preventive care, examinations, professional cleanings and ongoing oral health support.",
    image:
      "https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1000",
    features: [
      "Dental examinations",
      "Professional cleanings",
      "Digital X-rays",
    ],
  },

  {
    number: "02",
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with personalised treatments designed to create beautiful, natural-looking results.",
    image:
      "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1000",
    features: [
      "Porcelain veneers",
      "Composite bonding",
      "Smile makeovers",
    ],
  },

  {
    number: "03",
    title: "Dental Implants",
    description:
      "Replace missing teeth with durable, natural-looking solutions designed to restore your smile and confidence.",
    image:
      "https://images.pexels.com/photos/3845749/pexels-photo-3845749.jpeg?auto=compress&cs=tinysrgb&w=1000",
    features: [
      "Implant consultation",
      "Treatment planning",
      "Natural-looking results",
    ],
  },

  {
    number: "04",
    title: "Crowns & Bridges",
    description:
      "Restore damaged or missing teeth while protecting your long-term oral health and maintaining a natural appearance.",
    image:
      "https://images.pexels.com/photos/5355839/pexels-photo-5355839.jpeg?auto=compress&cs=tinysrgb&w=1000",
    features: [
      "Tooth restoration",
      "Natural appearance",
      "Long-term protection",
    ],
  },

  {
    number: "05",
    title: "Teeth Whitening",
    description:
      "Brighten your smile with professional whitening treatments tailored to your goals and existing dental health.",
    image:
      "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1000",
    features: [
      "Professional whitening",
      "Personalised treatment",
      "Smile assessment",
    ],
  },

  {
    number: "06",
    title: "Clear Aligners",
    description:
      "Straighten your teeth discreetly with modern clear-aligner treatment designed around your smile.",
    image:
      "https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=1000",
    features: [
      "Discreet treatment",
      "Digital planning",
      "Personalised aligners",
    ],
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="services-container">

        <div className="services-header">

          <div className="services-label">
            <span />
            OUR SERVICES
          </div>

          <div className="services-heading-row">

            <div>
              <h2>
                Complete care
                <br />
                <span>for your smile.</span>
              </h2>
            </div>

            <div className="services-header-content">

              <p>
                From your first dental check-up to
                advanced restorative treatments,
                our team provides comprehensive
                care under one roof.
              </p>

              <a
                href="#booking"
                className="services-header-button"
              >
                <span>Book an Appointment</span>

                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        </div>


        {/* =====================================
            SERVICE GRID
        ====================================== */}

        <div className="services-grid">

          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >

              {/* Image */}

              <div className="service-image-wrapper">

                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />

                <div className="service-image-overlay" />

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-sparkle">
                  <Sparkles size={16} />
                </span>

              </div>


              {/* Content */}

              <div className="service-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>


                {/* Features */}

                <div className="service-features">

                  {service.features.map((feature) => (
                    <div
                      className="service-feature"
                      key={feature}
                    >

                      <span className="service-check">
                        <Check size={10} />
                      </span>

                      <span>
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>


                {/* Learn More */}

                <a
                  href="#contact"
                  className="service-link"
                >
                  <span>Learn More</span>

                  <span className="service-link-icon">
                    <ChevronRight size={16} />
                  </span>
                </a>

              </div>

            </article>
          ))}

        </div>


        {/* =====================================
            BOTTOM CTA
        ====================================== */}

        <div className="services-bottom">

          <div className="services-bottom-left">

            <div className="services-bottom-icon">
              <Sparkles size={19} />
            </div>

            <div>
              <strong>
                Not sure what you need?
              </strong>

              <span>
                Talk to Ivy and we'll help you find
                the right next step.
              </span>
            </div>

          </div>


          <a
            href="#ivy"
            className="services-ivy-button"
          >
            Talk to Ivy

            <span>
              <ArrowUpRight size={17} />
            </span>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Services;