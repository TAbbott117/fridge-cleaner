import { Link } from "react-router-dom"
import { Nav, Navbar } from "react-bootstrap"
import { useContext } from "react" 
import UserContext from "../contexts/UserContext"

function Header(props) {
  
  return (
      <Navbar id="header" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Fridgable</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/login">Log In</Nav.Link>
          <Nav.Link as={Link} to="/logout">Log Out</Nav.Link>
        </Nav>
      </Navbar>
  )
}

export default Header;