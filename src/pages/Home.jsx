import "./styles.css";
// MUI
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
// Components
import Searchbar from "../components/Searchbar/Searchbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Player from "../components/Player/Player";
import PlaylistCard from "../components/Playlist/Playlist";
//React
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Functions
import { getPlaylists } from "../core/functions.js";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  const fetchPlaylists = async () => {
    let results = await getPlaylists();
    console.log("Results", results);
    setPlaylists(results.data);
    setIsLoading(false);
    console.log("Playlists", playlists);
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
        <Grid item md={10} id="home-page">
          <Searchbar />
          {isLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            <div className="_playlists-container">
              {playlists.map((playlist) => (
                <Link to={`/album/${playlist.id}`}>
                  <PlaylistCard key={playlist.id} playlist={playlist} isLoading={isLoading}/>
                </Link>
              ))}
            </div>
          )}
        </Grid>
      </Grid>
      <Player />
    </>
  );
};

export default Home;
