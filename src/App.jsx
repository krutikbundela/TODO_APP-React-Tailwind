import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [editIndex, setEditIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState("");
  const [done, setDone] = useState(false);

  // // Load items from local storage on component mount
  // useEffect(() => {
  //   const storedItems = JSON.parse(localStorage.getItem("items")) || [];
  //   console.log("useEffect ~ storedItems:", storedItems);
  //   setItems(storedItems);
  // }, []);

  // Save items to local storage whenever items change
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (todo !== "") {
      setItems([...items, { text: todo, completed: false }]);
      setTodo("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedTodo(items[index].text);
  };

  const handleSaveEdit = () => {
    if (editedTodo !== "") {
      const updatedItems = [...items];
      updatedItems[editIndex].text = editedTodo;
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

  const handleComplete = (index) => {
    const updatedItems = [...items];
    updatedItems[index].completed = true;
    setItems(updatedItems);
  };

  return (
    <>
      <div className="min-h-screen flex justify-start sm:justify-center items-center flex-col gap-8 p-4">
        <div className="flex flex-col  mt-10 md:flex-row justify-center items-center md:gap-6">
          <input
            className="w-full md:w-72 border-2 rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg mb-4 md:mb-0"
            value={todo}
            maxLength={100}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addItem();
              }
            }}
            placeholder="Enter a new task"
          />
          <button
            className="w-full md:w-auto h-full px-5 py-2 bg-[#0264F6] text-white font-medium rounded-md"
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
          done={done}
          setDone={setDone}
          onComplete={handleComplete}
        />
      </div>
    </>
  );
};

export default App;