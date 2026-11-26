import { useContext } from "react";
import Animation from "../../components/animation";
import Product from "../../components/slideProducts/product";
import {AllContext} from "../../components/context/context";
import './favorite.css'
function Favorite() {
    const {favorites} = useContext(AllContext);
    // const [loading , setLoading] = useState(true)
    return (
        <Animation>
            <div className="container">
                <div className="top-slide">
                    <h2>Your Favorites :</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
                {favorites.length === 0 ?(<p>No Favorite Itmes</p>
                ):(
                    <div className="products">
                        {favorites.map((fav,index)=> {
                        return <li><Product key={index} item={fav}/></li>
                        })}
                    </div>
                )}
            </div>
        </Animation>
    )
}

export default Favorite;