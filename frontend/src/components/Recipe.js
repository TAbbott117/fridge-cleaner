import { useEffect, useState, useContext } from "react"
import UserContext from "../contexts/UserContext"
import FridgeAPI from "../api/FridgeAPI"

function Recipe(props) {
    
    // renders
    function renderRecipes (){
        if(!props.recipes){
            return null
        }

        let recipeOptions = props.recipes.results.map((recipe, index) => {
            return(
                <div>
                    <h4>{ recipe.title }</h4>
                    <img src={recipe.thumbnail} />
                    <p>Ingredients needed: {recipe.ingredients}</p>
                    <a href={recipe.href}>Link to full recipe</a>
                </div>
            )
        })

        return(
            <div>
                <h2>RECIPES</h2>
                { recipeOptions }
            </div>
        )
    }

    return (
        <div>
            { renderRecipes() }
        </div>
    )
}

export default Recipe;