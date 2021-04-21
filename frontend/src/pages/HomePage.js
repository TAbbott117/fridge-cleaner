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
                    <h2>Welcome to <b>Fridgeable!</b></h2>
                    <h3>Sign up or log in below to start saving your ingredients!</h3>
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
                <h2>Hi there, <span className="user">{userInfo.user.username}</span>!</h2>
                <h1>Welcome back to Fridgable!</h1>
                <h4>Your fridges:</h4>
                { fridgeElements }
                <br></br>
                
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
