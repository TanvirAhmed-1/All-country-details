import { useState, useEffect } from "react";
import "./App.css";
import Countrys from "./Countrys";
import "./Body.css";

function App() {
  const [Country, setCountry] = useState([]);

  const [visited, setvisited] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  function handlevisitedCountry2(data) {
    const newvisitedcontry = [...visited, data];
    setvisited(newvisitedcontry);
  }

  return (
    <>
      <h1>All Country Details</h1>
      <h2>Total Countries: {Country.length}</h2>
      <div>
        <h2>Total Visited Countries: {visited.length}</h2>
        <h3>Choose your favorite Country</h3>
         <div >
         <ul className="img-grid" >
          {visited.map((v, index) => (
            <li key={index}>{v.name.common} <br></br>
             <img className="li-img" src={v.flags.svg} alt="" srcset="" />
            </li>
          ))}
        </ul>
         </div>
      </div>

      <div className="tanvir">
        {Country.map(country => (
          <Countrys
            key={country.cca3} 
            handlevisitedCountry1={handlevisitedCountry2}
            country={country}
          />
        ))}
      </div>
    </>
  );
}

export default App;
