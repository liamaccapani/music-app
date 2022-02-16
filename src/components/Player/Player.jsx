import "./Player.css";
import Grid from "@mui/material/Grid";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { BsShuffle } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { FiRepeat } from "react-icons/fi";
import { GoDeviceDesktop } from "react-icons/go";
import { MdPlaylistPlay } from "react-icons/md";

const Player = () => {
  return (
    // Whole player bar
    <Grid container spacing={1} className="player">
      {/* Album and song */}
      <Grid item xs={12} md={3} className="album-song">
        <img src="./spotify-logo.png" alt="spotify logo" />
      </Grid>

      {/* Icons and playing bar */}
      <Grid item xs={12} md={6} className="icons-playing-bar">
        <div className="icons">
          <BsShuffle className="shuffle" />
          <SkipPreviousIcon className="skip-previous" />
          <PlayCircleFilledIcon className="play" fontSize="large" />
          <SkipNextIcon className="skip-next" />
          <FiRepeat className="repeat" />
        </div>
        <div className="playing-bar">
          <small>00:00</small>
          {/* <small>00</small> */}
          <input type="range" min="0" max="100" value="0" />
          <small>00:00</small>
          {/* <small>00</small> */}
        </div>
      </Grid>

      {/* Volume and devices */}
      <Grid item xs={12} md={3} className="volume-devices">
        <div className="icons">
          <BsShuffle className="shuffle" />
          <SkipPreviousIcon className="skip-previous" />
        </div>
      </Grid>
    </Grid>
  );
};

// <div >
//
//   <div  >
//
//   </div>

//
//   <div  xs={12} md={6}>

//   </div>

//
//   <div  xs={12} md={3}>
//
//   </div>
// </div>

export default Player;
