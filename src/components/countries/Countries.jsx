import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    // console.log(countries);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedCountriesFlag, setVisitedCountriesFlag] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        // console.log('add this to your visited country.');
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedCountriesFlag = flag => {
        const newVisitedCountriesFlag = [...visitedCountriesFlag, flag];
        setVisitedCountriesFlag(newVisitedCountriesFlag);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited country */}
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ol>
                   {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                   } 
                </ol>
            </div>

            {/* Display flags */}
            <div className="flag-container">
                {
                    visitedCountriesFlag.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            {/* Display country */}
            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3} 
                        handleVisitedCountry={handleVisitedCountry} 
                        handleVisitedCountriesFlag={handleVisitedCountriesFlag}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;