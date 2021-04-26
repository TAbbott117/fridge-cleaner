import { Redirect } from "react-router-dom"
import {Jumbotron, Form, Button} from 'react-bootstrap'
import { useState } from "react"

function RecipeSearch(props){
  const [recipe, setRecipe] = useState(null)
  const [redirect, setRedirect] = useState(false)

  //Takes form data and formats ingredients to be queried in RecipePuppy api call
  const handleRecipe = (e) => {
    e.preventDefault()
    let ingredients = e.target.elements[0].value
    ingredients = ingredients.toLowerCase()
    let formattedIngredients = ingredients.split(" ").join("_")
    setRecipe(formattedIngredients)
    setRedirect(true)
}

  let recipeLink = `recipes/${recipe}`

  function renderContent(){
    if(!redirect){
      return(
        <Jumbotron>
          <div id="recipesearch">
            <h2><b>Fridgable</b> Recipe Search</h2>
            <p>(Powered by <a href= "http://www.recipepuppy.com/">RecipePuppy API</a>)</p>
            <Form onSubmit={handleRecipe}>
              <Form.Group controlId="ingr">
                <Form.Label>Enter some ingredients to find recipe combinations! (Separate ingredients by spaces)</Form.Label>
                <Form.Control type="ingredient" placeholder="Enter Ingredients"/>
              </Form.Group>
              <Button variant="dark" type="submit">Find Recipes!</Button>
            </Form>
          </div>
        </Jumbotron>
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
export default RecipeSearch;