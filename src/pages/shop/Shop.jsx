import { FaShopify } from "react-icons/fa";
import "./shop.css"
import { category } from "../../category";
import { useState } from "react";
import Product from "../../components/product/Product";
import { dummydata } from "../../dummydata";
const Shop = () => {

    let [productData, setProductData] = useState(dummydata)

    const filterProduct = (category) => {
        console.log(category, 'category');
        if(category === "All"){
            setProductData(dummydata);
        }else{
            const filterPData = dummydata.filter((item) => (item.category === category))
            setProductData(filterPData);
            console.log(filterPData, 'filterPData');
        }
    }


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
