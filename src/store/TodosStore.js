import React, { createContext, useReducer } from "react";
import todoReducer from "./todoReducer";

export const todosContext = createContext();

function TodosStore({ children }) {
  var tasks = localStorage.key("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const [todos, dispatchTodos] = useReducer(todoReducer, tasks);

  return (
    <todosContext.Provider
      value={{ todos, dispatchTodos }}
    >
      {children}
    </todosContext.Provider>
  );
}

export default TodosStore;
