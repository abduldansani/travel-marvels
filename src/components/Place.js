import { useState } from "react";

export default function Place({ name, location, category, description, imageUrl }) {
  const [showDetails, setShowDetails] = useState(false);
    return(
      <div className="place-container">
        <img src={imageUrl} alt={name} className="place-image"/>
        <div className="place-info">
          <div className="place-name-category">
            <h2>{name}</h2>
            <p className={`category ${category.toLowerCase()}`}>{category}</p>
          </div>
          <p>&#128205; <i>{location}</i></p>
          {showDetails && <p className="place-description">{description}</p>}
          <button className={showDetails ? "hide-button" : "show-button"} onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Hide Details" : "Show details"}</button>
        </div>
      </div>
    );
}