import { useEffect, useState } from 'react';
import NoTodo from '../noTodo/NoTodo';
import AddTodo from '../addTodo/AddTodo';

function Todo() {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("todos"));
      if (stored && Array.isArray(stored)) {
        setTodos(stored);
      }
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Delete specific todo
  function handleDelete(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  // Edit todo
  function handleEdit(id) {
    setEditId(id);
    setShowInput(true);
  }

  const completedTasks = todos.filter(todo => todo.completed);

  return (
    <div className="min-h-screen bg-[#fff9f2] py-10">
      <h1 className="my-10 relative text-3xl font-bold text-center">ADD YOUR TASKS</h1>

      {/* If no todos exist */}
      {todos.length === 0 ? (
        <div className="top-0 relative">
          <NoTodo />
          <div className="flex justify-center mt-6">
            {!showInput ? (
              <button
                className="bg-amber-500 px-4 py-3 rounded-4xl cursor-pointer font-extrabold text-2xl"
                onClick={() => setShowInput(true)}
              >
                Create Tasks +
              </button>
            ) : (
              <div className="w-full">

                <AddTodo
                  todos={todos}
                  setTodos={setTodos}
                  input={input}
                  setInput={setInput}
                  editId={editId}
                  setEditId={setEditId}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Always show AddTodo when there are todos */}
          <AddTodo
            todos={todos}
            setTodos={setTodos}
            input={input}
            setInput={setInput}
            editId={editId}
            setEditId={setEditId}
          />

          <div className="flex justify-center items-center mb-4 mt-10">
            <h1 className="text-4xl font-bold text-center bg-[#ffde51] py-3 px-10 rounded-4xl">
              Tasks
            </h1>
          </div>

          {/* Show Completed Toggle */}
          <div className="flex w-1/5 items-center mt-6 ml-50">
            <input
              type="checkbox"
              checked={showCompleted}
              onChange={() => setShowCompleted(!showCompleted)}
            />
            <span className="mx-2">Show Completed</span>
          </div>

          {/* Todo List */}
          <div className="w-3/5 mt-20 mx-auto">
            <ul className="px-4 w-full">
              {todos
                .filter(todo => showCompleted || !todo.completed)
                .map(todo => (
                  <li
                    key={todo.id}
                    className={`flex items-center py-3 px-10 cursor-pointer justify-between p-2 rounded border-b-4 border-gray-600 ${
      todo.id === editId
        ? "opacity-50 bg-gray-300  transition-opacity duration-300 ease-in-out"
        : ""
    }`}
                  >
                    <div className="mx-[40%] mt-[2%] absolute">
                      <div className="h-24 w-1 bg-black opacity-60"></div>
                    </div>
                    <div className="flex w-full items-center">


                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() =>
                          setTodos(
                            todos.map(t =>
                              t.id === todo.id
                                ? { ...t, completed: !t.completed }
                                : t
                            )
                          )
                        }
                      />
                      <span
                        className={`flex-grow mx-6 ${todo.completed ? "line-through" : ""
                          }` }
                      >
                        {todo.text}
                      </span>

                      <div className="todoButtons flex gap-6 mx-2">
                        <button
                          className="cursor-pointer px-4 py-3 border-1 text-white bg-gray-700 rounded-full hover:bg-white transition-all ease-in-out hover:font-bold hover:text-gray-700"
                          onClick={() => handleEdit(todo.id)}
                        >
                          ED
                        </button>
                        <button
                          className="cursor-pointer px-4 py-3 border-1 text-white bg-gray-700 rounded-full hover:bg-white transition-all ease-in-out hover:font-bold hover:text-gray-700"
                          onClick={() => handleDelete(todo.id)}
                        >
                          DE
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          {/* Completed Todos */}
          <div className="w-3/4 mt-40 mx-auto bg-green-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Completed Todos</h2>
            {completedTasks.length === 0 ? (
              <p className="text-gray-500">No completed tasks yet.</p>
            ) : (
              <ul className="space-y-2 p-4 w-full">
                {completedTasks.map(todo => (
                  <li key={todo.id} className="line-through text-gray-600">
                    {todo.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
