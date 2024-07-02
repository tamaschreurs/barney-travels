import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import mapData from '../custom.geo.json';
import useBlogs from '../hooks/useBlogs';
import { navigate } from 'gatsby';
// import loadable from '@loadable/component';

import GlobeGL from 'react-globe.gl';

import '../styles/globe.css';

//Map data generated at https://geojson-maps.kyd.au/

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return [null, null];
    }
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function Globe() {
  const { countriesVisited, getPostsByCountries } = useBlogs();
  const [cursorStyle, setCursorStyle] = useState('auto');
  const [activeCountry, setActiveCountry] = useState();
  const globeEl = useRef();

  const [width, height] = useWindowSize();

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.2;
    globeEl.current.pointOfView({ lat: 30, lng: 25 });
  }, []);

  // const borders = extractBorders(mapData);
  // // drawBorders(borders, myGlobe);

  // function extractBorders(geojson) {
  //   const borders = [];
  //   geojson.features.forEach((feature) => {
  //     if (feature.geometry.type === 'Polygon') {
  //       borders.push(feature.geometry.coordinates);
  //     } else if (feature.geometry.type === 'MultiPolygon') {
  //       feature.geometry.coordinates.forEach((polygon) => {
  //         borders.push(polygon);
  //       });
  //     }
  //   });
  //   return borders;
  // }

  if (typeof window === 'undefined') {
    return <div>Windowless!</div>;
  }

  console.log('We found a window');

  return (
    <div style={{ cursor: cursorStyle }} className={'blogCountry'}>
      <GlobeGL
        ref={globeEl}
        width={width}
        height={height}
        polygonsData={mapData.features}
        polygonAltitude={0.01}
        polygonSideColor={() => 'rgba(100, 100, 100, 0.4)'}
        polygonStrokeColor={() => '#111827'}
        polygonCapColor={(pData) => {
          const countryCode = pData.properties?.iso_n3;

          if (countriesVisited.includes(countryCode)) {
            if (cursorStyle === 'pointer' && activeCountry === countryCode) {
              return '#065f46';
            }
            return '#059669';
          } else {
            return '#d1d5db';
          }
        }}
        onPolygonHover={(newP) => {
          if (
            newP !== null &&
            countriesVisited.includes(newP.properties.iso_n3)
          ) {
            setCursorStyle('pointer');
            setActiveCountry(newP.properties.iso_n3);
          } else {
            setCursorStyle('default');
          }
        }}
        onPolygonClick={(country) => {
          const properties = country.properties;
          if (properties) {
            if (countriesVisited.includes(properties.iso_n3)) {
              navigate(`/blog?country=${properties.iso_n3}`);
            }
          }
        }}
        polygonLabel={(country) => {
          const properties = country.properties;
          if (properties) {
            if (countriesVisited.includes(properties.iso_n3)) {
              const postCount = getPostsByCountries([properties.iso_n3]).length;
              return `<div class='tooltip flex flex-row gap-2 items-center'>
              <div>${country.properties.name}</div>
              <div class='bg-slate-700 px-1 rounded-full min-w-6 min-h-6 text-center content-center font-bold'>${postCount}</div>
              </div>`;
            }
          }
        }}
        atmosphereColor={'#0f172a'}
        backgroundColor={'#f1f5f9'}

        // hexPolygonsData={mapData.features}
        // hexPolygonColor={() =>
        //   `#${Math.round(Math.random() * Math.pow(2, 24))
        //     .toString(16)
        //     .padStart(6, '0')}`
        // }
        // hexPolygonResolution={4}
        // onHexPolygonHover={(polygon) => {
        //   console.log(polygon);
        // }}
        // hexPolygonMargin={0}
      />
    </div>
  );
}

export default Globe;
