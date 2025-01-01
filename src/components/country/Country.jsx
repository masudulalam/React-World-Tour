import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry, handleVisitedCountriesFlag }) => {
    // console.log(country);
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'mediumseagreen' : 'black'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="Flag-Image" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            {/* Mark Visited Button */}
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <br />
            <button onClick={() => handleVisitedCountriesFlag(flags.png)}>Add Flag</button>
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {/* {visited && 'I have visited this country.'} */}
            {visited ? 'I have visited this country.' : 'I want to visit.'}
        </div>
    );
};

export default Country;