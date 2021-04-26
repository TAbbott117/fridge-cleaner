// src/pages/IngredientPage.js
// Tyler Abbott
// 4/26/2021

import { useEffect, useState, useContext } from "react"
import UserContext from "../contexts/UserContext"
import Ingredient from "../components/Ingredient"
import FridgeAPI from "../api/FridgeAPI"

function IngredientPage(props) {
    // states
    const [ingredient, setIngredient] = useState(null)

    // contexts
    const userInfo = useContext(UserContext)

    // effects
    useEffect(() => {
        getIngredient(props.match.params.ingredientId)
    }, [props.match.params.ingredientId])

    async function getIngredient(ingredientId) {
        let token = userInfo ? userInfo.token : ""
        let data = await FridgeAPI.fetchIngredient(ingredientId, token)
        setIngredient(data)
    }

    // renders
    return (
        <div>
            <Ingredient ingredient={ingredient} />
        </div>
    )
}

export default IngredientPage;