import React, { useEffect, useRef } from 'react';
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world.js';

const WorldMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = new jsVectorMap({
      map: 'world',
      selector: mapContainer.current,
      mapBgColor: '#F7F8F9',
      zoomOnScroll: false,
      zoomButtons: false,
      markers: [
        { name: 'Greenland', coords: [72, -42] },
        { name: 'Canada', coords: [56.1304, -106.3468] },
        { name: 'Brazil', coords: [-14.235, -51.9253] },
        { name: 'Egypt', coords: [26.8206, 30.8025] },
        { name: 'Russia', coords: [61, 105] },
        { name: 'China', coords: [35.8617, 104.1954] },
        { name: 'United States', coords: [37.0902, -95.7129] },
        { name: 'Norway', coords: [60.472024, 8.468946] },
        { name: 'Ukraine', coords: [48.379433, 31.16558] },
      ],
      lines: [
        { from: 'Canada', to: 'Egypt' },
        { from: 'Russia', to: 'Egypt' },
        { from: 'Greenland', to: 'Egypt' },
        { from: 'Brazil', to: 'Egypt' },
        { from: 'United States', to: 'Egypt' },
        { from: 'China', to: 'Egypt' },
        { from: 'Norway', to: 'Egypt' },
        { from: 'Ukraine', to: 'Egypt' },
      ],
      labels: {
        markers: {
          render: (marker) => marker.name,
        },
      },
      lineStyle: {
        animation: true,
        strokeDasharray: '6 3 6',
      },
      regionStyle: {
        initial: {
          fill: 'rgba(169,183,197, 0.3)',
          fillOpacity: 1,
        },
      },
      markerStyle: {
        initial: {
          r: 5,
          fill: '#22c55e',
          fillOpacity: 1,
          stroke: '#FFF',
          strokeWidth: 1,
          strokeOpacity: 0.65,
        },
        hover: {
          stroke: 'black',
          cursor: 'pointer',
          strokeWidth: 2,
        },
        selected: {
          fill: 'blue',
        },
        selectedHover: {
          fill: 'red',
        },
      },
    });

    // Cleanup on unmount
    return () => {
      map.destroy();
    };
  }, []);

  return (
    <div className="col-lg-8">
      <div id="map_2" ref={mapContainer} style={{ height: '320px' }}></div>
    </div>
  );
};

export default WorldMap;