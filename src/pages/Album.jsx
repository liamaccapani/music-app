import "./styles.css";
// MUI
import Avatar from '@mui/material/Avatar';
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
  const [playlist, setPlaylist] = useState({});

  const { id } = useParams();

  const fetchAlbum = async () => {
    let results = await getPlaylistById(id);
    console.log("Results", results);
    setPlaylist(results);
    setIsLoading(false);
    console.log("Album", playlist);
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
        <Grid item md={10} id="playlist-page">
          <Searchbar />
          {isLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              <div className="_playlist-preview-container">
                <div className="playlist-card">
                  <div className="cover">
                    <img alt={playlist.title} src={playlist.picture_big} />
                  </div>
                </div>
                <div className="playlist-text">
                  <h1>{playlist.title}</h1>
                  <div className="avatar">
                    <Avatar alt="avatar" />
                    <span>{playlist.creator.name}</span>
                  </div>
                  <p>{playlist.description}</p>
                </div>
              </div>
              <div className="_tracks-container"></div>
            </>
          )}
        </Grid>
      </Grid>
      <Player />
    </>
  );
};

export default Album;

{
  /* <h1>{album.title}</h1>
      <p>{album.description}</p>
      {album.tracks.data.map((track) => (
      <div>
        <h3>{track.title}</h3>
        <p>{track.artist.name}</p>
      </div>
    ))} */
}
