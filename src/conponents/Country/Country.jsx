import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const { capital, population, name, flags } = props.country
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>

        </div>
    );
};

export default Country;