import { useEffect, useState } from "react";

import TaskList from "./components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import {
  completeTodo,
  createTodo,
  deleteTodo,
  editTask,
  editTodo,
  fetchTodos,
} from "./redux/taskSlice";

const App = () => {
  const dispatch = useDispatch();

  const { task, isLoading, isError } = useSelector((state) => state.todo);

  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState("");

const addItem = () => {
  if (todo !== "") {
    dispatch(createTodo(todo))
      .then(() => {
        setTodo(""); // Clear input field
        dispatch(fetchTodos()); // Fetch updated todos after creating a new one
      })
      .catch((error) => {
        console.error("Error creating todo:", error);
      });
  }
};


  const handleEdit = (id, index) => {
    setEditIndex(id);
    if (index > -1) {
      setEditedTodo(task[index].task);
    }
  };

  const handleSaveEdit = () => {
    if (editedTodo !== "") {
      dispatch(editTodo({ id: editIndex, task: editedTodo }))
        .then(() => {
          setEditIndex(-1);
          setEditedTodo("");
          dispatch(fetchTodos());
        })
        .catch((error) => {
          console.error("Error creating todo:", error);
        });
      
    }
  };

  const handleDelete = (id) => {
    console.log("handleDelete ~ id:", id);
    dispatch(deleteTodo(id))
      .then(() => {
        setEditIndex(-1);
        setEditedTodo("");
        dispatch(fetchTodos());
      })
      .catch((error) => {
        console.error("Error creating todo:", error);
      });
  };

  const handleComplete = (id) => {
    dispatch(completeTodo(id))
      .then(() => {
        setEditIndex(-1);
        setEditedTodo("");
        dispatch(fetchTodos());
      })
      .catch((error) => {
        console.error("Error creating todo:", error);
      });
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

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
          items={task}
          isError={isError}
          isLoading={isLoading}
          onEdit={handleEdit}
          onSaveEdit={handleSaveEdit}
          onDelete={handleDelete}
          editIndex={editIndex}
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
          onComplete={handleComplete}
        />
      </div>
    </>
  );
};

export default App;
