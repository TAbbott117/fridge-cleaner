import { Link } from "react-router-dom"

function Ingredient(props) {
  function renderIngredient(){
    if(!props.ingredient){
      return null
    }

    return(
      <div>
        <h2>Ingredient: {props.ingredient.name}</h2>
      </div>
    )
  }


  return(
    <div>
      { renderIngredient() }
    </div>
  )
}

export default Ingredient;