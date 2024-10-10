import CartWidget from "./CartWidget"
import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="brand">
            <h2>Ecommerce</h2>
        </div>

        <ul>
          <li>Alimento</li>
          <li>Accesorios</li>
        </ul>

        <CartWidget />
    </nav>
  )
}

export default NavBar