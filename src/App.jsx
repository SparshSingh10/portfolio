import Clients from "./sections/Clients";
import Contact from './sections/Contact';
import Experience from "./sections/Experience";

import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Project from './sections/Project';

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      {/* <Hero /> */}
      {/* <About /> */}
      <Project />
      <Clients />
      <Contact />
      <Footer />
      <Experience />
    </main>
  )
}
export default App