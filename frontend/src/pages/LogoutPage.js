import { Link } from "react-router-dom"
import { Jumbotron } from "react-bootstrap"

function LogoutPage(props) {
    return (
        <Jumbotron>
            <h2>Logged Out</h2>
            <p className="gray">You are now logged out. <Link to="/login">Click here to login.</Link></p>
        </Jumbotron>
    )
}

export default LogoutPage;