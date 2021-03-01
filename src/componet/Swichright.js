import { useState } from "react";

function Swichright(params) {
    let [a, b] = useState (true) ;
    return(
   
         <div>
             <h1>{a ? "on" : "off"}</h1>
             <button onClick={() => b(!a)}>toggle</button>
         </div>

    );
}
export default Swichright;
