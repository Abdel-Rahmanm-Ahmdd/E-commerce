import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProducts/product";
import './categoryPage.css';
import SlideLoading from "../../components/slideProducts/slideLoading"
import Animation from "../../components/animation"
function CategoryPage() {
    const {category} = useParams()
    const [products , setProducts] = useState([])
    const [loading , setLoading] = useState(true)
    useEffect(()=> {
        axios.get(`https://dummyjson.com/products/category/${category}`)
        .then((response)=> setProducts(response.data.products))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])

    return (
        <Animation>
            <div className="category-products">
                {loading? (<SlideLoading key={category}/>) : (
                    <div className="container">
                        <div className="top-slide">
                            <h2>{category}: {products.limit}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        </div>
                        <div className="products">
                            {products.map((item,index)=> {
                                return <Product key={index} item={item}/>
                            })}
                        </div>
                    </div>
                )}
            </div>
        </Animation>
    )
}

export default CategoryPage;