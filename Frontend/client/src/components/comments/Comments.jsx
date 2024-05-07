import "./comments.scss";
import { useState , useEffect } from "react";
import { redirect } from "react-router-dom";
const Comments = ({ post }) => {
  const auth = localStorage.getItem("user");
  let profilePic = JSON.parse(auth).profilePic;
  let postId = post._id;
  const [commentText, setcommentText] = useState("");
  const [postComment, setPostComment] = useState([]);

  useEffect(() => {
    getComments();
  }, []);
  const getComments = async () => {
    let result = await fetch(
      `http://localhost:8000/getPostComments/${postId}`,
      {
        headers: {
          body: JSON.stringify({ postId }),
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      }
    );
    result = await result.json();
    // console.log("comments" , result)
    setPostComment(result);
  };
  const PostComment = async () => {
    try{
      let commentedBy = JSON.parse(auth).name;
      let postId = post._id;
      let result = await fetch( `http://localhost:8000/addPostComments/${postId}`, {
        method: "Post",
        body: JSON.stringify({ commentText, commentedBy,profilePic }),
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
    <div className="comments">
      <div className="write">
{/* yahan cureent user ki image ani jo registraion main leni */}
        <img  src={`http://localhost:8000/${profilePic}`}  alt="" />
        <input type="text" placeholder="write a comment" value={commentText} onChange={(e) => setcommentText(e.target.value)} />
        <button onClick={PostComment}>Send</button>
      </div>
      {postComment.map((comment) => (
        <div className="comment">
        <img  src={`http://localhost:8000/${comment.CprofilePic}`}  alt="" />
          <div className="info">
            <span>{comment.commentedBy}</span>
            <p>{comment.commentText}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
