// src/pages/HomePage.js
// Tyler Abbott
// 4/26/2021

import { Link } from "react-router-dom"
import { useContext } from "react" 
import UserContext from "../contexts/UserContext"
import FridgeAPI from "../api/FridgeAPI"
import {Form, Button, Jumbotron, Card} from 'react-bootstrap'

function HomePage(props) {
    // contexts
    const userInfo = useContext(UserContext)

    //Functions
    async function addFridge(e){
        e.preventDefault()
        let token = userInfo ? userInfo.token : ""
        const fridgeObject = {
            name: e.target.elements[0].value,
            user: userInfo.user.id
          }
        FridgeAPI.addFridge(fridgeObject, token)
    }

    // renders
    function renderContent() {
        if (!userInfo) {
            return (
                <Jumbotron>
                    <h2>Welcome to <b>Fridgeable!</b></h2>
                    <h3>Sign up or log in below to start saving your ingredients!</h3>
                    <Link to="/login"><Button variant="dark">Login</Button></Link>
                    &nbsp;
                    <Link to="/signup"><Button variant="dark">Register</Button></Link>
                </Jumbotron>
            )
        }
            
        let fridgeElements = userInfo.user.fridges.map((fridge, index) => {
            return (
                <div>
                    <Link key={index} to={`fridge/${fridge.id}`}><Button id="fridgebutton" variant="secondary">{fridge.name}</Button></Link>
                </div>
            )
        })

        return (
            <Jumbotron>
                <h2>Hi there, <span className="user">{userInfo.user.username}</span>!</h2>
                <h1>Welcome back to <b>Fridgable!</b></h1>
                <br></br>
                <Jumbotron id="fridgelist">
                    <h4>Your fridges:</h4>
                    { fridgeElements }
                </Jumbotron>
                <br></br>
                <div id="newfridgeform">
                    <h4>Create a new Fridge:</h4>
                    <Form onSubmit={addFridge}>
                        <Form.Group controlId="name">
                        <Form.Label>Fridge Name</Form.Label>
                        <Form.Control/>
                        </Form.Group>

                        <Button variant="dark" type="submit">Add Fridge</Button>
                    </Form>
                </div>
            </Jumbotron>
        )
    }
    
    return (
        <div>
            { renderContent() }
        </div>
    )
}

export default HomePage;
