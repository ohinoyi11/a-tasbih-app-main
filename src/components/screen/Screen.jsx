import "./screen.css";

const Screen = ({ count, theme }) => {
  return (
    <div className={`screen ${theme}`}>
      <span className="count">{count}</span>
    </div>
  );
};

export default Screen;
