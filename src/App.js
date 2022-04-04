import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Proficiencies from "./Components/Proficiencies";
import RecentWork from "./Components/RecentWork";
// import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Header />
      <RecentWork />
      <About />
      <Proficiencies />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
