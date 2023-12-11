import React from 'react';
import "./countrie_component_styles.css"

function CountryComponent({countryName, flag, countryPopulation}) {
    return (
        <section className="countryTile">
            <div className="countryFlex">
                <img src={flag} alt=""/>
                <h4>{countryName}</h4>
            </div>
            <p> Has a population of {countryPopulation} people</p>
        </section>
    );
}

export default CountryComponent;