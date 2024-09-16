import AddTodo from "../components/AddTodo";
import TaskItem from "../components/TaskItem";

function TaskList({ todos, dispatchTodos }) {
  return (
    <>
      <div>
        <AddTodo dispatchTodos={dispatchTodos} />
      </div>
      <div className="task-list">
        {todos.map((todo, i) => (
          <TaskItem key={i} item={todo} dispatchTodos={dispatchTodos} />
        ))}
      </div>
    </>
  );
}

export default TaskList;
