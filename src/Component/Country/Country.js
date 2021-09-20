import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flag, region, capital, area } = props.country
    return (
        <div className='country'>
            <h1>Name: {name}</h1>
            <img src={flag} alt="" />
            <h3>Region: {region}</h3>
            <h3>Capital: {capital}</h3>
            <h5>Area: {area}</h5>
        </div>
    );
};

export default Country;