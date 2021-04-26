// src/pages/LoginPage.js
// Tyler Abbott
// 4/26/2021

import { Link } from "react-router-dom"
import { Jumbotron, Button, Form } from "react-bootstrap"
import FridgeAPI from "../api/FridgeAPI"


function LoginPage(props) {
    async function handleLogin(e) {
        e.preventDefault()
        let credentials = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        let data = await FridgeAPI.login(credentials)
        if (data && data.token) {
            let userInfo = {
                token: data.token,
                user: data.user
            }
            props.handleLogin(userInfo)
            props.history.push("/") // redirect to home page on successful login
        }
    }

    return (
        <Jumbotron>
            <div id="login">
                <h2>Log in to <b>Fridgeable</b>!</h2>
                <br></br>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control placeholder="Enter username"/>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password"/>
                    </Form.Group>
                    <Button className="form-button" type="submit" variant="dark">Login</Button>
                </Form>
                <br />
                <p className="gray">New user? <Link to="/signup">Click here to register.</Link></p>
            </div>
        </Jumbotron>
    )
}

export default LoginPage;
