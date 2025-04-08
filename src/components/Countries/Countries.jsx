import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);
    // console.log(countries)
    return (
        <div>
            <h1>Total Countries : {countries.length}</h1>
            <div className='grid grid-cols-4 gap-2'>
            {
                countries.map((country) => <Country key={country.cca2} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;