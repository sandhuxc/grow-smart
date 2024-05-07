import Guideline from "../guideline/Guideline";
import "./Guidelines.scss";
import { useState, useEffect } from "react";

const Guidelines = () => {

  const liked = false;
  const auth = localStorage.getItem("user");
  let nutpic = JSON.parse(auth).nutprofilePic;
  let nutName = JSON.parse(auth).name;
  let nutrole = JSON.parse(auth).role;
   const [nutposts, setnutPosts] = useState([]);
  useEffect(() => {
    getnutPosts();
  }, []);
const getnutPosts = async ()=>{
  
  let result = await fetch('http://localhost:8000/getnutPosts',{
      headers:{
          Authorization: JSON.parse(localStorage.getItem('token'))
      }
  });
 result = await result.json();
    if (Array.isArray(result)) {
      setnutPosts(result);
    }
}
  return <div className="guidelines">
     <div className="w3-container w3-content1" style={{ 
}} > 
<div class="w3-row">
<div class="w3-col m3">
  
  <div class="w3-card w3-round w3-white w3-margin">
    <div class="w3-container">
     <h4 class="w3-center">My Profile</h4>
     <p class="w3-center"><img         src={`http://localhost:8000/${nutpic}`}  class="w3-circle" style={{height:"106px",width:"106px"}} alt="Avatar"/></p>
     <hr/>
     <p><i class="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> {nutName}</p>
     <p><i class="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> {nutrole} </p>
     
    </div>
  </div>
  <br/>
  
      

      
    
  </div>
<br/>

<div class="w3-col m7 w3-padding" style={{whiteSpace:"10px"}}>
    <div className="w3-container w3-content1 posts">
    
   
    {nutposts.map(guideline=>(
      <Guideline guideline={guideline} key={guideline.id}/>
    ))}
    </div>;
  </div>
  
     
      
     
      </div>
  </div>
  </div>
  
};

export default Guidelines;