import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/10.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Exploring Indonesia is a vibrant tapestry of culture, nature, and adventure. From the bustling streets of Jakarta to the serene rice terraces of Bali, Indonesia captivates with its diversity. The scent of spices wafts through colorful markets, while ancient temples like Borobudur and Prambanan stand as testaments to centuries of rich history"
        
        />

<TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Journeying through Malaysia is an enchanting experience, where modernity meets tradition in a harmonious blend. Kuala Lumpur's skyline, dominated by the iconic Petronas Twin Towers, is a testament to the country's rapid development. Yet, just a stone's throw away, the historical streets of Georgetown in Penang and Melaka showcase Malaysia's rich colonial heritage and vibrant street art. The country is a paradise for nature lovers, with lush rainforests in Taman Negara, pristine beaches in Langkawi, and the unique biodiversity of Borneo"
        
        />

<TripData
          image={Trip3}
          heading="Trip in France"
          text="France, a country synonymous with romance and elegance, offers an enchanting blend of culture, history, and natural beauty. Paris, the City of Light, dazzles with iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Beyond the capital, the rolling vineyards of Bordeaux and Burgundy invite wine enthusiasts to savor world-renowned vintages. The charming countryside of Provence, with its lavender fields and medieval villages, contrasts with the glamorous French Riviera, where azure waters and luxurious resorts beckon"
        
        />
      </div>
    </div>
  );
}
export default Trip;
