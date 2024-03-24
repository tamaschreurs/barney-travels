import React, { useState } from 'react';
import Section from './Section';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import useBlogs from '../hooks/useBlogs';
import { navigate } from 'gatsby';
import { Tooltip } from 'react-tooltip';

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
  const { countriesVisited, getPostsByCountries } = useBlogs();
  const [tooltipContent, setTooltipContent] = useState(<div></div>);

  return (
    <Section>
      <div className="geography-tooltip">
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const visited = countriesVisited.includes(geo.id);

                return (
                  <Geography
                    className="countryArea"
                    key={geo.rsmKey}
                    geography={geo}
                    style={visited ? visitedCountryStyle : {}}
                    stroke="#e5e7eb"
                    strokeWidth={0.2}
                    onMouseEnter={() => {
                      if (visited) {
                        const postCount = getPostsByCountries([geo.id]).length;
                        setTooltipContent(
                          <div className="flex flex-row gap-2 items-center">
                            <div>{geo.properties.name}</div>
                            <div className="bg-slate-700 px-1 rounded-full min-w-6 min-h-6 text-center content-center font-bold">
                              {postCount}
                            </div>
                          </div>
                        );
                      }
                    }}
                    onMouseLeave={() => {
                      setTooltipContent();
                    }}
                    onClick={() => {
                      visited
                        ? navigate(`/blog?country=${geo.id}`)
                        : console.log(geo.properties.name);
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
      <Tooltip anchorSelect=".geography-tooltip" float>
        {tooltipContent}
      </Tooltip>
    </Section>
  );
}

export default WorldMap;
