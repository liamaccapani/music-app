import "./Sidebar.css";
import Grid from "@mui/material/Grid";
import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";

const Sidebar = () => {
  return (
    // <Grid item md={3} className="sidebar">
    //   <div id="menu">
    //     <div class="nav-item">1</div>
    //     <div class="nav-item">2</div>
    //     <div class="nav-item">3</div>
    //     <div class="nav-item">4</div>
    //   </div>
    // </Grid>
    <div className="sidebar">
      <div id="menu">
        <div class="nav-item">1</div>
        <div class="nav-item">2</div>
        <div class="nav-item">3</div>
        <div class="nav-item">4</div>
      </div>
    </div>
  );
};

export default Sidebar;

// <div class="sidebar">
//   <div id="menu">
//     <div class="nav-item">1</div>
//     {/* <div class="nav-item">2</div>
//     <div class="nav-item">3</div>
//     <div class="nav-item">4</div> */}
//   </div>
// </div>
