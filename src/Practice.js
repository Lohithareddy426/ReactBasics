
import './practice.css'
import Counter from './count';

const Practice = () => {
  return (
  <div className='Practice'>
    <p id='likeStatement'>Do you like it ! <span></span>   </p>
    <button id="btnYes" onClick={ShowMore}>Yes,Of course !</button>
    <button id="btnOk" onClick={ThatsIt}>No!</button>
     <Counter/>
 
  </div>
  )
  }

  function ShowMore(){
    alert("Thank you. Enjoy learning react!");
  }
  function ThatsIt(){  
     alert("Thank you.");
  }

  export default Practice



