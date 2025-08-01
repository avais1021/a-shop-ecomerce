
import "./Product.css"
import { useDispatch } from 'react-redux';
// import {AddItem} from "../../reduxToolkit/cartslice.js"
import { AddItem } from "../../reduxToolkit/cartSlice";

const Product = ({ data }) => {

    const dispatch = useDispatch();

    const {id, name, price, category, image } = data;
    return (
        <div className="product" >
            <div className="image">
                <img src={image} alt="image" />
            </div>
            <div className="info">
                <p>{name}</p>
                <p>{category}</p>
                <p>{price}</p>
                <button onClick={() => dispatch(AddItem({id,name,image,price}))} >Add +</button>
            </div>
        </div>
    )
}

export default Product
