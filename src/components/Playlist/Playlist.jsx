import "./Playlist.css";
// Icons
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const PlaylistCard = ({ playlist, isLoading}) => {

  return (
    <>
      <div className="playlist-card">
        <div className="cover">
          <img alt={playlist.title} src={playlist.picture_big} />
          <PlayCircleFilledIcon className="play-album-icon" fontSize="large" />
        </div>
        <div className="text">
          <p>{playlist.title}</p>
          <p>{playlist.user.name}</p>
        </div>
      </div>
    </>
  );
};

export default PlaylistCard;