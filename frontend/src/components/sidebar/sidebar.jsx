import "./sidebar.css";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";
import bLogo from "../../assets/behavioral.png";
import tLogo from "../../assets/technical.png";

function Sidebar() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="sidebar">
      <Link to="/ " className="home">
        <img src={icon} className="icon" />
      </Link>
      <div className="iconContainer">
        <Link to="/technical" className="tLink">
          <img src={tLogo} onClick={handleClick} />
        </Link>
        <Link to="/behavioral" className="bLink">
          <img src={bLogo} onClick={handleClick} />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
