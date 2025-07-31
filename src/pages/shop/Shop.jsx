import { FaShopify } from "react-icons/fa";
import "./shop.css"
import { category } from "../../category";
import { useEffect, useState } from "react";
import Product from "../../components/product/Product";
import { dummydata } from "../../dummydata";
import { useDispatch, useSelector } from "react-redux";
import { getSerachVal } from "../../reduxToolkit/dataSlice";
const Shop = () => {
    const dispatch = useDispatch();
    let [productData, setProductData] = useState(dummydata)

    console.log(productData, 'productData');

    const [selectedCategory, setSelectedCategory] = useState("")

    const inputVal = useSelector(state => state.dataSlice.serachVal);

    console.log(inputVal, 'inputVal');

    const filterProduct = (category) => {

        dispatch(getSerachVal(""))
        setSelectedCategory(category)
        console.log(category, 'category');

    }

    useEffect(() => {

        let dublicatedummyArray = dummydata;

        console.log(dublicatedummyArray, 'dublicatedummyArray');

        if (selectedCategory !== "") {
            dublicatedummyArray = dublicatedummyArray.filter((item) => item.category === selectedCategory)
        }
        
        if (selectedCategory === "All") {
            dublicatedummyArray = dummydata;
        }

        if (inputVal !== "") {
            dublicatedummyArray = dummydata.filter((item) => item.name.toLowerCase().includes(inputVal.toLowerCase()))
        }

        setProductData(dublicatedummyArray)

    }, [selectedCategory ,inputVal])


    return (
        <>

            <section className='shop'>
                <h1>Shop <span><FaShopify />  </span></h1>
            </section>

            <section className="categories">
                {category.map((item) => {
                    return (
                        <div className="items" key={item.id} onClick={() => filterProduct(item.name)}>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </section>

            <section className="trending_products">
                {productData.map((data) => {
                    return (
                        <Product key={data.id} data={data} />
                    )
                })}
            </section>

        </>
    )
}

export default Shop
