import { Link } from "react-scroll";
import logo from "../images/logo.png";
import "./compStyle.css";
import { useState } from "react";

const ScrollNav = () => {
  window.onscroll = function () {
    //scrollFunction();
  };

  function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
      document.getElementById("navbar").style.padding = "10px 10px";
      document.getElementById("logo").style.height = "70px";
    } else {
      document.getElementById("navbar").style.padding = "40px 10px";
      document.getElementById("logo").style.height = "100px";
    }
  }

  const [clk, setClk] = useState(false);
  const handleClick = () => {
    setClk(!clk);
  };
  const handleClickNav = () => {
    setClk(false);
  };
  return (
    <nav className="nav_container">
      <a href="/">
        <img id="logo" src={logo} alt="logo"></img>
      </a>
      <ul id="navbar" className={clk ? "navbar active" : "navbar"}>
        <li>
          <Link
            activeClass="active"
            smooth
            spy
            to="home"
            onClick={handleClickNav}
          >
            Ana Sayfa
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            smooth
            spy
            to="products"
            onClick={handleClickNav}
          >
            Ürünler
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            smooth
            spy
            to="contacts"
            onClick={handleClickNav}
          >
            İletişim
          </Link>
        </li>
      </ul>
      <div id="mobile" onClick={handleClick} onMouseOver={handleClick}>
        <i id="bar" className={clk ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};
export default ScrollNav;
