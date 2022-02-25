import "./Searchbar.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Searchbar = () => {
  return (
    <div className="searchbar">
      {/* <div className="arrow">
        <BsFillArrowLeftCircleFill />
        <BsFillArrowRightCircleFill />
      </div> */}

      <BsFillArrowLeftCircleFill className="arrow"/>
      <BsFillArrowRightCircleFill className="arrow"/>
    </div>
  );
};

export default Searchbar;
