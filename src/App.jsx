import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Ivy from "./components/Ivy/Ivy";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Team from "./pages/Team/Team";
import Experience from "./pages/Experience/Experience";
import Doctors from "./pages/Doctors/Doctors";
import Contact from "./pages/Contact/Contact";
import BookingPage from "./pages/Booking/BookingPage";
import VoicePage from "./pages/Voice/VoicePage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================= MAIN PAGES ================= */}

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/doctors"
          element={<Doctors />}
        />

        <Route
          path="/experience"
          element={<Experience />}
        />

        <Route
          path="/team"
          element={<Team />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* ================= AI ================= */}

        <Route
          path="/ivy"
          element={<Ivy />}
        />

        <Route
          path="/voice"
          element={<VoicePage />}
        />


        {/* ================= BOOKING ================= */}

        <Route
          path="/booking"
          element={<BookingPage />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;