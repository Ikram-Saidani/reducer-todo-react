import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import TaskList from "../pages/TaskList";

function NavBar({ todos, dispatchTodos }) {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  function handleFilter(status) {
    let updatedTodos;

    if (status === "all tasks") {
      updatedTodos = todos;
    } else if (status === "completed") {
      updatedTodos = todos.filter((todo) => todo.status === true);
    } else if (status === "not completed") {
      updatedTodos = todos.filter((todo) => todo.status === false); 
    }

    setFilteredTodos(updatedTodos); 
  }

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container className="container" fluid>
          <Navbar.Brand className="logo">
            SIMPLIFY YOUR TASKS
            <br />
            WITH OUR APP!
          </Navbar.Brand>

          <Dropdown className="navDropdown" onSelect={handleFilter}>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" title="Filter by status">
              Status
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="all tasks">All tasks</Dropdown.Item>
              <Dropdown.Item eventKey="completed">Completed</Dropdown.Item>
              <Dropdown.Item eventKey="not completed">Not completed</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>

      
      <TaskList className="task-list" todos={filteredTodos} dispatchTodos={dispatchTodos} />
    </>
  );
}

export default NavBar;
