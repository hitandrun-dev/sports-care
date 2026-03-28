import { motion } from "framer-motion";

function WhyChoose() {
  return (
    <section className="why">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Us?
      </motion.h2>

      <p className="why-sub">
        We don't just teach the game; we build character, discipline,
        and physical excellence.
      </p>

      <div className="cards">
        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <h3>Elite Coaching</h3>
          <p>
            Learn from former professionals and certified coaches
            who understand what it takes to succeed.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <h3>Small Group Focus</h3>
          <p>
            Low coach-to-player ratio ensures personalized
            attention and rapid development.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <h3>Premium Facilities</h3>
          <p>
            Train on professional-grade hardwood courts
            with state-of-the-art equipment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChoose;