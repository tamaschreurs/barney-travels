import { useState, useEffect } from 'react';

const useCountries = (countryArray) => {
  const [countryData, setCountryData] = useState([]);

  const nameString =
    countryData &&
    countryData
      .reduce((string, country) => `${string}, ${country.name.common}`, '')
      .slice(2);

  let countryString = '';

  if (typeof countryArray === 'object' && countryArray.length > 0) {
    countryString = countryArray.reduce((string, countryCode) => {
      return string + `${countryCode},`;
    }, '&codes=');
    countryString = countryString.slice(0, -1);
  }

  const url = `https://restcountries.com/v3.1/alpha?fields=name,ccn3${countryString}`;

  useEffect(() => {
    if (!url.includes('codes')) {
      return;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);

  return { countryData, nameString };
};

export default useCountries;
