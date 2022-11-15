import { useState,useEffect} from "react";
import BlogList from "./bloglist";
const Home = () => {
   const [blogs,setblogs] = useState([
    {
        id:1,
        ad:"blog adi",
        content:"lorem ipsum dolor lorem...",
        yazici:"Harry"
    },
    {
        id:2,
        ad:"blog adi",
        content:"lorem ipsum dolor lorem...",
        yazici:"Luffy"
    },
    {
        id:3,
        ad:"blog adi",
        content:"lorem ipsum dolor lorem...",
        yazici:"Zoro"
    }
   ])
   useEffect(()=>{})
   const handleClick=(id)=>{
        const newblogs=blogs.filter(blog=>blog.id!==id);
        setblogs(newblogs);
   }
    return ( 
        <div className="home">
            <BlogList bloglar={blogs} baslik="butun yazilar" handleClick={handleClick}/>
        </div>
     );
}
 
export default Home;