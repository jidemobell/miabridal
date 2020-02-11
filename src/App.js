import React from "react";
import brand from "./images/big_m.png";
import signature from "./images/big_sign.png";
import design from "./images/cropped-bridals.png";
import instagram from "./images/ig2.svg"
import facebook from "./images/fb.svg"
import "remixicon/fonts/remixicon.css";
import "./App.css";

function App() {
  return (
    <div className="App flex-col">
      <section className="top flex-col">
        <header className="flex-row">
          <div>
            <img src={brand} id="brand" />
          </div>
          <nav className="flex-row app-navs sanser">
            <li className="flex-row hvr-grow">
              <span className="first-border">Home</span>
            </li>
            <li className="flex-row hvr-grow">
              <span className="first-border">Appointments</span>
            </li>
            <li className="flex-row hvr-grow">
              <span className="first-border">Contact</span>
            </li>
          </nav>
        </header>
        {/* app hero */}
        <section className="hero flex-row">
          <img src={design} id="design" />

          <div className="flex-col hero-message center">
            <span className="flex-row">
              <hr />
              <span id="hero-style">Stylish</span>
              <hr />
            </span>
            <p> CUSTOM BRIDAL </p>
            <a> BOOK AN APPOINTMENT </a>
            <div>
              <img src={signature} id="signature" className="shrink" />
            </div>
          </div>
        </section>
      </section>
      <footer className="flex-row">
        <span id="copyright">&copy; 2020 Mercy Adams Bridal. All right reserved</span>
				<nav className="flex-row">
					<img src={instagram} alt="instagram" className="social" />
					<img src={facebook} alt="facebook"  className="social" />
				</nav>
      </footer>
    </div>
  );
}

export default App;
