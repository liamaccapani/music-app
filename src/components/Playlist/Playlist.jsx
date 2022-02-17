import "./Playlist.css";
import { styled } from "@mui/material/styles";
// Icons
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

// const CoverImage = styled("div")({
//   width: 150,
//   height: 150,
//   objectFit: "cover",
//   overflow: "hidden",
//   flexShrink: 0,
//   borderRadius: 8,
//   backgroundColor: "rgba(0,0,0,0.08)",
//   "& > img": {
//     width: "100%",
//   },
//   display: "inline-block",
//   position: "relative",
//   marginLeft: 10,
//   marginBottom: 10,
// });

const Playlist = ({ playlist }) => {
  return (
    <>
      <div className="playlist-card">
        <img alt={playlist.title} src={playlist.picture_big} />
        <PlayCircleFilledIcon className="play-album" />
      </div>
    </>
  );
};

export default Playlist;
