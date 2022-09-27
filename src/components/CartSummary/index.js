// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="summary-container">
          <h1 className="order-summary-heading">
            Order Total:{' '}
            <span className="total-cart-value">
              Rs {total}
              /-
            </span>
          </h1>
          <p className="total-items">{cartList.length} Items in cart</p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
