import React from 'react';

function CountryInformationComponent({flag, name, subArea, capital, population, neighbours, webDomain, boolean}) {

    if (boolean === true) {
    return (
        <div>
            <div>
                <img src={flag} alt="flag of ${name}"/>
                <h2>{name}</h2>
            </div>
            <hr></hr>
            <p>{name} is situated in {subArea} and the capital is {capital}. It has a population of {population} million people and it borders with {neighbours} neighboring countries
                Websites can be found on {webDomain} domain's</p>
        </div>
    );
    }
}

export default CountryInformationComponent;