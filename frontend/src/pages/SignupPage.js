import { Link } from "react-router-dom"
import FridgeAPI from "../api/FridgeAPI"

function SignUpPage(props) {
    async function handleSignUp(e) {
        e.preventDefault()
        if (e.target.password.value !== e.target.password2.value) {
            alert("ERROR: password values much match!!")
            return
        }

        let credentials = {
            username: e.target.username.value,
            password: e.target.username.value
        }

        let data = await FridgeAPI.signUp(credentials)
        if (data) {
            props.history.push("login")
        }
    }

    return (
        <div>
            <h2>Register New Account</h2>
            <form onSubmit={handleSignUp}>
                <div className="form">          
                    <label className="form-label" htmlFor="username">Username: </label>
                    <input className="form-input" name="username" type="text" placeholder="username"></input>
                    
                    <label className="form-label" htmlFor="password">Password: </label>
                    <input className="form-input" name="password" type="password" placeholder="password"></input>

                    <label className="form-label" htmlFor="password2">Confirm Password: </label>
                    <input className="form-input" name="password2" type="password" placeholder="confirm password"></input>
                    
                    <span></span>
                    <button className="form-button" type="submit">Sign Up</button>
                </div>
            </form>
            <br />
            <p className="gray">Already registered? Click <Link to="/login">here</Link> to login</p>
        </div>
    )
}

export default SignUpPage;