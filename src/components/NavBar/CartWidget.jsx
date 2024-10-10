import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <FaShoppingCart className="icon-cart" size={30}/>
      <p>2</p>
    </div>
  )
}

export default CartWidget