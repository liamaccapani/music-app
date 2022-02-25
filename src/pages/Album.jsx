import "./styles.css";
import {
  BiDotsHorizontalRounded,
  BiHeart,
  BiMicrophone,
  BiShare,
} from "react-icons/bi";
// MUI
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
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
                  <h2>{playlist.title}</h2>
                  <div className="avatar">
                    <Avatar alt="avatar" sx={{ width: 25, height: 25 }} />
                    <span>{playlist.creator.name}</span>
                  </div>
                  <p>{playlist.description}</p>
                  <p>
                    {playlist.tracks.data.length} brani - {playlist.fans} fans
                  </p>
                  <div className="_buttons-container">
                    <Fab
                      variant="extended"
                      size="small"
                      color="secondary"
                      sx={{ mr: 1 }}
                    >
                      ASCOLTA
                    </Fab>
                    <Fab size="small" sx={{ mr: 1 }}>
                      <BiHeart />
                    </Fab>
                    <Fab size="small" sx={{ mr: 1 }}>
                      <BiShare />
                    </Fab>
                    <Fab size="small">
                      <BiDotsHorizontalRounded />
                    </Fab>
                  </div>
                </div>
              </div>
              <div className="_tracks-container">
                {playlist.tracks.data.map((track) => (
                  <div className="single-track">
                    <img src={track.album.cover_small} alt="album cover" />
                    <p className="title">{track.title}</p>
                    <div className="icons">
                      <BiMicrophone />
                      <BiHeart />
                      <BiDotsHorizontalRounded />
                    </div>
                    <p className="artist">{track.artist.name}</p>
                    <span>
                      {("0" + Math.floor(track.duration / 60)).slice(-2) +
                        ":" +
                        ("0" + Math.floor(track.duration % 60)).slice(-2)}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </Grid>
      </Grid>
      <Player />
    </>
  );
};

export default Album;
