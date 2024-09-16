import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";


function todoReducer(state, action) {
  switch (action.type) {
    case "ADDTODO": {
      localStorage.setItem("todos", JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    }
    case "DELETETODO": {
      let newTodos = state.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    }
    case "EDITTODO": {
      let newTodos = state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    }
    case "CHANGESTATUS": {
      const updatedTodos = state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: !todo.status }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return [...updatedTodos];
    }
    default:
      return state;
  }
}

function App() {
  var tasks = localStorage.key("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const [todos, dispatchTodos] = useReducer(todoReducer, tasks);
  return (
    <>
      <ToastContainer autoClose={1000} />
      <NavBar todos={todos} dispatchTodos={dispatchTodos}/>

      <Footer />
    </>
  );
}

export default App;
