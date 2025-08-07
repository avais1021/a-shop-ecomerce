import "./Home.css"
import banner from '../../assets/banner.avif'
import { category } from "../../category"
import { dummydata } from "../../dummydata"
import Product from "../../components/product/Product"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSerachVal } from "../../reduxToolkit/dataSlice"

const Home = () => {
  const dispatch = useDispatch();
  const searchVal = useSelector(state => state.dataSlice)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(dummydata)


  const handleCategoryClick = (category) => {
    dispatch(getSerachVal(""))
    setSelectedCategory(category)
  }

  useEffect(() => {
    let filtered = dummydata

    // 1. Filter by category
    if (selectedCategory !== "") {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }

    // 2. Filter by search value
    if (searchVal.serachVal.trim() !== "") {
      // filtered = dummydata;
      filtered = dummydata.filter(item =>
        item.name.toLowerCase().includes(searchVal.serachVal.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, searchVal])

  return (
    <>
      <section className="banner">
        <img src={banner} alt="banner" />
      </section>

     {!searchVal.serachVal &&  <section className="categories">
        {category.slice(0, 5).map((item) => (
          <div
            className="items"
            key={item.id}
            onClick={() => handleCategoryClick(item.name)}
          >
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </section>
     }

      <section className="trending_products">
        {filteredProducts.slice(0, 7).map((data) => (
          <Product key={data.id} data={data} />
        ))}
      </section>
    </>
  )
}

export default Home
