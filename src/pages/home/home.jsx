import HeroSlider from "../../components/heroSlider";
import './home.css';
import SlideProduct from "../../components/slideProducts/slideProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import SlideLoading from "../../components/slideProducts/slideLoading";
import Animation from '../../components/animation'
function Home() {
    const [products , setProducts] = useState({})
    const [loading , setLoading] = useState(true)
    const categories = [
        "smartphones",
        "mobile-accessories",
        "laptops",
        "tablets",
        "sunglasses",
        "mens-watches"
    ];

    useEffect(()=> {
        const getProducts = async ()=> {
            try{
                const results = await Promise.all(
                    categories.map(async (category) => {
                        const response = await axios.get(`https://dummyjson.com/products/category/${category}`)
                        return {[category]: response.data.products}
                    })
                )
                const productData = Object.assign({} , ...results)
                setProducts(productData)
            }catch(error) {
                console.log(error)
            }finally {
                setLoading(false)
            }
        }
        getProducts()
    },[])
    
    return (
        <Animation>
            <div>
                <HeroSlider />
                {loading ? 
                    (<SlideLoading />):(
                    categories.map((category)=> {
                        return <SlideProduct key={category} title={category} data={products[category]}/>
                    })
                )}
            </div>
        </Animation>
    )
}

export default Home;