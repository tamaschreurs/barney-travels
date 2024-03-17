import React from 'react';
import Section from './Section';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import useBlogs from '../hooks/useBlogs';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const visitedCountryStyle = {
  default: {
    fill: '#059669',
  },
  hover: {
    fill: '#065f46',
    cursor: 'pointer',
  },
  pressed: {
    fill: '#065f46',
    cursor: 'pointer',
  },
};

function WorldMap() {
  const { countriesVisited } = useBlogs();

  return (
    <Section>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                className="countryArea"
                key={geo.rsmKey}
                geography={geo}
                style={
                  countriesVisited.includes(geo.id) ? visitedCountryStyle : {}
                }
                stroke="#e5e7eb"
                strokeWidth={0.2}
                onClick={() => {
                  console.log(geo.properties.name);
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </Section>
  );
}

export default WorldMap;
