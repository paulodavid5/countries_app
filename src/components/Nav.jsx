import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

export const Nav = (props) => {
  const [darkButton, setDarkButton] = useState(false);

  const handleDarkButton = (e) => {
    e.preventDefault();
    setDarkButton(!darkButton);

    if (!darkButton) {
      document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
    } else {
      document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
    }
  };

  useEffect(() => {
    props.onClickedDarkButton(darkButton);
  }, [darkButton, props]);

  return (
    <div className={`navbar ${darkButton === true ? "dark" : "light"}`}>
      <h2>Where in the world?</h2>
      <div>
        {darkButton === true ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
        <button onClick={handleDarkButton}>
          {darkButton === true ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};
