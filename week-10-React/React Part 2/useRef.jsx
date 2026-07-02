import React from "react";
import { useRef } from "react";

function App(){
    const inputRef = useRef();

    function focusOnInput(){
        inputRef.current.focus();
    }

    return(
        <div>
            Sign Up Page <br />
            Username: <input ref={inputRef} type={"text"}></input><br /> <br />
            Password: <input type={"text"}></input> <br /><br />
            <button onClick={focusOnInput}>Submit</button>
        </div>

    )

}

export default App;
