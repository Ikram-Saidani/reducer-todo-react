import { useContext } from "react";
import AddTodo from "../components/AddTodo";
import TaskItem from "../components/TaskItem";
import { todosContext } from "../store/TodosStore";

function TaskList({filteredTodos}) {
  const {  dispatchTodos } = useContext(todosContext);
  return (
    <>
      <div>
        <AddTodo dispatchTodos={dispatchTodos} />
      </div>
      <div className="task-list">
        
        {filteredTodos.map((todo, i) => (
          <TaskItem key={i} item={todo} dispatchTodos={dispatchTodos} />
        ))}
      </div>
    </>
  );
}

export default TaskList;
