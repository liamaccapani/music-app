import "./styles.css";
// MUI
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
// Components
import Searchbar from "../components/Searchbar/Searchbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Player from "../components/Player/Player";
//React
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Functions
import { getPlaylistById } from "../core/functions.js";

const Album = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [album, setAlbum] = useState({});

  const {albumId} = useParams();

  const fetchAlbum = async () => {
    let results = await getPlaylistById(albumId);
    console.log("Results", results);
    setAlbum(results)
    setIsLoading(false);
    console.log("Album", album);
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <>
      <Grid container className="whole-page">
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10} id="album-page">
          <Searchbar />
          {isLoading ? <CircularProgress color="inherit" /> : <div>ALBUM</div>}
        </Grid>
      </Grid>
      <Player />
    </>
  );
};

export default Album;
