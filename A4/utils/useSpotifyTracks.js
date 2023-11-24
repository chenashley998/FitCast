import { useState, useEffect } from "react";
import getEnv from "./env";

import { getMyTopTracks, getAlbumTracks } from "./apiOptions";

const { ALBUM_ID } = getEnv();

// const getTracks = async (token) => { //THIS WORKS !!!
//   if (token == null) {
//     return null;
//   }
//   console.log("hiiii");
//   try {
//     const tracks = await getMyTopTracks(token);
//     // console.log("tracks: ", JSON.stringify(tracks));

//     console.log("tracks: ", tracks, JSON.stringify(tracks, null, 2));
//     // return tracks;
//   } catch (error) {
//     console.error("Error:!! ", error);
//     console.log("hi");
//     return () => {};
//   }
// };

const useSpotifyTracks = (token) => {
  const [tracksState, setTracks] = useState(null);
  // useEffect(() => {
  //   getTracks(token);
  // });

  useEffect(() => {
    async function getTracksA(token) {
      if (token != null) {
        try {
          const tracks = await getMyTopTracks(token);
          setTracks(tracks);
          // console.log("tracks: ", JSON.stringify(tracks));
        } catch (error) {
          console.error("Error:!! ", error);
        }
      }
    }
    getTracksA(token);
  }, [token]);
  // console.log("tracks: ", tracksState, JSON.stringify(tracksState, null, 2));
  return tracksState;
};

export default useSpotifyTracks;
