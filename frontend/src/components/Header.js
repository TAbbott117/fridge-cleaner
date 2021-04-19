import { Link } from "react-router-dom"

function Header(props) {
  return (
    <header>
      <h1>Fridge Cleaner</h1>
      <div id="header-links">
        <Link className="cleanlink" to="/">Home</Link>
      </div>
    </header>
  )
}

export default Header;