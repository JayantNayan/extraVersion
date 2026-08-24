import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

import "./Testimonials.css";

const testimonials = [
  {
    rating: 5,
    text:
      "From the moment I walked in, everyone made me feel completely at ease. Everything was explained clearly and I never felt rushed.",
    name: "Sarah M.",
    detail: "General Dentistry",
    initials: "SM",
  },
  {
    rating: 5,
    text:
      "The team is incredibly professional but also genuinely warm. I finally feel confident about my dental treatment.",
    name: "James R.",
    detail: "Cosmetic Dentistry",
    initials: "JR",
  },
  {
    rating: 5,
    text:
      "I was nervous about my treatment, but the whole experience was so comfortable. The team listened to every concern I had.",
    name: "Emma W.",
    detail: "Dental Implants",
    initials: "EW",
  },
];

const Testimonials = () => {
  return (
    <section
      className="testimonials-section"
      id="testimonials"
    >
      <div className="testimonials-container">

        {/* =====================================
            HEADER
        ====================================== */}

        <div className="testimonials-header">

          <div className="testimonials-label">
            <span />
            PATIENT STORIES
          </div>

          <div className="testimonials-heading-row">

            <h2>
              Don't just take
              <br />
              <span>our word for it.</span>
            </h2>

            <div className="testimonials-intro">

              <p>
                The best measure of our work is how
                our patients feel when they leave.
              </p>

              <div className="testimonials-rating">

                <div className="testimonial-stars">
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                </div>

                <span>
                  Patient experience
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            TESTIMONIAL CARDS
        ====================================== */}

        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (
            <article
              className={`testimonial-card ${
                index === 1
                  ? "testimonial-card-featured"
                  : ""
              }`}
              key={testimonial.name}
            >

              {/* Quote */}

              <div className="testimonial-top">

                <div className="testimonial-quote">
                  <Quote size={22} />
                </div>

                <div className="testimonial-rating">

                  {Array.from({
                    length: testimonial.rating,
                  }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={12}
                      fill="currentColor"
                    />
                  ))}

                </div>

              </div>


              {/* Review */}

              <p className="testimonial-text">
                “{testimonial.text}”
              </p>


              {/* Patient */}

              <div className="testimonial-patient">

                <div className="testimonial-avatar">
                  {testimonial.initials}
                </div>

                <div className="testimonial-patient-info">

                  <strong>
                    {testimonial.name}
                  </strong>

                  <span>
                    {testimonial.detail}
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* =====================================
            BOTTOM
        ====================================== */}

        <div className="testimonials-bottom">

          <div className="testimonials-bottom-left">

            <span className="testimonials-count">
              01
            </span>

            <div className="testimonials-progress">
              <span />
            </div>

            <span className="testimonials-total">
              03
            </span>

          </div>


          <div className="testimonials-bottom-center">

            <span>
              YOUR EXPERIENCE MATTERS
            </span>

            <strong>
              Care that feels
              <em> different.</em>
            </strong>

          </div>


          <div className="testimonials-controls">

            <button
              type="button"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
            >
              <ArrowRight size={17} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;