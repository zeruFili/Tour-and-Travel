import React from "react";

import "./headerStyles.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/login");
  };
  return (
    <header className="header">
      <nav>
        <div
          className="nav__logo"
          style={{
            marginTop: "-80px",
          }}
        >
          <a
            style={{
              fontSize: "30px",
              textDecoration: "none",
            }}
            href="#"
          >
            Tourbooking
          </a>
        </div>
        <ul
          className="nav__links"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <li className="link">
            <a
              style={{
                textDecoration: "none",
              }}
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="link">
            <a
              style={{
                textDecoration: "none",
              }}
              href="#trending"
            >
              Trending
            </a>
          </li>
          <li className="link">
            <a
              style={{
                textDecoration: "none",
              }}
              href="#destination"
            >
              Destinations
            </a>
          </li>
          <li className="link">
            <a
              style={{
                textDecoration: "none",
              }}
              href="#guide"
            >
              Guide
            </a>
          </li>
          <li className="link">
            <span
              style={{
                background: "white",
                padding: "20px",
                paddingBlock: "10px",
                borderRadius: "10px",
                fontSize: "20px",
              }}
              onClick={handleSignInClick}
            >
              Sign in
            </span>
          </li>
        </ul>
      </nav>
      <div className="section__container header__container" id="home">
        <h1>Explore the beauty of nature Discover the new you</h1>
        <div className="header__form">
          <form action="/">
            <div className="input__group">
              <label htmlFor="destination">Where do you want to go?</label>
              <input type="text" placeholder="Country, ZIP" />
            </div>
            <div className="input__group">
              <label htmlFor="checkIn">Check In</label>
              <input type="text" placeholder="Choose a date" />
            </div>
            <div className="input__group">
              <label htmlFor="CheckOut">Check Out</label>
              <input type="text" placeholder="Choose a date" />
            </div>
            <div className="input__group">
              <label htmlFor="guests">Guests</label>
              <input type="text" placeholder="Number of guests" />
            </div>
            <button className="btn">CHECK AVAILABILITY</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
