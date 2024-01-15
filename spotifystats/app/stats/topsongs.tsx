import React, { useState, useEffect } from "react";
const API_BASE_URL = 'https://api.spotify.com/v1/'

function Topsongs({accessToken=''}) {
  const [topSongs, setTopSongs] = useState([]);

  // Function to retrieve top songs from Spotify API
  const fetchTopSongs = async () => {
    try {
      // Fetch top songs from Spotify API
      const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      });
      if (response.ok) {
        const data = await response.json();
        setTopSongs(data.items); // Assuming the API response has an 'items' property
      } else {
        console.error("Error fetching top songs:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while fetching top songs:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <p className="text-6xl text-black underline underline-offset-8 m-12">
        Your Top Songs
      </p>
    </div>
  );
}

//retrieve top songs from spotify api

export default Topsongs;
