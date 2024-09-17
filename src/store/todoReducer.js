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
          todo.id === action.payload.id ? { ...todo, status: !todo.status } : todo
        );
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return [...updatedTodos];
      }
      default:
        return state;
    }
  }

  export default todoReducer