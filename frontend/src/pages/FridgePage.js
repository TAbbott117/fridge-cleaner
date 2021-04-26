import { useEffect, useState, useContext } from "react"
import UserContext from "../contexts/UserContext"
import Fridge from "../components/Fridge"
import FridgeAPI from "../api/FridgeAPI"
import { Jumbotron, Form, Button } from 'react-bootstrap'
import { Redirect } from "react-router-dom"

function FridgePage(props) {
    // states
    const [fridge, setFridge] = useState(null)

    // contexts
    const userInfo = useContext(UserContext)

    // effects
    useEffect(() => {
        getFridge(props.match.params.fridgeId)
    }, [props.match.params.fridgeId])

    async function getFridge(fridgeId) {
        let token = userInfo ? userInfo.token : ""
        let data = await FridgeAPI.fetchFridge(fridgeId, token)
        setFridge(data)
    }

    async function addIngredient(e){
        e.preventDefault()
        let token = userInfo ? userInfo.token : ""
        const ingredientObject = {
            name: e.target.elements[0].value,
            fridge: props.match.params.fridgeId,
            expiry_date: e.target.elements[1].value
          }
        FridgeAPI.addIngredient(ingredientObject, token)
            .then(getFridge(fridge.id))
    }

    async function deleteFridge(){
        let token = userInfo ? userInfo.token : ""
        FridgeAPI.deleteFridge(fridge.id, token)
            .then(<Redirect to="/"/>)
    }


    // renders
    return (
        <Jumbotron>
            <Fridge fridge={fridge} />
            <div id="addingredient">
                <h3>Add a new ingredient to your fridge!</h3>
                <br></br>
                <Form onSubmit={addIngredient}>
                    <Form.Group controlId="name">
                    <Form.Label>Ingredient Name</Form.Label>
                    <Form.Control/>
                    </Form.Group>

                    <Form.Group controlId="expiry_date">
                    <Form.Label>Approximate Expiration Date</Form.Label>
                    <Form.Control/>
                    </Form.Group>

                    <Button variant="dark" type="submit">Add Ingredient</Button>
                </Form>
            </div>
            <br></br>
            <Button variant="danger" onClick={deleteFridge}>Delete Fridge</Button>
        </Jumbotron>
    )
}
//<Link to={recipeLink}><Button type="submit">Find Recipes!</Button></Link>
export default FridgePage;