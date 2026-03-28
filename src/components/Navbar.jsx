import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">SportsCare</h2>

      {/* Desktop Nav */}
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Programs</li>
        <li>Store</li>
      </ul>

      <button className="join-btn">Join Academy</button>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >
            <p onClick={() => setMenuOpen(false)}>Home</p>
            <p onClick={() => setMenuOpen(false)}>About</p>
            <p onClick={() => setMenuOpen(false)}>Programs</p>
            <p onClick={() => setMenuOpen(false)}>Store</p>

            <button className="mobile-join">
              Join Academy
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;