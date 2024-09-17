import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./pages/TaskList";
import { todosContext } from "./store/TodosStore";
import { useContext, useEffect, useState } from "react";

function App() {
  const { todos } = useContext(todosContext);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);
  function handleFilter(e) {
    if (e === "all tasks") {
      setFilteredTodos(todos);
    } else if (e === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.status === true));
    } else if (e === "not completed") {
      setFilteredTodos(todos.filter((todo) => todo.status === false));
    }
  }
  return (
    <>
      <ToastContainer autoClose={1000} />
      <NavBar handleFilter={handleFilter} />
      <TaskList filteredTodos={filteredTodos} className="task-list" />

      <Footer />
    </>
  );
}

export default App;
