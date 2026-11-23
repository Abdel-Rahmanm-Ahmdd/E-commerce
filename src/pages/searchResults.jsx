import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Animation from "../components/animation"
import SlideLoading from "../components/slideProducts/slideLoading"
import Product from "../components/slideProducts/product"
function SearchResults() {
    const query = new URLSearchParams(useLocation().search).get("query");
    const [results , setResults] = useState([])
    const [loading , setLoading] = useState(true)
    useEffect(()=> {
        const getResults = async ()=> {
            try{
                const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
                setResults(response.data.products || [])
            } catch (error) {
                console.log("Search :" , error)
            }finally {
                setLoading(false)
            }
        }
        if (query) getResults();
    },[query])
    
    return (
        <Animation key={query}>
            <div className="category-products">
                {loading? (<SlideLoading key={query}/>) : results.length > 0? (
                    <div className="container">
                        <div className="top-slide">
                            <h2>Results for : {query}</h2>
                        </div>
                        <div className="products">
                            {results.map((item,index)=> {
                                return <Product key={index} item={item}/>
                            })}
                        </div>
                    </div>
                ): <div className="container">
                        <p>No Results Found</p>
                    </div>}
            </div>
        </Animation>
    )
}

export default SearchResults;