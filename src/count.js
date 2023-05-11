import { useState } from "react"
import like from "./Images/like.png"
import unlike from "./Images/unlike.png"
import "./count.css"

const Counter = () => {
  let [counter,setcounter] = useState(25)

  const LikeClicked = () => {
    setcounter(counter+1)
  }

  const UnlikeClicked = () => {
    setcounter(counter-1);
  }
return (
  <div className="Counter">    
    <button id="likebtn" onClick={LikeClicked}><img src={like} id="LikeImg" alt="Like"></img></button>
    <button id="unlikebtn" onClick={UnlikeClicked}><img src={unlike}  id="UnlikeImg" alt="Not impressed"></img></button>
    <h4 id="likesCount">{counter} Likes</h4>
  </div>
)
}

export default Counter



