import React, { useEffect, useState, useContext } from "react"
import UserContext from "../contexts/UserContext"
import {Form, Button} from 'react-bootstrap'
import FridgeAPI from '../api/FridgeAPI.js'

function AddIngredient(props) {
  const [ingredient, setIngredient] = useState(null)
  const [fridge, setFridge] = useState(fridge)

  // contexts
  userInfo = useContext(UserContext)

  function handleIngredientSubmit(event){
    const ingredientObject = {
      name: event.target.elements[0].value,
      fridge: this.state.fridge,
      expiry_date: event.target.elements[1].value
    }
    FridgeAPI.addIngredient(ingredientObject)
      .then((response) => {this.setState({refresh: true})})
  }
  return(
    <div>
      <Form onSubmit={handleIngredientSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Ingredient Name</Form.Label>
          <Form.Control/>
        </Form.Group>

        <Form.Group controlId="expiry_date">
          <Form.Label>Approximate Expiration Date</Form.Label>
          <Form.Control/>
        </Form.Group>

        <Button variant="primary" type="submit">Add Ingredient</Button>
      </Form>
    </div>
    )
  }

export default AddIngredient;