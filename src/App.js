import { useEffect, useState } from "react";
import "./App.css";
import Country from "./components/Country";
import { Input } from "./components/Input";
import { Nav } from "./components/Nav";
import Select from "./components/Select";
import "bootstrap/dist/css/bootstrap.min.css";
import dataApi from "./data.json";

function App() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState(null);
  const [regionC, setRegionC] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [countriesByRegion, setCountriesByRegion] = useState([]);

  // const [dataCountry, setDataCountry] = useState({
  //   name: "",
  //   population: 0,
  //   region: "",
  //   capital: "",
  //   flag: "",
  // });

  function handleNavButton(darkButton) {
    setMode(darkButton);
  }

  function handleCountry(searchInput) {
    setSearchCountry(searchInput);
  }

  function handleRegion(selectedRegion) {
    setRegionC(selectedRegion);
  }

  const getCountry = (searchCountry) => {
    const country = dataApi.find((item) => item.name === searchCountry);
    setData(country);
    setCountriesByRegion([]);
  };

  const getCountriesByRegion = (regionC) => {
    const countries = dataApi.filter((country) => country.region === regionC);
    setCountriesByRegion(countries);
    setData([]);
  };

  useEffect(() => {
    handleCountry();
    setSearchCountry(searchCountry);
    getCountry(searchCountry);
  }, [searchCountry]);

  useEffect(() => {
    handleRegion();
    setRegionC(regionC);
    getCountriesByRegion(regionC);
  }, [regionC]);

  useEffect(() => {
    handleNavButton();
    setMode(mode);
  }, [mode]);

  // useEffect(() => {
  //   if (data?.name) {
  //     setDataCountry({
  //       name: data.name,
  //       population: data.population,
  //       region: data.region,
  //       capital: data.capital,
  //       flag: data.flag,
  //     });
  //   }
  // }, [data]);
  // const formatNumberPopulation = (data) => {
  //   const number = data.population;
  //   const formattedPopulation = number.toLocaleString("pt-pt");
  //   return formattedPopulation;
  // };

  return (
    <div className={`App ${mode === true ? "dark_App" : "light_App"}`}>
      <Nav onClickedDarkButton={handleNavButton} />
      <div className="search_fields">
        {/* <Input onChildData={handleChildData} /> */}
        <Input handleInputSearched={handleCountry} />
        <Select handleRegionSelected={handleRegion} />
      </div>
      <div className="content">
        {countriesByRegion &&
          countriesByRegion.map((country) => (
            <Country
              key={country.name}
              class={mode === true ? "dark_card" : "light_card"}
              name={country.name}
              img={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
        {data?.name && (
          <Country
            class={mode === true ? "dark_card" : "light_card"}
            name={data.name}
            img={data.flag}
            population={data.population}
            region={data.region}
            capital={data.capital}
          />
        )}
      </div>
    </div>
  );
}

export default App;
