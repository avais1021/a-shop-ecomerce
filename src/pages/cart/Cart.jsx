import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../../components/cartCard/CartCard';

const Cart = () => {

  const cartArray = useSelector(state=>state)
  console.log(cartArray,'cartArray');

  return (
    <section className='cart'>
      <h1>Cart page</h1>
        <div>
          {cartArray.cart.map((item) => {
            return(
              <CartCard key={item.id} {...item} />
            )
          })}
        </div>
    </section>
  )
}

export default Cart
