import 'mapbox-gl/dist/mapbox-gl.css';
import { React, useState, useEffect, useRef, useCallback } from "react";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";
import '../../../assets/scss/mapbox.scss';

//component

export const MapboxFriendlyPC = (data) => {
  console.log(data);
  const [searchResultLayer, setSearchResult] = useState(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [viewport, setViewPort] = useState({
    latitude: 21.0281908,
    longitude: 105.854319503897,
    zoom: 10,
  });


  return (
    <div style={{width: '750px', height: '500px', display: "block"}}>
      <ReactMapGL
        mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
        initialViewState={viewport}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <GeolocateControl
          poisition="top-left"
          trackUserLocation
          onGeolocate={(e) =>
            dispatchEvent({
              payload: e.coords.longitude,
              lat: e.coords.latitude,
            })
          }
        />
        {!!data.locationFriendlyPC &&
          data.locationFriendlyPC.map((item) => (
            <Marker
              key={item.id}
              longitude={item.geometry.coordinates[0]}
              latitude={item.geometry.coordinates[1]}
              anchor="bottom"
            >
              <img
                style={{ width: "48px", height: "48px" }}
                src="https://i.imgur.com/SBuNpAm.jpg"
              />
            </Marker>
          ))}
      </ReactMapGL>
    </div>
  );
};

export default MapboxFriendlyPC;
