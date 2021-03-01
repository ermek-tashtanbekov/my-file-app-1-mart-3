import { useState } from "react";

function Countro() {
    let [a, b] = useState("");
    return(
        <div>
            <h1>YOUR NAME IS"{a}"</h1>
            <input type="text" placeholder="NAME" onInput={(event) => b(event.target.value)} ></input>
        </div>
    )

}
export default Countro;
