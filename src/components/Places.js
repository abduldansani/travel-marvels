import Place from "./Place";
import placesData from "../destinations";

export default function Places() {
    return(
      <section className="places">
        {placesData.map(place => (
          <Place 
            key={place.id}
            name={place.name}
            location={place.location}
            category={place.category}
            description={place.description}
            imageUrl={place.imageUrl}
          />
        ))}
      </section>
    );
  }