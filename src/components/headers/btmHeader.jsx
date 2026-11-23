import './header.css'
import { FaBars } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import { Link , useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
function BtmHeader() {
    const location = useLocation()
    const [categories , setCategories] = useState([])
    const [isCategoryOpen , setIsCategory] = useState(false)
    const [linksBar , setLinksBar] = useState(false)
    const storedUsername = localStorage.getItem("username");
    const navigation = useNavigate()
    useEffect(()=> {
        setIsCategory(false)
        setLinksBar(false)
    },[location])

    useEffect(()=> {
        axios.get(`https://dummyjson.com/products/categories`)
        .then((response)=> setCategories(response.data))
        .catch((error)=> console.log(error))
    },[])
    
    const linksCategory = [
        {id: 1, title: "Home", link: "/"},
        {id: 2, title: "About", link: "/about"},
        {id: 3, title: "Accessories", link: "/accessories"},
        {id: 4, title: "Blog", link: "/blog"},
        {id: 5, title: "Contact", link: "/contact"},
    ];

    const logout = ()=> {
        navigation("/register")
        localStorage.clear();
    }


    return (
        <div className='btm-header'>
            <div className="container">
                <nav>
                    <div className='category-nav' onClick={()=> setIsCategory(!isCategoryOpen)}>
                        <FaBars />
                        <p>Browser Category</p>
                        <IoMdArrowDropdown />
                        <div className={`category-list ${isCategoryOpen? 'active' : ""}`}>
                            {categories.map((category)=> {
                                return <Link to={`category/${category.slug}`} key={category.slug}>{category.name}</Link>
                            })}
                        </div>
                    </div>
                </nav>
                <div className={`links-icons ${linksBar? 'active': ""}`}>
                    <span className='links-arrow' onClick={()=> setLinksBar(!linksBar)}><FaArrowRight /></span>
                    <div className="nav-links">
                        {linksCategory.map((category)=> (
                            <li key={category.id} className={location.pathname === category.link? "active" : ""}>
                                <Link to={category.link}>{category.title}</Link>
                            </li>
                        ))}
                    </div>
                    <div className='icons'>
                        {storedUsername ? 
                            <>
                                <p>{storedUsername}</p>
                                <Link to="" onClick={logout}><MdLogout /></Link>
                            </>
                            :
                            <>
                                <Link to="/register" ><MdLogin /></Link>
                            </>
                        }
                    </div>
                </div>
                <span className='links-bar' onClick={()=> setLinksBar(!linksBar)}><FaBars /></span>
            </div>
        </div>
    )
}

export default BtmHeader;