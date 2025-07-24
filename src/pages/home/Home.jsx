import "./Home.css"
import banner from '../../assets/banner.avif'
import { category } from "../../category"
import { dummydata } from "../../dummydata"
import Product from "../../components/product/Product"
import { useState } from "react"

const Home = () => {

  let [productData , setProductData] = useState(dummydata)

  // console.log(productData,'productData');

  const filterProduct = (category) => {
    console.log(category,'category');
      const filterPData = dummydata.filter((item) => (item.category === category))
      setProductData(filterPData);
      console.log(filterPData,'filterPData');
  }

  return (
    <>
      <section className="banner">
        <img src={banner} alt="banner" />
      </section>

      <section className="categories">
        {category.slice(0,5).map((item)=> { 
          return(
            <div className="items" key={item.id} onClick={ () => filterProduct(item.name)}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          )
        })}
      </section>

      <section className="trending_products">
        {productData.slice(0,7).map((data) => {
          return(
            <Product key={data.id} data={data} />
          )
        })}
      </section>
    </>
    
  )
}

export default Home
