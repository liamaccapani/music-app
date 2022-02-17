import "./styles.css";
import Grid from "@mui/material/Grid";
import Sidebar from "../components/Sidebar/Sidebar";
import Player from "../components/Player/Player";

const Album = () => {
  return (
    <>
      <Grid container className="whole-page">
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10} className="home-page">
          <div>ALBUM</div>
        </Grid>
      </Grid>
      <Player />
    </>
  );
};

export default Album;
