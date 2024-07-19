import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import Mountain5 from "../assets/ram1.jpg";
import Mountain6 from "../assets/ram2.jpg";
import Mountain7 from "../assets/london1.jpg";
import Mountain8 from "../assets/london2.jpg";

import "./Destination.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destination</h1>
      <p>
        Our planet has so many beautiful places, but these are our favorites.
      </p>
      <DestinationData className="first-des"
        heading="Taal volcano,Bantangas"
        text=" Taal Volcano, located in Batangas, Philippines, is a renowned
            tourist destination known for its picturesque crater lake and unique
            geological features. Situated about 50 km south of Manila, it is
            accessible for day trips. Visitors can enjoy boat rides across Taal
            Lake and hike to the crater rim for breathtaking views. Guided tours
            are recommended for safety and to learn about the volcano's history.
            With nearby attractions like Tagaytay City offering accommodations
            and dining, Taal Volcano provides a memorable experience of natural
            beauty and geological wonder."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData className="first-des-reverse"
        heading="Mt. Dadguldul,Bantangas"
        text=" Mt. Daguldol in Batangas offers a breathtaking destination for nature enthusiasts and adventure seekers alike. Nestled along the coast, this picturesque mountain boasts stunning panoramic views of the Verde Island Passage and the surrounding lush landscapes. Hiking trails wind through verdant forests and rocky terrain, leading to the summit where visitors are rewarded with a sweeping vista of the sea and neighboring islands. Mt. Daguldol's pristine beaches invite relaxation after a challenging hike, making it an ideal spot for both adventure and leisure."
        img1={Mountain3}
        img2={Mountain4}
      />


<DestinationData className="first-des"
        heading="Ayodhya,India"
        text="Ayodhya, India, is a city steeped in history and spirituality, drawing pilgrims and tourists from around the globe. Known as the birthplace of Lord Rama, this sacred city is dotted with ancient temples, ghats, and historical sites that offer a deep dive into India's rich cultural and religious heritage. The iconic Ram Janmabhoomi temple, Hanuman Garhi, and Kanak Bhawan are just a few highlights that captivate visitors with their architectural splendor and spiritual significance. Besides its religious allure, Ayodhya also offers tranquil boat rides on the serene Sarayu River, allowing travelers to soak in the peaceful ambiance"
        img1={Mountain5}
        img2={Mountain6}
      />
      <DestinationData className="first-des-reverse"
        heading="London,United Kingdom"
        text=" London, the vibrant capital of the United Kingdom, is a city that seamlessly blends rich history with modern dynamism. Famous for its iconic landmarks like the Tower of London, Buckingham Palace, and the Houses of Parliament, London offers a plethora of historical and cultural attractions. Visitors can immerse themselves in world-class museums such as the British Museum and the Natural History Museum, stroll through the picturesque Hyde Park, or enjoy a breathtaking view of the city from the London Eye. The city's diverse neighborhoods, from the trendy streets of Shoreditch to the upscale avenues of Kensington, provide a unique cultural mosaic, reflecting London's cosmopolitan character. Renowned for its theater scene, the West End hosts a variety of captivating shows and musicals, while the culinary landscape offers an array of global cuisines."
        img1={Mountain7}
        img2={Mountain8}
      />
    </div>
  );
};
export default Destination;
