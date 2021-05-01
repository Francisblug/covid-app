import React from 'react'

const Country = ({country}) => {
    console.log(country);
    return (
        <div className="countryCard">
                <h1 className="countryName">{country.Country}</h1>
                <img src={country.fflag} alt="country flag" style={{ width: "150px"}}/>
                <table>
                    <tbody>
                        <tr>
                            <td><b>Deaths:</b></td>
                            <td>{country.Deaths_1M_pop}</td>
                        </tr>
                        <tr>
                            <td><b>Cases:</b></td>
                            <td>{country.TotalCases}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default Country
