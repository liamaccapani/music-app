import "./Player.css";
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
    <div className="player">
      {/* Album and song */}
      <div className="album-song">
          <img src="./spotify-logo.png" alt="spotify logo"/>
      </div>
      {/* Icons and playing bar */}
      <div className="icons-playing-bar">
        <div className="icons">
          <BsShuffle className="shuffle" />
          <SkipPreviousIcon className="skip-previous" />
          <PlayCircleFilledIcon className="play" fontSize="large" />
          <SkipNextIcon className="skip-next" />
          <FiRepeat className="repeat" />
        </div>
        <div className="playing-bar">

        </div>
      </div>
      {/* Volume and devices */}
      <div className="volume-devices">
        <div className="icons">
        <BsShuffle className="shuffle" />
          <SkipPreviousIcon className="skip-previous" />
          <PlayCircleFilledIcon className="play" fontSize="large" />
          <SkipNextIcon className="skip-next" />
          <FiRepeat className="repeat" />
        </div>
      </div>
    </div>
  );
};

export default Player;
