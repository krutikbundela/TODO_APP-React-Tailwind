import { useState } from "react";
import TaskList from "./components/TaskList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState("");

  const addItem = () => {
    if (todo !== "") {
      setItems([...items, todo]);
      setTodo("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedTodo(items[index]);
  };

  const handleSaveEdit = () => {
    if (editedTodo !== "") {
      const updatedItems = [...items];
      updatedItems[editIndex] = editedTodo;
      setItems(updatedItems);
      setEditIndex(-1);
      setEditedTodo("");
    }
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col gap-8">
        <div className="flex justify-center items-center gap-6">
          <input
            className="w-72 border-2 rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a new task"
          />
          <button
            className="h-full px-5 py-2 bg-[#0264F6] text-white font-medium rounded-md"
            onClick={addItem}
          >
            Add Todo Item
          </button>
        </div>
        <TaskList
          items={items}
          onEdit={handleEdit}
          onSaveEdit={handleSaveEdit}
          onDelete={handleDelete}
          editIndex={editIndex}
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
        />
      </div>
    </>
  );
};

export default App;