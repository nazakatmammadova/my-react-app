import { useState,useEffect} from "react";

const useFetch=(url)=>{
    const [data,setdata] = useState(null)
    const[yuklenir,setyuklenir]=useState(true)
    const[xeta,setxeta]=useState(null)

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok) throw Error('Melumatlar cekile bilmedi')
            return res.json()
        })
        .then(data=>{
            setdata(data)
            setyuklenir(false)
        })
        .catch(err=>{
            setyuklenir(false)
            setxeta(err.message);
        })
   },[url])

   return{data,yuklenir,xeta}
}
export default useFetch;
