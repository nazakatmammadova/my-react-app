import BlogList from "./bloglist";
import useFetch  from "./useFetch";
const Home = () => {
    const {data:blogs,yuklenir,xeta}=useFetch('http://localhost:3000/yazilar');
    return ( 
        <div className="home">
            {
                xeta && <div className="error">{xeta}</div>
            }
            {
                yuklenir && <div className="loading">Yuklenir...</div>
            }
            {
                blogs &&  
                <BlogList bloglar={blogs} baslik="butun yazilar" />
            }
        </div>
     );
}
 
export default Home;