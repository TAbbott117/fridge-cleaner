import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import { useState } from "react"
// components
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import LogoutPage from "./pages/LogoutPage"
import SignUpPage from "./pages/SignUpPage"
import FridgePage from "./pages/FridgePage"
import IngredientPage from "./pages/IngredientPage"
// contexts
import UserContext from "./contexts/UserContext"


function App() {
  const [userInfo, setUserInfo] = useState(null)

  function updateUserInfo(newUserInfo) {
    setUserInfo(newUserInfo)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={userInfo}>
          <Header />
          <main>
              <Route exact path="/" 
                render={() => <HomePage />} />
              <Route exact path="/login" 
                render={(routerProps) => <LoginPage {...routerProps} handleLogin={updateUserInfo}/>} />
              <Route exact path="/logout" 
                render={() => <LogoutPage handleLogout={updateUserInfo}/>} />
              <Route exact path="/signup" 
                render={(routerProps) => <SignUpPage {...routerProps} />} />
              <Route exact path="/fridge/:fridgeId" 
                render={(routerProps) => <FridgePage {...routerProps}/>} />
              <Route exact path="/fridge/:fridgeId/ingredient/:ingredientId" 
                render={(routerProps) => <IngredientPage {...routerProps}/>} />
          </main>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;