import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Announcements() {
  const announcements = [
    {
      month: "JUNE",
      day: "15",
      title: "Summer League Draft Day",
      time: "10:00 AM - 2:00 PM",
      location: "Main Indoor Arena",
      desc: "Get ready for the biggest event of the summer! All registered Pro Prep and Junior League players must attend the draft combine. Coaches will evaluate skills for team placements.",
      color: "orange",
      tag: "NEW"
    },
    {
      month: "AUGUST",
      day: "1",
      title: "New Multi-Sport Facility Opening",
      time: "Grand Opening",
      location: "West Wing Extension",
      desc: "We are thrilled to announce the completion of our new multi-sport wing! The facility will house two tennis courts and a full-size indoor volleyball court.",
      color: "blue",
      tag: "NEW"
    },
    {
      month: "MAY",
      day: "25",
      title: "Guest Coach: Pro Player Visit",
      time: "4:00 PM - 6:00 PM",
      location: "Main Court",
      desc: "A special guest from the national league will be visiting our academy to share insights, run drills, and sign autographs.",
      color: "green",
      tag: ""
    }
  ];

  return (
    <>
      {/* HEADER */}
      <section className="ann-header">

        <div>
          <h1>
            Latest <span>Updates</span>
          </h1>

          <p>
            Stay informed with the latest news, schedules, and events at
            SportsCare Academy.
          </p>
        </div>

        <button className="subscribe-btn">
          🔔 Subscribe to Alerts
        </button>

      </section>

      {/* ANNOUNCEMENTS LIST */}
      <section className="ann-list">

        {announcements.map((a, i) => (
          <motion.div
            key={i}
            className={`announcement-card ${a.color}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >

            <div className="date">

              <span className="month">{a.month}</span>
              <span className="day">{a.day}</span>

            </div>

            <div className="ann-content">

              <div className="title-row">

                <h3>{a.title}</h3>

                {a.tag && <span className="new-tag">{a.tag}</span>}

              </div>

              <div className="meta">

                <span>⏰ {a.time}</span>
                <span>📍 {a.location}</span>

              </div>

              <p>{a.desc}</p>

            </div>

          </motion.div>
        ))}

      </section>

     
    </>
  );
}

export default Announcements;