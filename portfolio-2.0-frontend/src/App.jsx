import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import './App.css'
import Skills from "./Component/Skills/Skills";
import ContactMe from "./Component/ContactMe/ContactMe";

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <Skills/>
        <ContactMe/>
      </div>
    </>
  );
};

export default App;