import { Link } from "react-router-dom"

function Fridge(props){

  function renderFridge(){
    if(!props.fridge){
      return null
    }

    let fridgeElements = props.fridge.ingredients.map((ingredient, index) => {
      return (
        <div>
            <p>{ingredient.name}
                <span>
                    <Link to={`/fridge/0/ingredient/${ingredient.id}`}>
                        <button className="btn-small">View</button>
                    </Link>
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
          <hr />
          <button>New Ingredient</button>
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