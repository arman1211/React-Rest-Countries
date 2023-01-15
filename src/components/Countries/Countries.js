import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>All countries details</h2>
            <p>Total Countries: {countries.length}</p>
            <div className='country'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;