import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import Todo from './components/Todos/Todo';
import CatchName from './components/catchName/catchName';
import './App.css';

export default function App() {
  const [name, setName] = useState("");

  // Load name from localStorage when app loads
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  // If there's no name yet, show CatchName only
  if (!name) {
    return <CatchName setName={setName} />;
  }

  // If we already have a name, show the main app
  return (
    <div>
      <Navbar />
      <div className="bg-[#fff9f2] h-screen">
        <Todo name={name} />
      </div>
    </div>
  );
}
