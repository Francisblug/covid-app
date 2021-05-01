import './App.css';
import React, {useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Countries from "./components/Countries";

function App() {
const [countryData, setCountryData] = useState([]);
const [countryFlag, setCountryFlag] = useState([])

  useEffect(() => {
    getCountryData();
    getCountryFlag();
    // eslint-disable-next-line
  }, []);

const getCountryFlag = async () => {
  const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
  //console.log(res.data);
  setCountryFlag(res.data);
};
const getCountryData = () => {
  var options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
    headers: {
      'x-rapidapi-key': '65f57ba2c9msh95d8be5b3c8abdbp18cb81jsn742df7b6fb3f',
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    //console.log(response.data);
    setCountryData(response.data);
  }).catch(function (error) {
    console.error(error);
});

};

  
  return (
    <div className="App">
      <Navbar />
      <Countries countryData={countryData} countryFlag = {countryFlag}/>
    </div>
  );
}

export default App;
