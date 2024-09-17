import { useState } from "react";
import EditTask from "./EditTask";
import { toast } from "react-toastify";

function TaskItem({ item, dispatchTodos }) {
  const [showEdit, setShowEdit] = useState(false);
  function handleChangeStatus() {
    dispatchTodos({ type: "CHANGESTATUS", payload: item });
    
    toast.success("Status changed successfully");
  }

  function handleDelete() {
    if( window.confirm("Are you sure you want to delete this task?")){
      dispatchTodos({ type: "DELETETODO", payload: item });
      toast.success("Task deleted successfully");
     
    }
    else{
      toast.error("Task not deleted");
    }
  }
  return (
    showEdit ? (
      <EditTask
        item={item}
        handleChangeStatus={handleChangeStatus}
        dispatchTodos={dispatchTodos}
        setShowEdit={setShowEdit}
      />
    ) : (
      <div className="taskItem">
        <h3>{item.todo} </h3>
        <h6>{item.description}</h6>
        <h4 style={{ color: item.status ? "green" : "red" }}>
          {item.status ? "Completed" : "Not Completed"}
        </h4>
        <div className="buttons">
          <button
            className="change"
            onClick={() => handleChangeStatus()}
          >
            Change Status
          </button>
          <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    )
  );
  
}

export default TaskItem;
