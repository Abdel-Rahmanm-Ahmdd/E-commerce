import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './productDetails.css';
import SlideLoading from '../../components/slideProducts/slideLoading';
import SlideProduct from '../../components/slideProducts/slideProduct'
import ProductDetailsLoading from "./productDetailsLoading";
import ProductImages from "./productImages";
import ProductInfo from "./productInfo";
import Animation from '../../components/animation';

function ProductDetails() {
    const {id} = useParams()
    const [product , setProduct] = useState(null);
    const [loading , setLoading] = useState(true);
    const [relatedProducts , setRelatedProducts] = useState([]);
    
    useEffect(()=> {
        const getProducts = async ()=> {
            try{
                const response = await axios.get(`https://dummyjson.com/products/${id}`)
                setProduct(response.data)
            }catch(error) {
                console.log(error)
            }
        }
        getProducts()
    },[id])
    useEffect(()=> {
        if(!product) return;
        axios.get(`https://dummyjson.com/products/category/${product.category}`)
        .then((response)=> {
            return setRelatedProducts(response.data.products)
        }).catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
        console.log(product)
    },[product?.category])

    
    return (
        <Animation key={id}>
            <div className="product-details">
                <div className="container">
                    {loading?(<ProductDetailsLoading />):(
                    <div className="details-content">
                        <ProductImages product={product} />
                        <ProductInfo product={product}/>
                    </div>
                    )}
                </div>
            </div>
            {loading? (<SlideLoading />):(
                <SlideProduct data={relatedProducts} title={product.category.replace("-" , " ")}/>
            )}
        </Animation>
    )
}

export default ProductDetails;