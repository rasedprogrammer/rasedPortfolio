import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Qualification from "./components/Qualification/Qualification";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Testimonials />
    </>
  );
};

export default App;
