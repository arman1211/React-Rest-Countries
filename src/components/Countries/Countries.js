import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')



    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const regions = ['asia', 'europe', 'ocenia', 'africa', 'americas']

    const handleCountryChange = e => {
        setSearch(e.target.value)
    }
    const handleRegionChange = e => {
        setSearch(e.target.value)
    }
    const searchedCountries = countries.filter(cntry => cntry.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase()))


    const searchedRegion = countries.filter(cntry => cntry.region.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <div>
            <h2>All countries details</h2>
            <p>Total Countries: {countries.length}</p>
            <input
                className='search'
                placeholder='Enter country name'
                type="text"
                onChange={handleCountryChange}
            />
            <input
                className='search'
                placeholder='Enter Region'
                type="text"
                onChange={handleRegionChange}
            />

            {
                searchedRegion.length === 0 || <h3>Total country in {search} is {searchedRegion.length}</h3>
            }
            {/* {
                regions.map(region => {
                    region === search ?
                        <><h3>Total country in {search} is {searchedRegion.length}</h3></>
                        :
                        <><h3>{search} is not a Region</h3></>
                })
            } */}

            <div className='country'>
                {
                    searchedCountries.map(country => <Country
                        country={country}


                    ></Country>)
                }
                {

                    searchedRegion.map(country => <Country
                        country={country}


                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;