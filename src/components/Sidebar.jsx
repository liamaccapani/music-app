import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <div className="img_container">
        <img src="./spotify-logo.png" alt="spotify logo" />
      </div>
      <div id="menu">
        <div class="nav-item">1</div>
        {/* <div class="nav-item">2</div>
        <div class="nav-item">3</div>
        <div class="nav-item">4</div> */}
      </div>
    </div>
  );
};

export default Sidebar;
