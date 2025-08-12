import { useState } from "react";
import nameCat from "../../assets/gif/name.gif";

function CatchName({ setName }) {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    if (!inputValue.trim()) return; // avoid empty name
    localStorage.setItem("name", inputValue);
    setName(inputValue); // This will trigger App to render MainApp
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fff9f2] ">
      <img 
      src={nameCat} 
      alt=""
      className="w-[60%] mb-10 sm:mb-0 sm:w-[300px] sm:h-[300px] absolute top-20"
       />
      <h1 className="text-5xl font-extrabold text-center my-10">
        Let me catch your name!!
      </h1>
      <div className="flex items-center gap-4 w-full max-w-md px-10 sm:px-0">
        <input
          type="text"
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleButtonClick(e);
            }
          }}
          onChange={(e) => setInputValue(e.target.value)}
          className="border-2 border-gray-300 rounded-lg p-2 w-full max-w-md"
          placeholder="Enter your name"
        />
        <button
          onClick={handleButtonClick}
          className="bg-amber-500 px-3 py-2 rounded-2xl cursor-pointer"
          disabled={!inputValue.trim()}
          style={{ opacity: inputValue.trim() ? 1 : 0.5 }}
        >
          Here!
        </button>
      </div>
    </div>
  );
}

export default CatchName;
