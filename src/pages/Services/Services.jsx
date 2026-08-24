import ServicesSection from "../../components/Services/Services";
import Booking from "../../components/Booking/Booking";
import Ivy from "../../components/Ivy/Ivy";

const Services = () => {
  return (
    <main className="services-page">

      {/* Page Hero */}
      <section className="services-page-hero">
        <div className="container">
          <div className="services-page-hero-content">
            <span className="services-page-eyebrow">
              OUR SERVICES
            </span>

            <h1>
              Complete care
              <br />
              for your <em>smile.</em>
            </h1>

            <p>
              From routine care to complete smile
              transformations, Oak & Ivory offers
              thoughtful dental care designed around you.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-page-list">
        <ServicesSection />
      </section>

      {/* Ivy */}
      <section className="services-page-ivy">
        <Ivy />
      </section>

      {/* Booking */}
      <section className="services-page-booking">
        <Booking />
      </section>

    </main>
  );
};

export default Services;