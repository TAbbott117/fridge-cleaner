// src/pages/RecipesPage.js
// Tyler Abbott
// 4/26/2021

import { useEffect, useState, useContext } from "react"
import UserContext from "../contexts/UserContext"
import Recipe from "../components/Recipe"
import FridgeAPI from "../api/FridgeAPI"

function RecipesPage(props){
  //states
  const [recipes, setRecipes] = useState(null)

  //contexts
  const userInfo = useContext(UserContext)

  //effects
  useEffect(() => {
    getRecipe(props.match.params.ingredients)
  }, [props.match.params.ingredients])

  async function getRecipe(ingredients) {
    let token = userInfo ? userInfo.token : ""
    let data = await FridgeAPI.fetchRecipes(ingredients, token)
    setRecipes(data)
  }

  //renders
  return(
    <div>
      <Recipe recipes={recipes} />
    </div>
  )
}

export default RecipesPage;


