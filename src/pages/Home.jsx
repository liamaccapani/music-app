import "./styles.css";
// MUI
import Grid from "@mui/material/Grid";
import Searchbar from "../components/Searchbar/Searchbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Player from "../components/Player/Player";
import Playlist from "../components/Playlist/Playlist";
//React
import { useEffect, useState } from "react";
// Functions
import { getPlaylists } from "../core/functions.js";

const Home = () => {
  const [playlists, setPlaylists] = useState([]);

  const fetchPlaylists = async () => {
    let results = await getPlaylists();
    // console.log("Results", results);
    setPlaylists(results.data);
    // console.log("Playlists", playlists);
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);
  return (
    <>
      <Grid container className="whole-page">
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10} className="home-page">
          <Searchbar />
          <div>
            {playlists.map((playlist) => (
              <Playlist playlist={playlist}/>
            ))}
          </div>
        </Grid>
      </Grid>
      <Player />
    </>
  );
};

export default Home;
