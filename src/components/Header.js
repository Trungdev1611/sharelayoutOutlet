import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="border">
      <ul>
        <Link to="/layouthome">
          <li>layouthome</li>
        </Link>
        <Link to="/layouthome1">
          <li>layouthome1</li>
        </Link>
        <Link to="/layouthome2">
          <li>layouthome2</li>
        </Link>
        <Link to="/layoutabout">
          <li>layoutabout</li>
        </Link>
        <Link to="/layoutabout1">
          <li>layoutabout1</li>
        </Link>
        <Link to="/layoutabout2">
          <li>layoutabout2</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
