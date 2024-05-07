import { useState , useEffect } from "react";
import "./comments1.scss";
import { AuthContext } from "../../context/authContext";

const Comments1 = (guideline) => {
  const auth = localStorage.getItem("user");
  let nutprofilePic = JSON.parse(auth).nutprofilePic;
  let nutpostId = guideline._id;
  const [nutcommentText, setnutcommentText] = useState("");
  const [nutpostComment, setnutPostComment] = useState([]);
 useEffect(() => {
    getnutriComments();
  }, []);
  //Temporary
 const getnutriComments = async () => {
      let result = await fetch(
      `http://localhost:8000/getnutPostComments/${nutpostId}`,
      {
        headers: {
          body: JSON.stringify({ nutpostId }),
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      }
      
    );
    result = await result.json();
   setnutPostComment(result);
  };

  const NutPostComment = async () => {
    try{
      let commentedBy = JSON.parse(auth).name;
      let nutpostId = guideline._id;
      let result = await fetch( `http://localhost:8000/addPostComments/${nutpostId}`, {
        method: "Post",
        body: JSON.stringify({ nutcommentText, commentedBy,nutprofilePic }),
        headers: {
          "Content-type": "application/json",
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      });
      const res = await result.json();
      console.log(res)
      alert("Comment Posted");
    }catch(err){
      alert(err)
      console.log(err)
    }
   };
 return (
  <div className="comments1">
    <div className="write1">
      <img src={`http://localhost:8000/${nutprofilePic}`} alt="" />
      <input type="text" placeholder="write a comment" value={nutcommentText} onChange={(e) => setnutcommentText(e.target.value)} />
      <button onClick={NutPostComment}>Send</button>
    </div>
    {nutpostComment.length > 0 && nutpostComment.map((comment1) => (
      <div className="comment1">
        <img src={`http://localhost:8000/${comment1.CprofilePic}`} alt="" />
        <div className="info">
          <span>{comment1.commentedBy}</span>
          <p>{comment1.commentText}</p>
        </div>
        <span className="date1">1 hour ago</span>
      </div>
    ))}
  </div>
);

};

export default Comments1;