import React, { useEffect, useRef, useState } from "react";
import "../../src/App.css";
import mapboxgl from "mapbox-gl"; // Importa mapboxgl
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = 'pk.eyJ1IjoiaG9zcGVkYWplYmV0YW5pYSIsImEiOiJjbG42OXZncXcwOTgyMmlwNXo4OTAyaG54In0.LrEpBd3umk6dBDMka2QGJg';

const Map = () => {
    
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-76.204680); 
  const [lat, setLat] = useState(-13.711405);
  const [zoom, setZoom] = useState(17);

  const resetMap = () => {
    map.current.resetNorth();
    map.current.setPitch(0);
    map.current.flyTo({
      center: [lng, lat],
      zoom: zoom,
    });

  };
  
  useEffect(() => {
    if (map.current) return; 
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v10",
        center: [lng, lat],
        zoom: zoom,
        cooperativeGestures: true,
        doubleClickZoom: false,
    });

  

    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);
    
  });
  
  
  return (
    <>
        <div ref={mapContainer} className="map-container" />
        <button onClick={resetMap}>Restablecer Mapa</button>
    </>
  );
};

export default Map;
