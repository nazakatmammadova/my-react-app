import {Link} from 'react-router-dom'
const NotFound = () => {
    return ( 
        <>
        <div className="not-found">
            <h2>Yanlis sehife</h2>
            <p>Sehife tapilmadi</p>
            <Link to='/'>Ana sehife</Link>
        </div>
        </>
     );
}
 
export default NotFound;