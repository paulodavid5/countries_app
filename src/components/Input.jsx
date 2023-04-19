import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

// import dataApi from "../data.json";

export const Input = (props) => {
  const [searchInput, setSearchInput] = useState();
  // const [data, setData] = useState([]);

  const handleOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const formattedValue =
      value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();

    setSearchInput(formattedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(searchInput);
  };

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //     handleSubmit();
  //   }
  // };

  useEffect(() => {
    props.handleInputSearched(searchInput);
  }, [searchInput, props]);

  return (
    <form className="input_search" onSubmit={handleSubmit}>
      <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
      <input
        placeholder="Search for a country..."
        onChange={handleOnChange}
        // onKeyDown={handleKeyDown}
      />
    </form>
  );
};
