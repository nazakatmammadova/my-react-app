import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id}=useParams();
    const {data,yuklenir,xeta}=useFetch("http://localhost:8000/yazilar/"+id);
    return ( 
        <div className="blog-details">
          {yuklenir && <div>Yuklenir...</div>}
          {xeta && <div>{xeta}</div>}
          {data && (
            <article>
                <h2>{data.ad}</h2>
                <p>yazici: {data.yazici}</p>
                <div>{data.content}</div>
            </article>
          )}
        </div>
     );
}
 
export default BlogDetails;