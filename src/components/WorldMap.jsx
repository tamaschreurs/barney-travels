import React from 'react';
import Section from './Section';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

function WorldMap() {
  return (
    <Section>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
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
