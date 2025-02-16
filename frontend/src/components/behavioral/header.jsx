import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <h2>TechBerry</h2>
      <h3>{props.subtitle}</h3>
    </div>
  );
}

export default Header;
