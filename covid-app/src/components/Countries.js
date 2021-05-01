import React from 'react';
import Country from "./Country";

const Countries = ({countryData, countryFlag}) => {

    //     countryData.forEach(e => {
    //     e.fflag = findFlag(e.ThreeLetterSymbol);
    // });

    // function findFlag(a) {
    //     countryFlag.find(a.flag => a.alpha3Code.toLowerCase() == e.ThreeLetterSymbol)
    // };


    countryData.slice(2,countryData.length).forEach(e => {
        e.fflag = countryFlag.find(function (a) {return a.alpha3Code.toLowerCase() === e.ThreeLetterSymbol}).flag;
    });
    
/*     function findFlag(c) {
       return countryFlag.find(function (a) {return a.alpha3Code === c});
    };
     */
    return (
        <div className="countryDiv">
            {countryData.slice(2,countryData.length).map((country) => (
                <Country key={country.id} country = {country} />
            ))}
        </div>
    )
}

export default Countries
