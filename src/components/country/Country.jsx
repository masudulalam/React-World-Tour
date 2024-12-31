import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    // console.log(country);
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(true);
    }

    return (
        <div className="country">
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="Flag-Image" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={handleVisited}>Visited</button>
            {/* {visited && 'I have visited this country.'} */}
            {visited ? 'I have visited this country.' : 'I want to visit.'}
        </div>
    );
};

export default Country;