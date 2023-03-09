import React, { useState } from "react";
import { headerImage } from "../../utils/Helper";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const getImage = async () => {
    const res = await headerImage();
    setImage(res.logo);
  };

  getImage();

  const isHomePage = location.pathname.includes("/home");
  const isReportPage = location.pathname.includes("/report");

  return (
    <div className="header_main">
      <div className="header_border"></div>
      <header class="d-flex flex-wrap justify-content-center py-3 ">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <div class="bi me-2" width="40px" height="32px">
            <img className="header_img" src={image} />
          </div>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link">
              <button
                className="header_btn"
                onClick={() => navigate("/home")}
                disabled={!isHomePage && !isReportPage}
              >
                Home
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <button
                className="header_btn"
                onClick={() => navigate("/report")}
                disabled={!isHomePage && !isReportPage}
              >
                Report
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <button
                className="header_btn"
                onClick={() => navigate("/")}
                disabled={!isHomePage && !isReportPage}
              >
                Logout
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="bi bi-person-circle"></i>
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
