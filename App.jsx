import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'

export default function App() {
  return (
    <div>
      <header>
        <div className="container">
          <Header />
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  )
}
