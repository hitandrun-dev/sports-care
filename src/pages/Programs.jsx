import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Programs() {
  const programs = [
    {
      title: "Rookie Camp",
      age: "Ages 5-8",
      desc: "Fun introduction to basketball fundamentals including dribbling, passing, and teamwork.",
      price: "$120 / month",
    },
    {
      title: "Junior League",
      age: "Ages 9-12",
      desc: "Skill-building program focusing on game awareness, teamwork, and competitive play.",
      price: "$160 / month",
    },
    {
      title: "Pro Prep",
      age: "Ages 13-17",
      desc: "Advanced training with elite coaching focused on preparing athletes for higher competition.",
      price: "$220 / month",
    },
    {
      title: "1-on-1 Coaching",
      age: "All Ages",
      desc: "Personalized training sessions tailored to the athlete's goals and development needs.",
      price: "$80 / session",
    },
  ];

  return (
    <>
      {/* HEADER */}
      <section className="programs-header">
        <h1>
          Our <span>Programs</span>
        </h1>
        <p>
          Discover our carefully designed training programs built to develop
          athletes of every age and skill level.
        </p>
      </section>

      {/* PROGRAM CARDS */}
      <section className="programs-grid">
        {programs.map((p, i) => (
          <motion.div
            className="program-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3>{p.title}</h3>
            <span className="age">{p.age}</span>

            <p>{p.desc}</p>

            <div className="price">{p.price}</div>

            <button className="enroll-btn">Enroll Now</button>
          </motion.div>
        ))}
      </section>

     {/* CTA WITH QR */}
<section className="program-cta">

  <div className="cta-container">

    {/* LEFT CONTENT */}
    <motion.div
      className="cta-text"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Ready to Start Your Journey?</h2>
      <p>
        Join SportsCare today and train with experienced coaches who are
        dedicated to your growth. Get instant updates and access by joining
        our WhatsApp community.
      </p>

      <button className="cta-btn">Join Academy</button>
    </motion.div>

    {/* RIGHT QR */}
    <motion.div
      className="cta-qr"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="qr-glow"></div>

      <div className="qr-card">
        <img src="/qr.jpeg" alt="QR Code" />
        <p>Scan to Join</p>
      </div>
    </motion.div>

  </div>

</section>
    </>
  );
}

export default Programs;