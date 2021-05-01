import React from 'react'

const Country = ({country}) => {
    return (
        <div className="countryCard">
                <h1 className="countryName">{country.Country}</h1>
                <img src={country.fflag} alt="country flag" style={{ width: "150px"}}/>
                <table>
                    <tbody>
                        <tr >
                            <td style={{ width: "50%"}}><span style={{ color: "white"}}><b>Deaths:</b></span></td>
                            <td><span style={{ color: "black"}}><b>{country.Deaths_1M_pop}</b></span></td>
                        </tr>
                        <tr>
                            <td><span style={{ color: "white"}}><b>Cases:</b></span></td>
                            <td><span style={{ color: "black"}}><b>{country.TotalCases}</b></span></td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default Country
