import { Button, Table } from "react-bootstrap"
import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../contexts/UserContext"
import FridgeAPI from "../api/FridgeAPI"

function Fridge(props){

  // contexts
  const userInfo = useContext(UserContext)

  function deleteIngredient(ingredientId){
    let token = userInfo ? userInfo.token : ""
    FridgeAPI.deleteIngredient(ingredientId, token)
        //.then(window.location.reload())
  }

  function renderFridge(){
    if(!props.fridge){
      return null
    }

    let fridgeElements = props.fridge.ingredients.map((ingredient, index) => {
      return (
        <tbody>
          <td>{ingredient.name}</td>
          <td>{ingredient.expiry_date}</td>
          <td><Button className="btn-small" variant="danger" onClick={() => deleteIngredient(ingredient.id)}>Delete</Button></td>
        </tbody>
      )
    })
  
    return (
      <div>
          <h2>{props.fridge.name}</h2>
          <br></br>
          <h5>Ready to use some of these ingredients? <Link to="/recipes">Click here to search some recipes!</Link></h5>
          <br></br>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Estimated Expiration Date</th>
                <th>Options</th>
              </tr>
            </thead>
            { fridgeElements }
          </Table>
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