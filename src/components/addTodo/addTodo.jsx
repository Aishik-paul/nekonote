import React, { useState, useEffect } from "react";

function AddTodo({ todos, setTodos, setShowInput, editId, setEditId }) {
  const [input, setInput] = useState("");

  // Prefill when editing
  useEffect(() => {
    if (editId) {
      const todoToEdit = todos.find(t => t.id === editId);
      if (todoToEdit) {
        setInput(todoToEdit.text);
      
      }
    }
  }, [editId, todos]);

  function handleAddTodo(e) {
    e.preventDefault();
    if (!input.trim()) return;

    if (editId) {
      // Update existing todo
      setTodos(todos.map(t =>
        t.id === editId ? { ...t, text: input } : t
      ));
      setEditId(null);
    } else {
      // Add new todo
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    setInput(""); // clear input
  }

  return (
    <div className="flex items-center justify-center mt-6">
      <textarea
        type="text"
        placeholder="Add a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo(e);
          }
        }}
        className="sm:w-2/4 w-[70%] h-13 items-center py-3 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-gray-600 overflow-x-auto"
      />
      <button
        className="items-center sm:py-4 py-3 px-3 sm:px-6 ml-2 font-bold text-white border-1 bg-gray-700 rounded-4xl hover:bg-white hover:text-gray-700 cursor-pointer hover:text-[107.9%] transition-all ease-in-out hover:py-[1%]"
        onClick={handleAddTodo}
      >
        {editId ? "Update" : "Save"}
      </button>
    </div>
  );
}

export default AddTodo;
