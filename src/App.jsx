import { useState } from "react";
import "./styles/app.scss"

import logo from "./images/logo.svg";
import heroDesktop from "./images/hero-desktop.jpg";
import heroMobile from "./images/hero-mobile.jpg";
import iconError from "./images/icon-error.svg";
import iconArrow from"./images/icon-arrow.svg";

function App() {
const [email, setEmail] = useState("");
const [error, setError] = useState({});
 
const handleChange = (e) => {
  setEmail(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (!email) {
    setError({ email: "Please provide a valid email" });
    return false;
  }
    setError({});
    return true;
  }

    return (
      <div className="coming-soon">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="content">
          <picture>
            <source media="(max-width: 768px)" srcSet={heroMobile} />
            <source media="(min-width: 769px)" srcSet={heroDesktop} />
            <img
              srcSet={heroDesktop}
              alt="lady in an orange shirt holding her hand to her face"
              className="hero-images"
            />
          </picture>
        </div>
        <div className="hero-content">
          <h2 className="title-first">WE'RE</h2>
          <h2 className="title-second">
            COMING <br></br> SOON
          </h2>
          <p className="text-description">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="hero-button">
              <input
                type="email"
                placeholder="Email Address"
                className="input-text"
                onChange={handleChange}
                value={email}
              ></input>
              {error.email && (
                <div className="error-handling">
                  <img src={iconError} alt="icon error" className="icon-error" />
                  <p className="error-warning">{error.email}</p>
                </div>
              )}
              <button type="submit">
                <img src={iconArrow} alt="icon arrow"></img>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default App;