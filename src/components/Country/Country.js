import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, flags } = props.country
    return (
        <div className='country_data'>
            <img src={flags.png} alt="" />
            <div className='country_description'>
                <h4>{name.common}</h4>
                <p>population: {population}</p>
            </div>

        </div>
    );
};

export default Country;