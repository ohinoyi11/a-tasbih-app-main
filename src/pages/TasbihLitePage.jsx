import { useState } from "react";
import ControlButtons from "../components/buttons/ControlButtons";
import Heading from "../components/heading/Heading";
import Screen from "../components/screen/Screen";
import Footer from "../components/footer/Footer";
import "./tasbihLite.css";
import sounds from "../assets/sounds/sound.wav";

const TasbihLitePage = () => {
  const [count, setCount] = useState(
    Number(localStorage.getItem("persistedCount"))
  );
  const [theme, setTheme] = useState("light");
  const [bgColor, setBgColor] = useState("");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setBgColor("");
  };
  localStorage.getItem("persistedCount", 20);
  localStorage.getItem("persistedCount");
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeBackgroundColor = () => {
    const newColor = getRandomColor();
    setBgColor(newColor);
  };

  function handleIncrease() {
    setCount((prev) => prev + 1);
    new Audio(sounds).play();
  }

  function handleDecrease() {
    if (count > 0) {
      setCount((prev) => prev - 1);
      new Audio(sounds).play();
    }
  }

  function handleReset() {
    setCount(0);
    new Audio(sounds).play();
  }

  function play() {
    new Audio(sounds).play();
  }

  return (
    <div
      className={`tasbih-container  ${theme}`}
      style={{
        backgroundColor: bgColor || (theme === "light" ? "#ffffff" : "#082736"),
      }}
    >
      <Heading count={count} theme={theme} />
      <Screen count={count} theme={theme} />
      <ControlButtons
        theme={theme}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onReset={handleReset}
      />
      <Footer
        theme={theme}
        soundIsOn={true}
        play={play}
        onToggleTheme={toggleTheme}
        colors={changeBackgroundColor}
      />
    </div>
  );
};

export default TasbihLitePage;
