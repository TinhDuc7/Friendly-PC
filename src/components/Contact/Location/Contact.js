import React, { useState, useCallback, useEffect } from "react";
import { locationFriendly } from "../../../api/main";
import MapboxFriendlyPC from "./MapboxFriendlyPC";

export const Contact = () => {
  const [locationFriendlyPC, setLocationFriendlyPC] = useState(null);

  const loadLociton = useCallback(async (endPointAPI) => {
    try {
      const response = await locationFriendly(endPointAPI);
      // console.log(response.data.features.length)
      setLocationFriendlyPC(response.data.features);
    } catch (error) {
        console.log(error);
    }
  }, [locationFriendly]);

  useEffect(()=> {
    loadLociton('location');
  }, [loadLociton])

  return (
    <>
      {!!locationFriendlyPC && locationFriendlyPC.length > 0 && (<MapboxFriendlyPC locationFriendlyPC={locationFriendlyPC} />)}
    </>
    );
};
