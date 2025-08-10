import React from 'react';
import Navbar from './components/Navbar/navbar';
import Todo from './components/Todos/Todo';
import './App.css';

export default function App() {
  return (
    <div>

      <Navbar />

      <div className='bg-[#fff9f2] h-screen'>
        <Todo />
      </div>
    </div>
      
    
  );
}