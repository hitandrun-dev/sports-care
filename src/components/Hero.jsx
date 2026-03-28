import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Elite Sports Coaching</h1>
        <p>Train. Recover. Perform at your best.</p>
        <button className="primary-btn">Get Started</button>
      </motion.div>
    </section>
  );
}

export default Hero;