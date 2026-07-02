import React from "react";
import { useState, useRef } from "react";

function App(){

    const [currentCount, setCurrentCount] = useState(0);
    const timer = useRef();
     
    
    function StartClock(){  
      let value= setInterval( function(){
        setCurrentCount(c => c + 1);
      }, 1000)
      timer.current = value;
   }

   function StopClock(){
    clearInterval(timer.current)
   }
    return(
        <div>
            <div style = {{background: "#8e44ad"}}>
                <b>{currentCount}</b> <br />
                <button onClick={StartClock}>Start</button>
                <button onClick={StopClock}>Stop</button>
            </div>
        </div>
    )
}

export default App;




