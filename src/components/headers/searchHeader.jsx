import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './header.css'
import { Link } from "react-router-dom";

function SearchHeader() {
    const [searchTerm , setSearchTerm] = useState("")
    const [suggestions , setSuggestions] = useState([])
    const location = useLocation()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`)
        }
        setSuggestions([])
    }

    useEffect(()=> {
        const getSuggestions = async ()=> {
            if (!searchTerm.trim()) {
                setSuggestions([])
                return;
            }
            try{
                const response = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
                setSuggestions(response.data.products.slice(0,5) || [])
            }catch (error) {
                console.log(error)
            }
        }
        const time = setTimeout(() => {
            getSuggestions()
        }, 300);
        return ()=> clearTimeout(time)
    },[searchTerm])

    useEffect(()=> {
        setSuggestions([])
    },[location])


    return (
        <div className="searchBox-container">
            <form className="search-box" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search For Products" 
                onChange={(e)=> setSearchTerm(e.target.value)}
                autoComplete="off"
                />
                <button>
                <FaSearch />
                </button>
            </form>
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((item,index)=> (
                        <Link key={index} to={`/products/${item.id}`}>
                            <li><img src={item.images[0]}/><span>{item.title}</span></li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchHeader;
