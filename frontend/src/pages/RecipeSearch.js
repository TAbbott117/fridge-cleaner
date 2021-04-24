import { Link, Redirect } from "react-router-dom"
import {Form, Button} from 'react-bootstrap'
import { useEffect, useState } from "react"

function RecipeSearch(props){
  const [recipe, setRecipe] = useState(null)
  const [redirect, setRedirect] = useState(false)

  const handleRecipe = (e) => {
    e.preventDefault()
    let ingredients = e.target.elements[0].value
    console.log(ingredients)
    setRecipe(ingredients)
    setRedirect(true)
}

  let recipeLink = `recipes/${recipe}`

  function renderContent(){
    if(!redirect){
      return(
        <div>
          <h2>Fridgable Recipe Search</h2>
          <Form onSubmit={handleRecipe}>
            <Form.Group controlId="ingr">
              <Form.Label>List Ingredients</Form.Label>
              <Form.Control type="ingredient" placeholder="Enter Ingredients"/>
            </Form.Group>
            <Button variant="primary" type="submit">Find Recipes!</Button>
          </Form>
        </div>
      )
    }
    return <Redirect to={recipeLink}/>
  }
  return(
    <div>
      {renderContent()}
    </div>
  )
}
//<Link to={recipeLink}><Button type="submit">GO!</Button></Link>
export default RecipeSearch;