import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-container">

        {/* TITLE */}
        <div className="hero-header">
          <p className="tag">Recreative & Rewarding</p>
          <h1>
            Train. Compete. <span>Dominate.</span>
          </h1>
          <p className="hero-sub">
            Two worlds. One vision. Elite coaching meets next-gen gaming.
          </p>
        </div>

        {/* CARDS */}
        <div className="hero-cards">

          {/* LEFT CARD - SPORTSCARE */}
          <motion.div
            className="card sportscare"
            whileHover={{ scale: 1.04 }}
          >
            <div className="card-badge">ELITE COACHING</div>

            {/* Animated Figure */}
            <motion.div
              className="figure"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🏀
            </motion.div>

            <h2 onClick={()=>{
              window.scrollTo()
            }}>SportsCare Coaching</h2>
            <p>
             
              Organised by Sunil Natarajan former Kerala Sports Council and M.G University Coach from April 2nd Onwards ;
              at sports ground,Alappuzha.
              All the participants will be rewarded by Shoes or T-shirts after this coaching Camp.
            </p>

            

            <button className="primary-btn">Start Coaching →</button>
          </motion.div>

          {/* RIGHT CARD - HIT & RUN */}
          <motion.div
            className="card hitrun"
            whileHover={{ scale: 1.04 }}
          >
            <div className="card-badge green">NEW GAME</div>

            {/* Animated Figure */}
            <motion.div
              className="figure"
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              🏃‍♂️
            </motion.div>

            <h2>Hit & Run</h2>
            <p>
              This Game is designed to recreate fun and fundamentalsto evry individual Concurrently.
             
            </p>
            <p>The Game will be played on every Saturday on SportsCare ground.The winning team will be rewarded by SportsCare. </p>
            

            <button className="secondary-btn" onClick={()=>{
              window.location.href="https://game.hitandrun.in/"
            }}>Explore Game →</button>
          </motion.div>

        </div>

        {/* PREMIUM DIVIDER */}
        <div className="hero-divider">
          <span>🏀 Play Hard</span>
          <span>🔥 Stay Driven</span>
          <span>🏆 Win Big</span>
        </div>

      </div>
    </section>
    
  );
  
}

export default Hero;