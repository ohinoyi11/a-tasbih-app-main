import React from "react";
import IconContainer from "../iconContainer/IconContainer";
import "./footer.css";
import "../iconContainer/icon-prop.css";

import circular from "../../assets/icons/circular.png";
import mode from "../../assets/icons/mode.svg";
import color from "../../assets/icons/color.svg";
import vibrate from "../../assets/icons/vibrate.svg";
import sound from "../../assets/icons/sound.svg";
import "../iconContainer/icon-prop.css";
function Footer({ play, onToggleTheme, soundIsOn, theme, colors }) {
  return (
    <div className={`footer ${theme}`}>
      <IconContainer>
        <img
          className="icon-img"
          onClick={onToggleTheme}
          src={mode}
          alt="Theme"
          style={{ width: "24px", height: "24px", cursor: "pointer" }}
        />
      </IconContainer>
      <IconContainer bgColor="#59717D">
        <img
          className="icon-img"
          onClick={colors}
          src={color}
          alt="Play Sound"
          style={{ width: "24px", height: "24px", cursor: "pointer" }}
        />
      </IconContainer>
      <IconContainer bgColor="#59717D">
        <img
          className="icon-img"
          src={vibrate}
          alt="Vibrate"
          style={{ width: "24px", height: "24px" }}
        />
      </IconContainer>
      <IconContainer bgColor="#59717D">
        <img
          className="icon-img"
          onClick={play}
          src={sound}
          alt="Sound"
          style={{ width: "24px", height: "24px", cursor: "pointer" }}
        />
      </IconContainer>
      <IconContainer bgColor="#59717D">
        <img
          className="icon-img"
          src={circular}
          alt="Circular Icon"
          style={{ width: "24px", height: "24px" }}
        />
      </IconContainer>
    </div>
  );
}

export default Footer;
