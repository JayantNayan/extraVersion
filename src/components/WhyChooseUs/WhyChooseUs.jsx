import {
  ArrowUpRight,
  Check,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import "./WhyChooseUs.css";

const reasons = [
  {
    number: "01",
    title: "Personalised care",
    description:
      "Your smile, your goals and your concerns are unique. Your treatment should be too.",
    icon: Heart,
  },
  {
    number: "02",
    title: "Modern technology",
    description:
      "We use advanced dental technology to improve diagnosis, treatment planning and your overall experience.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Clear communication",
    description:
      "We explain what we're doing, why we're recommending it and what your options are — in language you can understand.",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Comfort-focused care",
    description:
      "From the moment you walk through our doors, we want you to feel relaxed, respected and cared for.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "No-pressure consultations",
    description:
      "You should never feel pressured into treatment. We give you the information you need to make the right decision for you.",
    icon: Check,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section" id="experience">
      <div className="why-container">

        {/* =====================================
            TOP HEADER
        ====================================== */}

        <div className="why-header">

          <div className="why-label">
            <span />
            WHY OAK & IVORY
          </div>

          <div className="why-heading-layout">

            <h2>
              Better dentistry
              <br />
              starts with a
              <br />
              <span>better experience.</span>
            </h2>

            <div className="why-intro">

              <p>
                Exceptional dental care isn't only
                about treatment. It's about how you
                feel before, during and after every
                visit.
              </p>

              <a
                href="#booking"
                className="why-header-link"
              >
                <span>Start your journey</span>

                <span className="why-header-link-icon">
                  <ArrowUpRight size={16} />
                </span>
              </a>

            </div>

          </div>

        </div>


        {/* =====================================
            REASONS
        ====================================== */}

        <div className="why-list">

          {reasons.map((reason, index) => {

            const Icon = reason.icon;

            return (
              <article
                className={`why-item ${
                  index === 0 ? "why-item-active" : ""
                }`}
                key={reason.number}
              >

                <div className="why-item-number">
                  {reason.number}
                </div>


                <div className="why-item-icon">
                  <Icon size={22} />
                </div>


                <div className="why-item-content">

                  <h3>
                    {reason.title}
                  </h3>

                  <p>
                    {reason.description}
                  </p>

                </div>


                <div className="why-item-arrow">
                  <ArrowUpRight size={20} />
                </div>

              </article>
            );
          })}

        </div>


        {/* =====================================
            BOTTOM MESSAGE
        ====================================== */}

        <div className="why-bottom">

          <div className="why-bottom-quote">

            <span className="why-quote-mark">
              “
            </span>

            <div>

              <p>
                We don't just treat teeth.
                <strong>
                  {" "}We take care of people.
                </strong>
              </p>

              <span>
                The Oak & Ivory approach
              </span>

            </div>

          </div>


          <div className="why-bottom-points">

            <div>
              <Check size={14} />
              No rushed appointments
            </div>

            <div>
              <Check size={14} />
              Clear treatment options
            </div>

            <div>
              <Check size={14} />
              Patient-first approach
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;