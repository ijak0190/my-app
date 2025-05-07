import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <WhyUs />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="cta">
          <CTA />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
