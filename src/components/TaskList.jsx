import React from "react";

const TaskList = ({
  items,
  onEdit,
  onSaveEdit,
  onDelete,
  editIndex,
  editedTodo,
  setEditedTodo,
}) => {
  return (
    <>
      <div className="w-full text-center flex items-center flex-col gap-5">
        <h1 className="text-blue-600 uppercase font-semibold text-2xl">
          Task List
        </h1>
        <div className="w-1/2 bg-slate-300 backdrop-blur-lg px-3 py-5 rounded-md">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-5 mt-1"
            >
              {index === editIndex ? (
                <>
                  <input
                    type="text"
                    className="w-72 border-2 rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"  
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                  />
                  <div className="flex gap-3">
                    <button
                      className="bg-blue-600 text-white px-2 py-2 font-medium rounded-md"
                      onClick={() => onSaveEdit()}
                    >
                      Save
                    </button>
                    <button
                      className="bg-white text-blue-600 px-2 py-2 font-medium rounded-md"
                      onClick={() => onEdit(-1)}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <li className="list-none w-2/3 text-left break-normal">
                    {item}
                  </li>
                  <div className="flex gap-3">
                    <button
                      className="bg-blue-600 text-white px-2 py-2 font-medium rounded-md"
                      onClick={() => onEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-white text-blue-600 px-2 py-2 font-medium rounded-md"
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
