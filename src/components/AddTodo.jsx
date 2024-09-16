import { useRef } from "react";
import { toast } from "react-toastify";

function AddTodo({ dispatchTodos }) {
  const ref = useRef();
  function handleSubmit() {
    
    if (!ref.current.todo.value || !ref.current.description.value) {
      toast.error("Please fill all the fields");
    } else {
      dispatchTodos({
        type: "ADDTODO",
        payload: {
          id: Date.now(),
          todo: ref.current.todo.value,
          description: ref.current.description.value,
          status: false,
        },
      });
      toast.success("Task added successfully");
      ref.current.todo.value = "";
      ref.current.description.value = "";
    }
  }

  return (
    <form className="add-task" ref={ref} onSubmit={handleSubmit}>
      <input placeholder="add the title of the task" type="text" name="todo" />
      <input placeholder="add the description" type="text" name="description" />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
