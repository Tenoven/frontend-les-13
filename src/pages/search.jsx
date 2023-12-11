import React, {useState} from 'react';
import axios from "axios";
import spinningWorld from "../assets/spinning_globe.png"
import CountryInformationComponent from "../assets/components/country_information_component.jsx";


    const Search = () => {

        const [searchResult, setSearchResult] = useState([])
        const [userInput, setUserInput] = useState('')
        let betrue = false

        function onClickHandler() {
            fetchInfo()
            setTrue()
        }

        function setTrue() {
            betrue = true
        }

        async function fetchInfo() {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${userInput}`);
                setSearchResult(response.data[0]);
            } catch (e)
        {
            console.error(e);
        }
        }

        function handleChange(e) {
            setUserInput(e.target.value.toLowerCase());
            console.log(userInput)
        }

        // function test() {
        //     console.log(searchResult)
        // }

        return (
            <>
                {/*{fetchInfo()}*/}
            <div>
                <h1>Search country information</h1>
                <img src={spinningWorld} alt=""/>
                <div>
                    <input type="text" onChange={handleChange}/>
                    <button type="button" onClick={onClickHandler}>Search</button>
                    {/*<button type="button" onClick={test}>test</button>*/}
                </div>
            </div>
        <CountryInformationComponent name={searchResult.name.common} flag={searchResult.flags.png} capital={searchResult.capital} neighbours={searchResult.borders.length} webDomain={searchResult.tld} subArea={searchResult.subregion} population={searchResult.population} boolean={betrue}/>
            </>
        );
    };

export default Search;