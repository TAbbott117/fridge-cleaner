import { Link } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import FridgeAPI from "../api/FridgeAPI"

function Fridge(props){

  // contexts
  const userInfo = useContext(UserContext)

  // function deleteIngredient(ingredientId){
  //   let token = userInfo ? userInfo.token : ""
  //   FridgeAPI.deleteIngredient(ingredientId, token)
  //       .then(window.location.reload())
  // }

  function renderFridge(){
    if(!props.fridge){
      return null
    }

    let fridgeElements = props.fridge.ingredients.map((ingredient, index) => {
      return (
        <div>
            <p>{ingredient.name}
                <span>
                    <button className="btn-small">Update</button>
                    <button className="btn-small">Delete</button>
                </span>
            </p>
        </div>
      )
    })
  
    return (
      <div>
          <h2>{props.fridge.name}</h2>
          { fridgeElements }
      </div>
    )
  }

  return (
    <div>
        { renderFridge() }
    </div>
  )

}

export default Fridge;