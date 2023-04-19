import { useEffect } from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Select(props) {
  const [selectedRegion, setSelectedRegion] = useState();

  function handleClick(e) {
    e.preventDefault();
    setSelectedRegion(e.target.textContent);
  }

  useEffect(() => {
    props.handleRegionSelected(selectedRegion);
  }, [selectedRegion, props]);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Filter by Region
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleClick}>Africa</Dropdown.Item>
        <Dropdown.Item onClick={handleClick}>Americas</Dropdown.Item>
        <Dropdown.Item onClick={handleClick}>Asia</Dropdown.Item>
        <Dropdown.Item onClick={handleClick}>Europe</Dropdown.Item>
        <Dropdown.Item onClick={handleClick}>Oceania</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Select;
