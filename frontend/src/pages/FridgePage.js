import { useEffect, useState, useContext } from "react"
import UserContext from "../contexts/UserContext"
import Fridge from "../components/Fridge"
import FridgeAPI from "../api/FridgeAPI"
import { getUserFridge } from "../api/UserAPI"

function FridgePage(props) {
    // states
    const [fridge, setFridge] = useState(null)

    // contexts
    const userInfo = useContext(UserContext)

    // effects
    useEffect(() => {
        getFridge(props.match.params.fridgeId)
    }, [props.match.params.fridgeId])

    async function getFridge(fridgeId) {
        let token = userInfo ? userInfo.token : ""
        let data = await FridgeAPI.fetchFridge(fridgeId, token)
        setFridge(data)
    }

    // renders
    return (
        <div>
            <Fridge fridge={fridge} />
        </div>
    )
}

export default FridgePage;