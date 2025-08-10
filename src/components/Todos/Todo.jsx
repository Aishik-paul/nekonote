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
    <div className="min-h-screen bg-[#fff9f2] py-5">
      <h1 className="my-15 relative text-3xl font-bold text-center">ADD YOUR TASKS</h1>

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
            <h1 className="sm:text-3xl text-3xl font-bold text-center bg-[#ffde51] py-3 px-10 rounded-4xl my-5">
              Tasks
            </h1>
          </div>

          {/* Show Completed Toggle */}
          <div className="flex sm:w-3/5 w-full bg items-center mt-6 sm:ml-80 sm:my-10 mx-[30%]">
            <input
              className='appearance-none w-5 h-5 border border-gray-400 rounded-full
             checked:bg-amber-600 checked:border-gray-500 cursor-pointer'
              type="checkbox"
              checked={showCompleted}
              onChange={() => setShowCompleted(!showCompleted)}
            />
            <span
              className="mx-2">

              Show Completed
            </span>
          </div>

          {/* Todo List */}
          <div className="sm:w-3/5 sm:mt-20 mt-10 sm:mx-auto mx-5">
            <ul className="px-4 w-full">
              {todos
                .filter(todo => showCompleted || !todo.completed)
                .map(todo => (
                  <li
                    key={todo.id}
                    className={`flex items-center py-3 sm:px-10 px-2 cursor-pointer justify-between  rounded border-b-4 border-gray-600 ${todo.id === editId
                      ? "opacity-50 bg-gray-300 transition-opacity duration-300 ease-in-out"
                      : ""
                      }`}
                  >
                    <div className="sm:mx-[40%] mx-[46%] mt-[2%] absolute">
                      <div className="h-24 w-1 bg-black opacity-60"></div>
                    </div>
                    <div className="flex w-full items-center">


                      <input
                        type="checkbox"
                        className='appearance-none px-2 h-4 border border-gray-400 rounded-full
             checked:bg-gray-600 checked:border-gray-500 cursor-pointer'
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
                        className={`mx-6 sm:mx-3 sm:min-w-[36em] min-w-32 break-words whitespace-normal ${todo.completed ? "line-through" : ""
                          }`}
                      >
                        {todo.text}
                      </span>

                      <div className="todoButtons flex sm:mx-8 sm:gap-10 gap-3 mx-2">
                        <button
                          className="cursor-pointer sm:px-4 px-4 sm:py-3 py-3 border-1 text-white bg-gray-700 rounded-full hover:bg-white transition-all ease-in-out hover:font-bold hover:text-gray-700 text-[60%] sm:text-[100%]"
                          onClick={() => handleEdit(todo.id)}
                        >
                          ED
                        </button>
                        <button
                          className="cursor-pointer sm:px-4 px-4 sm:py-3 py-3 border-1 text-white bg-gray-700 rounded-full hover:bg-white transition-all ease-in-out hover:font-bold hover:text-gray-700 text-[60%] sm:text-[100%]"
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
