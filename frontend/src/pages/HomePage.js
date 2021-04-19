import { Link } from "react-router-dom"
import { useContext } from "react" 
import UserContext from "../contexts/UserContext"

function HomePage(props) {
    // contexts
    const userInfo = useContext(UserContext)

    // renders
    function renderContent() {
        if (!userInfo) {
            return (
                <div>
                    <h2>You are not logged in.</h2>
                    <Link to="/login"><button>Login</button></Link>
                    &nbsp;
                    <Link to="/signup"><button>Register</button></Link>
                </div>
            )
        }
            
        let fridgeElements = userInfo.user.fridges.map((fridge, index) => {
            return <Link key={index} to={`fridge/1`}>{fridge.name}</Link>
        })

        return (
            <div>
                <h2>You are logged in as <span className="user">{userInfo.user.username}</span></h2>
                { fridgeElements }
            </div>
        )
    }
    
    return (
        <div>
            { renderContent() }
        </div>
    )
}

export default HomePage;
