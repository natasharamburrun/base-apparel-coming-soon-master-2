import { useState } from "react";
import "./styles/app.scss"

function App() {
const [email, setEmail] = useState("");

function handleChange(e) {
  setEmail(e.target.value);
}

  function handleSubmit(e) {
    e.preventDefault();
  }

    return (
      <div className="coming-soon">
        <div className="logo">
          <img src="./images/logo.svg" alt="logo"></img>
        </div>
        <div className="content">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="images/hero-mobile.jpg"
            />
            <source
              media="(min-width: 769px)"
              srcSet="/images/hero-desktop.jpg"
            />
            <img
              src="/images/hero-desktop.jpg"
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
                required
                onChange={handleChange}
                value={email}
              ></input>
              <button type="submit">
                <img src="./images/icon-arrow.svg" alt="icon arrow"></img>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default App;