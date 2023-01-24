import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id}=useParams();
    const history=useHistory();
    const {data,yuklenir,xeta}=useFetch("http://localhost:8000/yazilar/"+id);
    const handleDelete=()=>{
      fetch("http://localhost:8000/yazilar/"+id,{
        method:"DELETE"
      }).then(()=>{
        history.push('/')
      })
    }
    return ( 
        <div className="blog-details">
          {yuklenir && <div>Yuklenir...</div>}
          {xeta && <div>{xeta}</div>}
          {data && (
            <article>
                <h2>{data.ad}</h2>
                <p>yazici: {data.yazici}</p>
                <div>{data.content}</div>
                <button onClick={handleDelete}>Sil</button>
            </article>
          )}
        </div>
     );
}
 
export default BlogDetails;