import Destination from "../Components/Destination";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";
import HomeImg from "../assets/12.jpg"
import Footer from "../Components/Footer"


function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"

      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}
export default Home;
