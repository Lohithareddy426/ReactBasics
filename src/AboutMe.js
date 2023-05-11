import "./AboutMe.css"
import Learning from "./Learning"
import Practice from "./Practice"
import sunrise from "./Images/sunrise.jpg"
import cooking from "./Images/cooking.jpg"
import readingbooks from "./Images/readingbooks.jpg"
import travel from "./Images/travel.jpg"
import Counter from "./count"

const MyDetails = {
  name : 'Lohitha',
  experience : '7 Years',
  title : '.Net Developer',
  skills : 'C#, .Net, Web API and SQL',
  hobbies : 'cooking, reading books and drawings',
  imageURL : sunrise,
  hobbyPics : [{imgUrl : readingbooks, altname :"Readingbooks" }, 
                {imgUrl : cooking, altname :"Cooking" },
                {imgUrl : travel, altname :"Travel" } ],  
  anotherimageURL : 'https://th.bing.com/th/id/R.35b7cf10203ae316c59e65b9f0c6d60d?rik=PEZxCxVcGh5lEw&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2017%2f12%2f11%2fnature-desktop-background_123026895_313.jpg&ehk=rvr98svQL12hNeYouWPK7AvyXVnHaRJWDvovllsJxRs%3d&risl=1&pid=ImgRaw&r=0'
  }

const checkConditon = true;
let knowMore = true;

const Details = () => {
  return (
    <div className="Details">
      <p>I'm {MyDetails.name}</p>
    </div>
  )
}
const Experience = () => {
  return (
    <div className="Experience">
      <p>I've more than {MyDetails.experience} of experience as {MyDetails.title}</p>
    </div>
  )
}

const Skills = () => {
  return (
    <div className="Skills">
       <p>Skills are {MyDetails.skills}</p>
    </div>
  )
}


const Interest = () => {
  return (
    <div className="Interest">
      <p>I'm interested in learning React</p>
    </div>
  )
}

const hobbiesList = MyDetails.hobbyPics.map( h => 
  <li key={h.altname}>
      <img src={h.imgUrl} alt={h.altname} style={{height:200, width: 200}} ></img>
  </li>
)

const Hobbies = () => {
  return (
    <div className="Hobbies">
      <p>My Hobbies are</p>
      <ul>
        {hobbiesList}
      </ul>
        
    </div>
  )
}
const PersonalInfo = () => {
  return (
    <div className="someMore">
    <Hobbies></Hobbies>

    <p>I love spending time in Nature</p>
    <img src={MyDetails.imageURL} alt={"Sunrise Image from local folder"} ></img>
    <img src={MyDetails.anotherimageURL} alt={MyDetails.name + " Sunset image"} style={{ height: 200, width: 200 }}></img>
    <p>Here I'm</p>
    <img src={require("./Images/lohithaPic.jpg")} alt={MyDetails.name} style={{ height: 200, width: 200 }}></img>
    </div>
  )
}

function AboutMe() {
  return (
    <div className="AboutMe">
      <Details></Details>
      <Experience></Experience>
      <Skills></Skills>   
      {checkConditon && <Learning></Learning> }
      {knowMore ? ( <PersonalInfo></PersonalInfo>) : (<Interest></Interest>) }
    <Practice></Practice>
   
    </div>
  )
}
export default AboutMe

