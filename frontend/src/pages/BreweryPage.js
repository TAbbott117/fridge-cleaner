// src/pages/BreweryPage.js
// Tyler Abbott
// 4/26/2021

import { useEffect, useState, useContext } from "react"
import UserContext from "../contexts/UserContext"
import Brewery from "../components/Brewery"
import FridgeAPI from "../api/FridgeAPI"

function BreweryPage(props){
  //states
  const [breweries, setBreweries] = useState(null)

  //contexts
  const userInfo = useContext(UserContext)

  //effects
  useEffect(() => {
    getBreweries(props.match.params.zip)
  }, [props.match.params.zip])

  async function getBreweries(zip) {
    let token = userInfo ? userInfo.token : ""
    let data = await FridgeAPI.fetchBreweries(zip, token)
    setBreweries(data)
  }

  //renders
  return(
    <div>
      <Brewery breweries={breweries} />
    </div>
  )
}

export default BreweryPage;


