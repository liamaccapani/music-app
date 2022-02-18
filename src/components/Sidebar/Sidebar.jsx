import "./Sidebar.css";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="menu one">
        <div className="nav-item">
          <Link to="/">
            <MdHomeFilled />
            <span>Home</span>
          </Link>
        </div>
        <div className="nav-item">
          <FiSearch />
          <span>Search</span>
        </div>
        <div className="nav-item">
          <BiLibrary />
          <span>Your Library</span>
        </div>
      </div>

      <div className="menu two">
        <div class="nav-item">1</div>
        <div class="nav-item">2</div>
        <div class="nav-item">3</div>
        <div class="nav-item">4</div>
      </div>

      <div className="menu three">
        <div class="nav-item">1</div>
        <div class="nav-item">2</div>
        <div class="nav-item">3</div>
        <div class="nav-item">4</div>
        <div class="nav-item">1</div>
        <div class="nav-item">2</div>
        <div class="nav-item">3</div>
        <div class="nav-item">4</div>
        <div class="nav-item">2</div>
        <div class="nav-item">3</div>
        <div class="nav-item">4</div>
        <div class="nav-item">2</div>
        <div class="nav-item">3</div>
        <div class="nav-item">4</div>
      </div>
    </div>
  );
};

export default Sidebar;