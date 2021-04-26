import { Redirect } from "react-router-dom"
import { Jumbotron, Form, Button } from 'react-bootstrap'
import { useState } from "react"

function BrewerySearch(props){
  const [zip, setZip] = useState(null)
  const [redirect, setRedirect] = useState(false)

  //Takes form data and formats ingredients to be queried in RecipePuppy api call
  const handleSearch = (e) => {
    e.preventDefault()
    let zip = e.target.elements[0].value
    setZip(zip)
    setRedirect(true)
}

  let breweryLink = `breweries/${zip}`

  function renderContent(){
    if(!redirect){
      return(
        <Jumbotron>
          <div id="recipesearch">
            <h2><b>Fridgable</b> Brewery Search</h2>
            <p>(Powered by <a href= "https://www.openbrewerydb.org/">Open Brewery DB</a>)</p>
            <Form onSubmit={handleSearch}>
              <Form.Group controlId="zip">
                <Form.Label>Enter your zip code to find breweries near you!</Form.Label>
                <Form.Control type="zip" placeholder="Enter zip code"/>
              </Form.Group>
              <Button variant="dark" type="submit">Find Breweries!</Button>
            </Form>
          </div>
        </Jumbotron>
      )
    }
    return <Redirect to={breweryLink}/>
  }
  return(
    <div>
      {renderContent()}
    </div>
  )
}
export default BrewerySearch;