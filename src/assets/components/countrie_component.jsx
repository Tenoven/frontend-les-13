import React from 'react';

function CountrieComponent({countryName, flag, countryPopulation}) {
    return (
        <section className="countryTile">
            <div className="countryFlex">
                <img src={flag} alt=""/>
                <h2>{countryName}</h2>
            </div>
            <p> Has a population of {countryPopulation} people</p>
        </section>
    );
}

export default CountrieComponent;