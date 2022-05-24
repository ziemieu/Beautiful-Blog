import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <ul className="topList">
          <li className="topListItems">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItems">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="topListItems">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="topListItems">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
        </ul>
      </div>
      <div className="topCenter">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="ImageBox" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItems">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItems">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
      <div className="topRight">
        <i className="topIcon fab fa-facebook-f"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-instagram"></i>
        <li className="topIcon" onClick={handleLogOut}>
          {user && "logout"}
        </li>
      </div>
    </div>
  );
}
