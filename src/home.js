import { useState } from "react";
const Home = () => {
    // let sayac=0;
    const [sayac,setSayac]=useState(0);
    const  test=()=>{
        // sayac++;
      setSayac(3);
    }
    return ( 
        <div>
            <h2>Ana sehife</h2>
            <p>{sayac}</p>
            <button onClick={test}>tikla</button>
        </div>
     );
}
 
export default Home;