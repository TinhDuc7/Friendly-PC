import React, { useEffect, useState } from "react";
import { locationFriendly } from "../../../api/main"
import "@assets/scss/mapbox.scss";

export const LocationDetail = () => {
  const [locationList, setLocationList] = useState();

  useEffect(() => {
    const response = locationFriendly();
    setLocationList(response.features)
  }, [])

  return (
    <>
      <div class="father__map">
        <div class="map_search">
          <div class="open__list_branch">
            <i class="fa-sharp fa-solid fa-circle-caret-right btn__open-listBranch"></i>
          </div>
          <div class="list_branch">
            <i class="fa-sharp fa-solid fa-circle-caret-left btn__close-listBranch"></i>
            <div class="card-body card__heading-font">
              <h5 class="card-title branch__heading-font">FriendlyPC</h5>
            </div>
            <div class="leaderboard" id="listBranchMap"></div>
          </div>
        </div>
        <div id="map"></div>
        <div class="branch__Info-detail">
          {
           !!locationList && locationList.map(location => (
              <div class="leaderboard__branch"><span class="leaderboard__branch-name">{location.properties.name}</span></div>
            ))
          }
        </div>
      </div>
      <div/>
    </>
  );
};

export default LocationDetail;
