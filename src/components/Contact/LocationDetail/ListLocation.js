import { Card } from "@mui/material";

import React from "react";
import "../../../assets/scss/mapbox.scss";

export const ListLocation = (data) => {
  return (
    <>
      <div className="branch">
        <h5>Danh sách cơ sở</h5>
        <Card sx={{ overflow: "inherit", maxHeight: 300 }}>
          <div className="branch__Info-detail">
            {!!data.locationFriendlyPC &&
              data.locationFriendlyPC.map((item, index) => (
                <div className="leaderboard__branch" key={index}>
                  <span className="leaderboard__branch-name">
                    {item.properties.name}
                  </span>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </>
  );
};

export default ListLocation;
