import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Proficiencies from "./Components/Proficiencies";
import RecentWork from "./Components/RecentWork";
import Writing from "./Components/Writing";
// import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="scroll-smooth bg-white text-black">

      <Navbar />

      {/* Add top padding to prevent navbar overlap */}
      <main className="pt-24">

        <Header />
        <RecentWork />
        <About />
        <Writing />
        <Proficiencies />
        {/* <Testimonials /> */}
        <Contact />

      </main>

      <Footer />

    </div>
  );
}

export default App;
