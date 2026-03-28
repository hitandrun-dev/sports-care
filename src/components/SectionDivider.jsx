import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <div className="section-divider">

      {/* Background animation */}
      <div className="divider-bg"></div>

      {/* Floating streaks */}
      <motion.span
        className="streak left"
        animate={{ x: [0, 40, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.span
        className="streak right"
        animate={{ x: [0, -40, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      {/* Center Card */}
      <motion.div
        className="divider-card"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>🏀 Fun & Fortune 🏆</h3>
        <p>Where Champions Are Made</p>
      </motion.div>

    </div>
  );
}

export default SectionDivider;