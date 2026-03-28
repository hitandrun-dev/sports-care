import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Announcements from "./pages/Announcements";
import Store from "./pages/Store";
import Join from "./pages/Join";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="programs">
        <Programs />
      </section>

      <section id="announcements">
        <Announcements />
      </section>

      <section id="store">
        <Store />
      </section>

      <section id="join">
        <Join />
      </section>

      <Footer />
    </>
  );
}

export default App;