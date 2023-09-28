import React from "react";
import "../App.css";
import { Introtext, Sectiontext, Footer1, Footer2 } from "../components/data";

function Home() {
  return (
    <div id="home">
      <div className="intro">
        <div className="intro_img1">
          <img src="/img/19.jpeg" alt="intro_img1" />
        </div>
        <div className="intro_img2">
          <img src="/img/7.jpeg" alt="intro_img2" />
        </div>
      </div>
      <div className="introtext_wrap">
        <div className="introtext">{Introtext}</div>
      </div>
      <section>
        <div className="section_left">
          <img src="/img/2.jpeg" alt="section_left_img" />
        </div>
        <div className="section_right">
          {Sectiontext.map((text, i) => (
            <div key={i} className="section_text">
              {text}
            </div>
          ))}
        </div>
      </section>
      <footer>
        <div className="footer_left">
          {Footer1.map((item, index) => (
            <div key={index} className="footer_left_text">
              {item}
            </div>
          ))}
        </div>
        <div className="footer_right">
          {Footer2.map((item, index) => (
            <div key={index} className="footer_right_text">
              {item}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Home;
