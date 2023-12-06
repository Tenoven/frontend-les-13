import './App.css';
import axios from 'axios';
import CountryComponent from "./assets/components/countrie_component.jsx";
import worldMap from "./assets/world_map.png";
import {useState} from "react";
import {sort} from "./assets/helpers/sort.jsx";

function App() {


    const [countries, setCountries] = useState([])
    sort(countries)

    async function fetchInfo() {
        try {
            const result = await axios.get('https://restcountries.com/v3.1/all');
            setCountries(result.data);
        } catch (e) {
            console.error(e);
        }
    }




    return (
        <>
            <img src={worldMap} alt="map of the world"/>
            <h2>World Regions</h2>
            <button type="button" onClick={fetchInfo}>Get info</button>
            <ul className="countryList">
                {countries.map((country) => {
                    return <li key={country.name["common"]} className="listItem">
                        <div className="flagNameTile">
                            <img src={country.flags["png"]} alt="flag of the country" className="flagImage"/>
                            <p className={country.region.toLowerCase()}>{country.name["common"]}</p>
                        </div>
                        <p>Has a population of {country.population} people</p>
                    </li>

                })}
            </ul>
        </>
    )
}

export default App
