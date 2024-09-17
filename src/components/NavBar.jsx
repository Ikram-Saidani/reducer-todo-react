import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";




function NavBar({handleFilter}) {


  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container className="container" fluid>
          <Navbar.Brand className="logo">
            SIMPLIFY YOUR TASKS
            <br />
            WITH OUR APP!
          </Navbar.Brand>

          <Dropdown className="navDropdown" onSelect={(e)=>handleFilter(e)}>
            <Dropdown.Toggle
              variant="dark"
              id="dropdown-basic"
              title="Filter by status"
            >
              Status
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="all tasks">All tasks</Dropdown.Item>
              <Dropdown.Item eventKey="completed">Completed</Dropdown.Item>
              <Dropdown.Item eventKey="not completed">
                Not completed
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>

      
    </>
  );
}

export default NavBar;
