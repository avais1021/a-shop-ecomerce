import "./Home.css"
import banner from '../../assets/banner.avif'
import { category } from "../../category"
import { dummydata } from "../../dummydata"
import Product from "../../components/product/Product"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Home = () => {

  const searchVal = useSelector(state => state.dataSlice)

  console.log(searchVal.serachVal,'searchVal');

  let [productData , setProductData] = useState(dummydata)
  

  // console.log(productData,'productData');

  const filterProduct = (category) => {
    console.log(category,'category');
      const filterPData = dummydata.filter((item) => (item.category === category))
      setProductData(filterPData);
      console.log(filterPData,'filterPData');
  }

  const filterproductsCard = productData.filter((item) => {
    return item.name.toLowerCase().includes(searchVal.serachVal.toLowerCase());
  })

  useEffect(() => {

  } , [])

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
        {/* {productData.slice(0,7).map((data) => { */}
        {filterproductsCard.slice(0,7).map((data) => {
          return(
            <Product key={data.id} data={data} />
          )
        })}
      </section>
    </>
    
  )
}

export default Home
