import {Jumbotron, Carousel, Button} from 'react-bootstrap'
import { Link } from "react-router-dom"

function Recipe(props) {
    
    // renders
    function renderRecipes (){
        if(!props.recipes){
            return null
        }

        let recipeOptions = props.recipes.results.map((recipe, index) => {
            return(
                <Carousel.Item>
                    <img style={{"width":"500px", "height":"280px"}}
                        className="d-block w-100"
                        src="https://fhba.com/wp-content/uploads/2015/11/content-e1472587975551.jpg"
                        alt={recipe.title}
                    />
                    <Carousel.Caption>
                        <h2>{recipe.title}</h2>
                        <p>Ingredients needed: {recipe.ingredients}</p>
                        <Button href={recipe.href} variant="dark">Full Recipe</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })

        return(
            <Jumbotron>
                <h2>Recipe Results: </h2>
                <br></br>
                <Carousel id="recipecarousel">
                    { recipeOptions }
                </Carousel>
                <br></br>
                <h5>Not seeing something you like? <Link to="/recipes">Click here to go back and try again with different ingredients!</Link></h5>
                <br></br>
                <h5>Looking to wash down your tasty food with a cold brewsky? <Link to="/breweries">Click here to try our Brewery Finder!</Link></h5>
            </Jumbotron>
        )
    }

    return (
        <div>
            { renderRecipes() }
        </div>
    )
}

export default Recipe;

{/* <div>
                    <h4>{ recipe.title }</h4>
                    <img src={recipe.thumbnail} />
                    <p>Ingredients needed: {recipe.ingredients}</p>
                    <a href={recipe.href}>Link to full {recipe.title} recipe</a>
                </div> */}