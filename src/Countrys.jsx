import { useState } from "react";
import "./Countrys.css";

const Countrys = ({ country, handlevisitedCountry1 }) => {
  const { ccn3, area, name, flags, capital,languages,timezones,startOfWeek,region,population} = country;

      console.log(country);   

  const [visited, setvisited] = useState(false);

  const toggleVisited = () => {
    setvisited(!visited);
  };
  // favorit country select button
  
  const [favorit , setFavorit]=useState(false)

  const desiblecountry=()=>{
    setFavorit(!favorit);
  }

  const callfunction=()=>{
    handlevisitedCountry1(country);
    desiblecountry();

  }

  return (

    <div className="body">
      <img className="pic" src={flags.svg} alt={`${name.common} flag`} />

      <h4>Name: {name.common}</h4>
      <div className="details">
      
      <h4>languages:{languages ? Object.values(languages).slice(0,3).join(',') :"No official languages"}</h4>
      <h4>Capital: {capital ? capital[0] : "No Capital"}</h4>
      <h4>Area: {area}</h4>
      <h4>Population: {population ? (population / 1000000).toFixed(2) :'Not mention'} million</h4>
      <h4>Region: {region}</h4>
      <h4>Weekly Off Day: {startOfWeek}</h4>
      <h4>Timezone: {timezones ?timezones[0] :'No time zone'}</h4>
      <h4>CCN3: {ccn3}</h4>
       <div>    <button
        onClick={() => callfunction()} 
        className={`butt ${favorit ? "disable" : ""}`}
      >
        Faverit
      </button></div>

       <div>
       <button
        onClick={toggleVisited}
        className={` ${visited ? "visit" : "non_visited"}`}
      >
        {visited ? "Visited" : "Going"}
      </button>
       </div>



      </div>

    </div>
  );
};

export default Countrys;
