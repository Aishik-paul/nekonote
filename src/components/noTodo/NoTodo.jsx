import React, { useState, useEffect } from "react";
import noTodoSvg from "../../assets/svg/noTodo.svg";
import startSvg from "../../assets/svg/startTodo.svg"; // Different image for first-time users

function NoTodo() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsFirstVisit(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  if (isFirstVisit) {
    // First-time user layout
    return (
      <div className="flex justify-center items-center my-10 sm:mx-auto mx-10">
        <div className="text-center p-10 sm:p-30 mt-30 bg-[#f9fbf8] border rounded-3xl">
        <img
          src={startSvg} // <-- Different image for first visit
          alt="Start Todo"
          className="sm:w-[30%] w-full mx-auto mb-6 left-138 top-29 absolute"
        />
          <h1 className="sm:text-5xl text-3xl font-bold">
            Start with a todo
          </h1>
        </div>
      </div>
    );
  }

  // Returning user layout
  return (
    <div className="flex justify-center items-center my-10 sm:mx-auto mx-10">
      <div className="text-center p-5 sm:p-15 bg-[#f9fbf8] border rounded-3xl relative">
        <img
          src={noTodoSvg}
          alt="No Todos"
          className="sm:w-[80%] w-full mx-auto sm:top-[0px] top-[31px] sm:my-[-41px] z-50 relative rotate-[-5deg]"
        />
        <h1 className="sm:text-5xl text-3xl font-bold mb-4 z-10 relative">
          NO MORE TASK LEFT
        </h1>
      </div>
    </div>
  );
}

export default NoTodo;
