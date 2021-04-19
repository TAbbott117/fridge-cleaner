import { Link } from "react-router-dom"
import FridgeAPI from "../api/FridgeAPI"


function LoginPage(props) {
    async function handleLogin(e) {
        e.preventDefault()
        let credentials = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        let data = await FridgeAPI.login(credentials)
        if (data && data.token) {
            let userInfo = {
                token: data.token,
                user: data.user
            }
            props.handleLogin(userInfo)
            props.history.push("/") // redirect to home page on successful login
        }
    }

    return (
        <div>
            <h2>Account Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form">          
                    <label className="form-label" htmlFor="username">Username: </label>
                    <input className="form-input" name="username" type="text" placeholder="username"></input>
                    
                    <label className="form-label" htmlFor="password">Password: </label>
                    <input className="form-input" name="password" type="password" placeholder="password"></input>
                    
                    <span></span>
                    <button className="form-button" type="submit">Login</button>
                </div>
            </form>
            <br />
            <p className="gray">New user? Click <Link to="/signup">here</Link> to register</p>
        </div>
    )
}

export default LoginPage;