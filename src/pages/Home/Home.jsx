import Hero from "../../components/Hero/Hero";
import Intro from "../../components/Intro/Intro";
import Services from "../../components/Services/Services";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import PatientExperience from "../../components/PatientExperience/PatientExperience";
import Testimonials from "../../components/Testimonials/Testimonials";
import Ivy from "../../components/Ivy/Ivy";
import Booking from "../../components/Booking/Booking";
import WhatsApp from "../../components/WhatsApp/WhatsApp";
import "./Home.css";
const Home = () => {
  return (
    <main className="home-page">

      {/* =========================================
          HERO
          Your smile deserves exceptional care.
      ========================================= */}

      <section className="home-hero">
        <Hero />
      </section>


      {/* =========================================
          INTRO / ABOUT
          Dentistry that puts you first.
      ========================================= */}

      <section className="home-intro">
        <Intro />
      </section>


      {/* =========================================
          SERVICES
          Complete care for your smile.
      ========================================= */}

      <section className="home-services">
        <Services />
      </section>


      {/* =========================================
          WHY OAK & IVORY
          Better dentistry starts with
          a better experience.
      ========================================= */}

      <section className="home-why">
        <WhyChooseUs />
      </section>


      {/* =========================================
          PATIENT EXPERIENCE
          Care for real life.
      ========================================= */}

      <section className="home-patient-experience">
        <PatientExperience />
      </section>


      {/* =========================================
          TESTIMONIALS
          What our patients say.
      ========================================= */}

      <section className="home-testimonials">
        <Testimonials />
      </section>


      {/* =========================================
          IVY AI RECEPTIONIST
          Meet Ivy.
      ========================================= */}

      <section className="home-ivy">
        <Ivy />
      </section>


      {/* =========================================
          BOOKING CTA
          Let's find the right appointment.
      ========================================= */}

      <section className="home-booking">
        <Booking />
      </section>


      {/* =========================================
          WHATSAPP
          Floating patient communication
      ========================================= */}

      <WhatsApp />

    </main>
  );
};

export default Home;