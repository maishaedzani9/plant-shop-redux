import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectIsInCart } from '../store/cartSlice'

export default function PlantCard({ plant }) {
  const dispatch = useDispatch()
  const inCart = useSelector(selectIsInCart(plant.id))

  const handleAdd = () => {
    dispatch(addToCart(plant))
  }

  return (
    <div className="card">
      <img src={plant.thumbnail} alt={plant.name} />
      <div className="body">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', gap: '0.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '1rem' }}>{plant.name}</h3>
          <span className="price">R{plant.price.toFixed(2)}</span>
        </div>
        <button className="btn" onClick={handleAdd} disabled={inCart} style={{ marginTop: '0.5rem', width: '100%' }}>
          {inCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
