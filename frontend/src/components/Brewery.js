import {Jumbotron, Button} from 'react-bootstrap'
import { Link } from "react-router-dom"

function Brewery(props) {
    
    // renders
    function renderBreweries (){
        if(!props.breweries){
            return null
        }

        let breweryOptions = props.breweries.map((brewery, index) => {
            return(
                <div id="brewery">
                  <h2>{ brewery.name }</h2>
                  <p>{ brewery.street }</p>
                  <p>{ brewery.city }, { brewery.state }</p>
                  <a href={brewery.website_url}>{brewery.name} Site</a>
                </div>
            )
        })

        return(
            <Jumbotron>
                <h2>Brewery Results: </h2>
                <br></br>
                { breweryOptions }
                <br></br>
                <h5>Have a cold one for me!</h5>
                <br></br>
                <h5>Need some food to go with your beer? <Link to="/recipes">Click here to try our Recipe Search!</Link></h5>
            </Jumbotron>
        )
    }

    return (
        <div>
            { renderBreweries() }
        </div>
    )
}

export default Brewery;