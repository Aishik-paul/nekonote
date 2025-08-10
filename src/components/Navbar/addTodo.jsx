// Add new todo
function handleAddTodo(e) {
    e.preventDefault();

    if (!input.trim()) return;

    const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
}

function AddTodo() {
    const [input, setInput] = useState('');

    {/* Input Area */ }
    <div className="flex justify-center mt-6">
        <input
            type="text"
            placeholder="Add a new todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleAddTodo(e);
                }
            }}
            className="w-2/4 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
            className="items-center py-4 px-6 ml-2 text-white bg-blue-500 rounded hover:bg-blue-600 cursor-pointer"
            onClick={handleAddTodo}
        >
            Save
        </button>
    </div>
}

export default AddTodo;