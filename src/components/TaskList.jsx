import React from "react";

const TaskList = ({
  items,
  onEdit,
  onSaveEdit,
  onDelete,
  editIndex,
  editedTodo,
  setEditedTodo,
  onComplete
}) => {
  // console.log("items:", items);
  return (
    <>
      <div className="w-full text-center flex items-center flex-col gap-5">
        <h1 className="text-blue-600 uppercase font-semibold text-2xl">
          Task List
        </h1>
        <div className="w-full md:w-2/3 lg:w-1/2 bg-slate-300 backdrop-blur-lg px-3 py-5 rounded-md">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center mb-5 md:mb-1"
            >
              {index === editIndex ? (
                <>
                  <input
                    type="text"
                    className="w-full md:w-72 border-2 rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg mb-3 md:mb-0"
                    value={editedTodo}
                    maxLength={100}
                    onChange={(e) => setEditedTodo(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        onSaveEdit();
                      }
                    }}
                  />
                  <div className="flex gap-3">
                    <button
                      className="w-full md:w-auto bg-blue-600 text-white px-2 py-2 font-medium rounded-md"
                      onClick={() => onSaveEdit()}
                    >
                      Save
                    </button>
                    <button
                      className="w-full md:w-auto bg-white text-blue-600 px-2 py-2 font-medium rounded-md"
                      onClick={() => onEdit(-1)}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <li className="list-none w-full md:w-2/3 text-center sm:text-left break-all mb-3 md:mb-0">
                    {item.text}
                  </li>
                  <div className="flex gap-3">
                    {item.completed ? (
                      <button
                        className="w-full md:w-auto bg-green-500 text-white px-2 py-2 font-medium rounded-md"
                        disabled
                      >
                        Completed
                      </button>
                    ) : (
                      <>
                        <button
                          className="w-full md:w-auto bg-blue-600 text-white px-2 py-2 font-medium rounded-md"
                          onClick={() => onComplete(index)}
                        >
                          Complete
                        </button>
                        <button
                          className="w-full md:w-auto bg-blue-600 text-white px-2 py-2 font-medium rounded-md"
                          onClick={() => onEdit(index)}
                        >
                          Edit
                        </button>
                      </>
                    )}
                        <button
                          className="w-full md:w-auto bg-white text-blue-600 px-2 py-2 font-medium rounded-md"
                          onClick={() => onDelete(index)}
                        >
                          Delete
                        </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
