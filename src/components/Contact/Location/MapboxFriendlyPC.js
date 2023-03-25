import "mapbox-gl/dist/mapbox-gl.css";
import { React, useState, useEffect, useRef, useCallback } from "react";
import ReactMapGL, { GeolocateControl, Marker, Popup } from "react-map-gl";
import "../../../assets/scss/mapbox.scss";

//component

export const MapboxFriendlyPC = (data) => {
  const [searchResultLayer, setSearchResult] = useState(null);
  const [pointDetail, setPointDetail] = useState(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const mapRef = useRef(null)
  const [viewport, setViewPort] = useState({
    latitude: 21.0281908,
    longitude: 105.854319503897,
    zoom: 10,
  });

  const getElementDetail = document.getElementById("Point_Detail");
  const handleClickPoint = (point) => {
    getElementDetail.innerHTML = `
    <div class="branch__detail animation__open__branch__detail">
    <div class="branch__img"></div>
    <div class="branch__detail-content">
      <div class="branch__info-location">
        <span class="info-location-NameBranch">${point.properties.name}</span>
        <div class="info__underline"></div>
        <h2 class="info-location-headingFont">Địa chỉ</h2>
        <p class="info-location-paragFont">${point.properties.text}</p>
      </div>
      <div class="info__underline"></div>
      <div class="branch__info-hotline">
        <h2 class="info-location-headingFont">Hotline</h2>
        <p class="info-location-paragFont">${point.properties.hotline}</p>
      </div>
    </div>
    <i id="test" class="fa-sharp fa-solid fa-circle-xmark btn__close-DetailBranch"></i>
  </div>
  `;
  };

  return (
    <div className="MapboxFriendlyPC">
      <div className="mapOffice">
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
            data.locationFriendlyPC.map((item, index) => (
              <>
                <Marker
                  ref={mapRef}
                  key={index}
                  longitude={item.geometry.coordinates[0]}
                  latitude={item.geometry.coordinates[1]}
                  anchor="bottom"
                  onClick={() => handleClickPoint(item)}
                >
                  <img
                    style={{ width: "48px", height: "48px" }}
                    src="https://i.imgur.com/SBuNpAm.jpg"
                  />
                </Marker>
              </>
            ))}
        </ReactMapGL>
      </div>
      <div className="Point_Detail" id="Point_Detail"></div>
    </div>
  );
};

export default MapboxFriendlyPC;
