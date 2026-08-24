import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  Sparkles,
  UserRound,
  Volume2,
} from "lucide-react";

import "./VoicePage.css";

const VoicePage = () => {
  const [callStarted, setCallStarted] = useState(false);
  const [listening, setListening] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const timerRef = useRef(null);

  useEffect(() => {
    if (callStarted) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [callStarted]);

  const startCall = () => {
    setCallStarted(true);
    setListening(true);
    setSeconds(0);
  };

  const endCall = () => {
    setCallStarted(false);
    setListening(false);
    clearInterval(timerRef.current);
  };

  const toggleListening = () => {
    setListening((prev) => !prev);
  };

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");

    const secs = (seconds % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${secs}`;
  };

  return (
    <main className="voice-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="voice-hero">

        <div className="voice-container">

          <div className="voice-eyebrow">
            <span />
            IVY VOICE RECEPTIONIST
          </div>

          <div className="voice-hero-grid">

            <div>

              <h1>
                Just
                <br />
                <em>talk.</em>
              </h1>

            </div>

            <div className="voice-hero-copy">

              <p>
                Meet Ivy, your AI dental receptionist.
                Ask questions, find a convenient time,
                or get help with your next appointment —
                naturally, by voice.
              </p>

              <div className="voice-hero-features">

                <div>
                  <Sparkles size={14} />
                  <span>
                    AI-powered assistance
                  </span>
                </div>

                <div>
                  <Clock3 size={14} />
                  <span>
                    Available whenever you need
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          VOICE EXPERIENCE
      ================================================= */}

      <section className="voice-section">

        <div className="voice-container">

          <div className="voice-layout">

            {/* =============================================
                LEFT INFO
            ============================================= */}

            <div className="voice-intro">

              <div className="voice-small-label">
                YOUR AI RECEPTIONIST
              </div>

              <h2>
                Meet
                <br />
                <em>Ivy.</em>
              </h2>

              <p>
                Ivy can help answer common dental
                questions and guide you through
                your appointment journey.
              </p>


              <div className="voice-capabilities">

                <div>
                  <span>01</span>

                  <div>
                    <strong>
                      Find appointments
                    </strong>

                    <small>
                      Explore available appointment
                      options.
                    </small>
                  </div>
                </div>


                <div>
                  <span>02</span>

                  <div>
                    <strong>
                      Answer questions
                    </strong>

                    <small>
                      Get quick answers about your
                      dental visit.
                    </small>
                  </div>
                </div>


                <div>
                  <span>03</span>

                  <div>
                    <strong>
                      Guide your next step
                    </strong>

                    <small>
                      Ivy helps make getting started
                      simple.
                    </small>
                  </div>
                </div>

              </div>

            </div>


            {/* =============================================
                VOICE CARD
            ============================================= */}

            <div className="voice-card">

              {/* TOP BAR */}

              <div className="voice-card-top">

                <div className="voice-agent">

                  <div className="voice-agent-avatar">
                    I
                  </div>

                  <div>
                    <strong>
                      Ivy
                    </strong>

                    <span>
                      AI Receptionist
                    </span>
                  </div>

                </div>


                <div
                  className={`voice-status ${
                    callStarted
                      ? "voice-status-live"
                      : ""
                  }`}
                >
                  <span />
                  {callStarted
                    ? "LIVE"
                    : "READY"}
                </div>

              </div>


              {/* MAIN VISUAL */}

              <div className="voice-visual">

                <div
                  className={`voice-orb ${
                    callStarted
                      ? "voice-orb-active"
                      : ""
                  } ${
                    listening
                      ? "voice-orb-listening"
                      : ""
                  }`}
                >

                  <div className="voice-orb-ring ring-one" />
                  <div className="voice-orb-ring ring-two" />
                  <div className="voice-orb-ring ring-three" />

                  <div className="voice-orb-core">

                    {callStarted ? (
                      <Volume2 size={30} />
                    ) : (
                      <Mic size={30} />
                    )}

                  </div>

                </div>


                <div className="voice-state">

                  <span>
                    {callStarted
                      ? listening
                        ? "Listening..."
                        : "Ivy is speaking..."
                      : "Ready to talk"}
                  </span>

                  <small>
                    {callStarted
                      ? formatTime()
                      : "Voice AI"}
                  </small>

                </div>

              </div>


              {/* TRANSCRIPT */}

              <div className="voice-transcript">

                <div className="voice-transcript-title">
                  <span>
                    LIVE CONVERSATION
                  </span>

                  {callStarted && (
                    <span className="voice-live-dot">
                      LIVE
                    </span>
                  )}
                </div>


                {callStarted ? (
                  <div className="voice-messages">

                    <div className="voice-message user">

                      <div className="voice-message-icon">
                        <UserRound size={13} />
                      </div>

                      <p>
                        I'd like to book a dental
                        appointment.
                      </p>

                    </div>


                    <div className="voice-message ivy">

                      <div className="voice-message-icon">
                        <Sparkles size={13} />
                      </div>

                      <p>
                        Absolutely. I can help with
                        that. What type of appointment
                        are you looking for?
                      </p>

                    </div>

                  </div>
                ) : (
                  <div className="voice-empty-message">

                    <Mic size={17} />

                    <span>
                      Start a conversation with Ivy
                    </span>

                  </div>
                )}

              </div>


              {/* CONTROLS */}

              <div className="voice-controls">

                {!callStarted ? (

                  <button
                    type="button"
                    className="voice-start-button"
                    onClick={startCall}
                  >
                    <span>
                      <Phone size={16} />
                    </span>

                    Start Voice Conversation

                    <ArrowUpRight size={15} />

                  </button>

                ) : (

                  <>

                    <button
                      type="button"
                      className={`voice-mic-button ${
                        listening
                          ? "voice-mic-active"
                          : ""
                      }`}
                      onClick={toggleListening}
                      aria-label="Toggle microphone"
                    >
                      {listening ? (
                        <Mic size={19} />
                      ) : (
                        <MicOff size={19} />
                      )}
                    </button>


                    <button
                      type="button"
                      className="voice-end-button"
                      onClick={endCall}
                    >
                      <PhoneOff size={17} />

                      End conversation
                    </button>

                  </>

                )}

              </div>


              <div className="voice-security">

                <Check size={12} />

                <span>
                  Your conversation is private and secure.
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          APPOINTMENT PREVIEW
      ================================================= */}

      <section className="voice-appointment">

        <div className="voice-container">

          <div className="voice-appointment-card">

            <div className="voice-appointment-icon">
              <CalendarDays size={21} />
            </div>

            <div>

              <span>
                IVY CAN HELP YOU
              </span>

              <h2>
                Go from conversation
                <br />
                to appointment.
              </h2>

              <p>
                When you're ready, Ivy can guide
                you toward the right appointment
                and next step.
              </p>

            </div>

            <a href="/booking">

              Book online instead

              <span>
                <ArrowUpRight size={15} />
              </span>

            </a>

          </div>

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="voice-bottom-cta">

        <div className="voice-container">

          <div className="voice-bottom-inner">

            <div>

              <span>
                NEED A LITTLE HELP?
              </span>

              <h2>
                Ivy is here
                <br />
                to <em>listen.</em>
              </h2>

            </div>

            <a href="/booking">
              Book an Appointment

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

export default VoicePage;