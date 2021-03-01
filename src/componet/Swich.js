import { useState } from "react";

function Swich() {
  let [nuber, numberr] = useState (0);
  return(
      <div>
          <h1>{nuber}</h1>
          <button onClick ={() => numberr(nuber++)}>INcriment</button>
      </div>
  ) 
    

}
export default Swich;