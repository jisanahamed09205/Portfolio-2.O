import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import './App.css'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
      </div>
    </>
  );
};

export default App;