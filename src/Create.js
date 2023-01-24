import {useState} from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [basliq,setbasliq] = useState('')
    const[content,setcontent]=useState('')
    const[yazici,setyazici]=useState('harry')
    const [yuklenir,setyuklenir]=useState(false)
    const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        setyuklenir(true)
        const yazi={ad:basliq,content,yazici}
        fetch("http://localhost:8000/yazilar/",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(yazi)
        }).then(()=>{
            setyuklenir(false)
            history.push('/')
        })
    }
    return ( 
        <div className="create">
            <h2 style={{color:'#ff793f'}}>Yeni yazi elave et</h2>
            <form onSubmit={handleSubmit}>
                <label>Yazi Basligi:</label>
                <input type="text" required  value={basliq} onChange={(e)=>setbasliq(e.target.value)}/>
                <label>Yazinin Contenti:</label>
                <textarea required value={content} onChange={(e)=>setcontent(e.target.value)}>

                </textarea>
                <label>Yazici:</label>
                <select value={yazici} onChange={(e)=>setyazici(e.target.value)}>
                    <option value="harry">Harry</option>
                    <option value="luffy">Luffy</option>
                    <option value="zoro">Zoro</option>
                </select>
                {!yuklenir && <button>Elave et</button>}
                {yuklenir && <button disabled>Yuklenir</button>}
            </form>
        </div>
     );
}
 
export default Create;