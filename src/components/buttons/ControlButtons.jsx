import React from "react";
import IconContainer from "../iconContainer/IconContainer";
import "./control-buttons.css";
import repeat from "../../assets/icons/repeat.png";
import circular from "../../assets/icons/circular.png";
import Footer from "../footer/Footer";
import "../iconContainer/icon-prop.css";

const ControlButtons = ({ onIncrease, onDecrease, onReset, theme }) => {
  return (
    <div className={`control-button ${theme}`}>
      <div className={`small-btns-container ${theme}`}>
        <IconContainer>
          <img
            onClick={onDecrease}
            src={repeat}
            alt=""
            style={{ width: "24px", height: "24px" }}
          />
        </IconContainer>
        <IconContainer>
          <img
            onClick={onReset}
            src={circular}
            alt=""
            style={{ width: "24px", height: "24px" }}
          />
        </IconContainer>
      </div>
      <div>
        <div className="increase-btn" onClick={onIncrease}></div>
      </div>
    </div>
  );
};

export default ControlButtons;
