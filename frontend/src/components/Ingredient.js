// src/components/Brewery.js
// Tyler Abbott
// 4/26/2021

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