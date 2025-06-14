// App.jsx
import { useState } from "react";

const COLORS = ["red", "green", "blue", "yellow", "orange", "purple", "teal"];

function App() {
  const [bgColor, setBgColor] = useState("white");

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  const handleRandomColor = () => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setBgColor(randomColor);
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
        Color Changer App 🎨
      </h1>

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {COLORS.map((color) => (
          <button
            key={color}
            onClick={() => handleColorChange(color)}
            className="px-5 py-2 rounded-lg shadow-lg text-white font-semibold capitalize transition-transform transform hover:scale-105"
            style={{ backgroundColor: color }}
          >
            {color}
          </button>
        ))}
      </div>

      <button
        onClick={handleRandomColor}
        className="mt-4 px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-all shadow-md"
        style={{ backgroundColor: "purple" }}
      >
        Random Color 🎲
      </button>
    </div>
  );
}

export default App;
