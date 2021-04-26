import { Link } from "react-router-dom"
import FridgeAPI from "../api/FridgeAPI"
import { Jumbotron, Button, Form, FormControl } from "react-bootstrap"

function SignUpPage(props) {
    async function handleSignUp(e) {
        e.preventDefault()
        if (e.target.password.value !== e.target.password2.value) {
            alert("ERROR: password values much match!!")
            return
        }

        let credentials = {
            username: e.target.username.value,
            password: e.target.username.value
        }

        let data = await FridgeAPI.signUp(credentials)
        if (data) {
            props.history.push("login")
        }
    }

    return (
        <Jumbotron>
            <div id="register">
                <h2>Register New Account</h2>
                <br></br>
                <Form onSubmit={handleSignUp}>
                    <Form.Group controlId="username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control placeholder="Enter username"/>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password"/>
                    </Form.Group>
                    <Form.Group controlId="password2">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password Confirmation"/>
                    </Form.Group>
                    <Button className="form-button" type="submit" variant="dark">Create Account</Button>
                </Form>
                <br />
                <p className="gray">Already registered? <Link to="/login">Click here to login.</Link></p>
            </div>
        </Jumbotron>
    )
}

export default SignUpPage;
