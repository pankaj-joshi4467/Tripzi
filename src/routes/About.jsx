import Aboutus from "../Components/Aboutus";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/night.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <Aboutus/>


      <Footer/>
    </>
  );
}
export default About;
