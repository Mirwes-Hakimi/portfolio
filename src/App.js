import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeSection from './components/MarqueeSection';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#07070e', color: '#ffffff', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <MarqueeSection />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
