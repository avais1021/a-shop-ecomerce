
import { useSelector } from 'react-redux'
import CartCard from '../../components/cartCard/CartCard';

const Cart = () => {

  const cartArray = useSelector(state => state)
  console.log(cartArray, 'cartArray');

  // let totalPrice = cartArray.cart.reduce((a,b) => a+b.price,0);
  let totalPrice = cartArray.cart.reduce((a, b) => {
    return a + b.price;
  }, 0);

  console.log(totalPrice, 'totalPrice');

  // LEARN REDUCE METHOD ------   

  // const froot = ["mango" , "apple" , "grapes"];
  // console.log(typeof(froot),'froot');

  // let reduce = froot.reduce((a,b) => {
  //   return b;
  // },"")

  // const array = [{ name: "a", val: 1 }, { name: "b", val: 2 }, { name: "c", val: 3 }];

  // let answer = array.reduce((a, b) => {
  //   return a + b.val;
  // }, 2)

  // console.log(answer, 'answer');


  return (
    <section className='cart'>
      <h1>Cart page</h1>
      <div>
        {cartArray.cart.map((item) => {
          return (
            <CartCard key={item.id} {...item} />
          )
        })}
      </div>
      <div className="totalValue">
        <p>Total Products  : <span><b>{cartArray.cart.length}</b></span></p>
        <p>Total Price : <span><b>Rs {totalPrice}</b></span></p>
      </div>
    </section>
  )
}

export default Cart
