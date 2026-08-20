import { useState } from "react";
import "./App.scss"

function App() {
    return (
      <div>
        <div className="logo">
          <img src="./images/logo.svg" alt="logo"></img>
        </div>

        <picture>
          <source media="(width < 769px)" srcSet="images/hero-mobile.jpg" />
          <source media="(width >= 769px)" srcSet="./images/hero-desktop.jpg" />
          <img
            src="./images/hero-desktop.jpg"
            alt="lady in an orange shirt holding her hand to her face"
            className="hero-images"
          />
        </picture>
        <div>
          <h2>We're</h2> <h2>coming soon</h2>
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals. Email Address
          </p>
        </div>
        <form>
          <input type="email" placeholder="Email Address" required></input>
          <button type="submit"><img src="./images/icon-arrow.svg" alt="icon arrow"></img></button>
        </form>
      </div>
    );
}
export default App;