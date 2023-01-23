import {useState} from 'react';
const Create = () => {
    const [basliq,setbasliq] = useState('')
    const[content,setcontent]=useState('')
    const[yazici,setyazici]=useState('harry')
    const handleSubmit=(e)=>{
        e.preventDefault();
        const yazi={basliq,content,yazici}
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
                <button>Elave et</button>
            </form>
        </div>
     );
}
 
export default Create;