import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalCount } from '../store/cartSlice'

export default function Header() {
  const total = useSelector(selectTotalCount)

  return (
    <div className="navbar">
      <NavLink className="brand" to="/">Leaf & Loft</NavLink>

      <nav>
        <NavLink to="/" end>Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <span className="cart-pill" title="Items in cart">
          <span role="img" aria-label="cart">🛒</span>
          <span>{total}</span>
        </span>
      </nav>
    </div>
  )
}
