import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import Todo from './components/Todos/Todo';
import CatchName from './components/catchName/catchName';
import WelcomeBack from './components/welcomeBack/WelcomeBack';
import './App.css';

export default function App() {
  const [name, setName] = useState("");
    const [showWelcomeBack, setShowWelcomeBack] = useState(false);


  // Load name from localStorage when app loads
  useEffect(() => {
    const storedName = localStorage.getItem("name");
     const hasVisited = localStorage.getItem("hasVisited");


 if (storedName) {
      setName(storedName);
      // Show welcome back if they have visited before
      if (hasVisited) {
        setShowWelcomeBack(true);
        // Hide welcome after a delay
        setTimeout(() => setShowWelcomeBack(false), 2000);
      } else {
        // First visit after setting name
        localStorage.setItem("hasVisited", "true");
      }
    }
  }, []);

  // If there's no name yet, show CatchName only
  if (!name) {
    return <CatchName setName={setName} />;
    
  }

 if (showWelcomeBack) {
    return <WelcomeBack name={name} />;
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
