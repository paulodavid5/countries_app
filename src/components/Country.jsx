import React from "react";

function Country(props) {
  return (
    <div
      className={`country_card ${props.class}`}
      onClick={() => props.onSelectCountry(props.country)}
    >
      <div className="country_card_img">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="country_card_details">
        <h1>{props.name}</h1>
        <div>
          <h2>
            Population: <span>{props.population}</span>
          </h2>
          <h2>
            Region: <span>{props.region}</span>
          </h2>
          <h2>
            Capital: <span>{props.capital}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Country;
