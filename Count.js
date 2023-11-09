import React,{useState} from "react";
const Count = () => {
 const[clicks,setClicks] = useState(0);
 
  function handleButtonClicks() {
     setClicks(clicks+1);
     }
  return(
     <div>
        <span>You Clicked {clicks}clicks</span>
          <br/>
         <button onClick={handleButtonClicks}>Click Me!</button>
     </div>
    )
}
export default Count;
