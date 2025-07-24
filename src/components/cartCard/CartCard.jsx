
import "./cartCard.css"
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../reduxToolkit/store';

// const CartCard = ({ id, image, name, price }) => {
const CartCard = ({ id, image, name, price }) => {

    const dispatch = useDispatch()

    return (
        <div className='cartCard'>
                <img src={image} alt="image" />
                <div>
                    <h3>{name}</h3>
                    <p>₹ {price}</p>
                </div>
                <button onClick={() => dispatch(RemoveItem(id)) }>Remove <MdDelete /></button>
        </div>
    )
}

export default CartCard
