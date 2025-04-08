import React from 'react';

const Country = ({ country }) => {
    console.log(country)
    return (
        <div className='border border-gray-200 rounded-md p-3'>
            <img src={country.flags.png} alt="" />
            <p>Name: {country.name.common}</p>
            <p>Independent: {country.independent ? "Free": "Not Free"}</p>
            <p>Population: {country.population}</p>
        </div>
    );
};

export default Country;