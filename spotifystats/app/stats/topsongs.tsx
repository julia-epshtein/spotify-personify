import React, { useState, useEffect } from "react";

function Topsongs() {
  const [topSongs, setTopSongs] = useState([]);

  // Function to retrieve top songs from server
  const fetchTopSongs = async () => {
    try {
      const response = await fetch("/top-songs");
      if (response.ok) {
        const data = await response.json();
        setTopSongs(data.top_songs.items);
      } else {
        console.error("Error fetching top songs:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while fetching top songs:", error);
    }
  };

  // Call fetchTopSongs when the component mounts
  useEffect(() => {
    fetchTopSongs();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <p className="text-6xl text-black underline underline-offset-8 m-12">
        Your Top Songs
      </p>
      {/* display the song names */}    
    </div>
  );
}

export default Topsongs;
