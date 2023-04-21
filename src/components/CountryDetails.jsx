import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

function CountryDetails(props) {
  const [clickBack, setClickBack] = useState(false);

  const handleBackButton = () => {
    setClickBack(true);
  };

  useEffect(() => {
    props.handleBackButtonClick(clickBack);
  }, [clickBack, props]);

  return (
    <section className="countryDetails">
      <div className="countryDetails_button">
        <button onClick={handleBackButton}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
      </div>
      <div className="countryDetails_content">
        <div>
          <img src={props.image} alt={props.name} />
        </div>
        <div>
          <div>
            <h1>{props.name}</h1>
          </div>
          <div>
            <div>
              <p>
                Native Name: <span>{props.native}</span>
              </p>
              <p>
                Population: <span>{props.population}</span>
              </p>
              <p>
                Region: <span>{props.region}</span>
              </p>
              <p>
                Sub Region: <span>{props.subRegion}</span>
              </p>
              <p>
                Capital: <span>{props.capital}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <span>{props.domain}</span>
              </p>
              <p>
                Currencies: <span>{props.currencies}</span>
              </p>
              <p>
                Languages: <span>{props.language}</span>
              </p>
            </div>
          </div>
          <div className="border_container">
            <h2>Border Countries:</h2>
            <h3 className="borders">{props.border}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDetails;
