import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import './App.css'
import Skills from "./Component/Skills/Skills";

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <Skills/>
      </div>
    </>
  );
};

export default App;