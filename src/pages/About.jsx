import { motion } from "framer-motion";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      {/* ===== HEADER SECTION ===== */}
      <section className="about-header">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span>SportsCare</span>
        </motion.h1>

        <p>
          We are more than just a sports academy. We are a community
          dedicated to developing athletes both on and off the court.
        </p>
      </section>

      {/* ===== PHILOSOPHY SECTION ===== */}
      <section className="about-main">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc"
            alt="academy"
          />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Philosophy</h2>

          <p>
            At SportsCare, we believe that sports are the ultimate
            metaphor for life. The discipline, teamwork, and resilience
            required to succeed on the court translate directly to success
            in everyday life.
          </p>

          <p>
            Founded in 2020, we started primarily as a basketball academy.
            Due to overwhelming demand and our proven coaching methodology,
            we are actively expanding to include multi-sport programs,
            ensuring every athlete finds their passion.
          </p>

          <div className="mission-vision">
            <div>
              <h4>Mission</h4>
              <p>
                To empower youth through elite sports coaching and character
                development.
              </p>
            </div>

            <div>
              <h4>Vision</h4>
              <p>
                To become the premier multi-sport training facility in
                the region.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    
    

      
    </>
  );
}

export default About;