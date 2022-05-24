import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/category/");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT BEAUTIFUL PAGE</span>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-f"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
