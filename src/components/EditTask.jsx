import React, { useState } from "react";
import { toast } from "react-toastify";

function EditTask({ item, handleChangeStatus, dispatchTodos, setShowEdit }) {
  const [updatedItem, setUpdatedItem] = useState(item);

  function handleEdit(e) {
    e.preventDefault();
    if (updatedItem.todo === "" || updatedItem.description === "") {
      toast.error("Please fill all the fields");
    } else {
      dispatchTodos({
        type: "EDITTODO",
        payload: {
          id: updatedItem.id,
          todo: updatedItem.todo,
          description: updatedItem.description,
          status: updatedItem.status,
        },
      });
      setShowEdit(false);
      toast.success("Task edited successfully");
    }
  }

  return (
    <form className="taskItem">
      <input
        type="text"
        value={updatedItem.todo}
        name="todo"
        onChange={(e) =>
          setUpdatedItem({ ...updatedItem, todo: e.target.value })
        }
      />
      <input
        type="text"
        value={updatedItem.description}
        name="description"
        onChange={(e) =>
          setUpdatedItem({ ...updatedItem, description: e.target.value })
        }
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "80%",
          height: "30px",
        }}
      >
        <p
          style={{
            color: item.status === true ? "green" : "red",
            width: "200px",
            fontWeight: "bold",
          }}
        >
          {item.status === true ? "Completed" : "Not Completed"}
        </p>
      </div>

      <button onClick={(e) => handleEdit(e)}>Edit</button>
    </form>
  );
}

export default EditTask;
