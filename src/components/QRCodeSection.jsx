import { motion } from "framer-motion";

function QRCodeSection() {
  return (
    <section className="qr-section">

      {/* Glow Background */}
      <div className="qr-bg"></div>

      {/* Content */}
      <div className="qr-container">

        {/* LEFT TEXT */}
        <motion.div
          className="qr-text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Join the Community</h2>
          <p>
            Scan the QR code to join our WhatsApp group and stay updated with
            coaching sessions, events, and exclusive opportunities.
          </p>

          <div className="qr-features">
            <span>🏀 Live Updates</span>
            <span>🔥 Events & Matches</span>
            <span>🏆 Exclusive Access</span>
          </div>
        </motion.div>

        {/* RIGHT QR */}
        <motion.div
          className="qr-box"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="qr-glow"></div>

          <img
            src="qr.png"
            alt="QR Code"
          />

          <p className="scan-text">Scan to Join</p>
        </motion.div>

      </div>
    </section>
  );
}

export default QRCodeSection;