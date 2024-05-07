import { useState, useEffect } from "react";
import Query from "../query/Query";
import "./profileQueries.scss";
import { v4 } from 'uuid'


 const ProfileQueries = () => {
  //TEMPORARY
  const auth = localStorage.getItem("user");
  let parentId = JSON.parse(auth)._id
  const [Queries, setQueires] = useState([])
  useEffect(()=>{
    getQueries()

}, [])
const getQueries = async ()=>{
  
  let result = await fetch(`http://localhost:8000/getProfileQueries/${parentId}`,{
      headers:{
          Authorization: JSON.parse(localStorage.getItem('token'))
      }
  });
  result = await result.json();
 // console.log("hloo" , result)
 console.log(result.result)
  setQueires(result)
}
  return <div className="queries">
    {Queries.map(query=>(
      <Query query={query} key={v4()}/>
    ))}
  </div>;
};

export default ProfileQueries;