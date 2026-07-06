import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Reports from "../components/Reports";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* Reports */}
      <section id="reports">
        <Reports />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Contact */}
      <section id="contact">
        <Footer />
      </section>
    </>
  );
};

export default Home;