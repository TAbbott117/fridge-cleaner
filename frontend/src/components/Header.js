import { Link } from "react-router-dom"
import { Nav, Navbar } from "react-bootstrap"
import { useContext } from "react" 
import UserContext from "../contexts/UserContext"

function Header(props) {
  // contexts
  const userInfo = useContext(UserContext)
  
  function renderContent(){
    if(!userInfo){
      return(
        <Navbar id="header" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Fridgable</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/recipes">Recipe Search</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            <Nav.Link as={Link} to="/logout">Log Out</Nav.Link>
          </Nav>
        </Navbar>
      )
    }
    return (
      <Navbar id="header" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Fridgable</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/recipes">Recipe Search</Nav.Link>
        </Nav>
        <Navbar.Text>
          Signed in as: <a as={Link} to="/"><b>{userInfo.user.username}</b></a>
        </Navbar.Text>
        <Nav>
          <Nav.Link as={Link} to="/logout">Log Out</Nav.Link>
        </Nav>
      </Navbar>
  )
  }
  return (
    <div>
        { renderContent() }
    </div>
)
}

export default Header;