import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import "./q_comments.scss";

const Q_comments = ({ query }) => {
  const auth = localStorage.getItem("user");
  let pic = JSON.parse(auth).profilePic;
  let pname = JSON.parse(auth).name;
  let queryId = query._id;
  const [commentText, setcommentText] = useState("");
  const [queryComment, setQueryComment] = useState([]);
  useEffect(() => {
    getComments();
  }, []);
  const getComments = async () => {
    console.log("In get comments", queryId);
    let result = await fetch(`http://localhost:8000/getComments/${queryId}`, {
      headers: {
        body: JSON.stringify({ queryId }),
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    // console.log("comments" , result)
    setQueryComment(result);
  };
  const commentRating = async (stars, person) => {
    alert(person);
    try{
      let result = await fetch(
        `http://localhost:8000/getUserOfComment/${person}/${stars}`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      result = await result.json();
      console.log(result);
    }catch(err){
      console.log(err)
    }
  };

  const PostComment = async () => {
    let commentedBy = JSON.parse(auth).name;
    let queryId = query._id;
    let result = await fetch("http://localhost:8000/addComment", {
      method: "Post",
      body: JSON.stringify({ commentText, commentedBy, queryId }),
      headers: {
        "Content-type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    const res = await result.json();
    alert("Comment Posted");
    redirect("/addQuery");
  };

  return (
    <div className="q_comments">
      <div className="write">
        {/* yahan cureent user ki image ani jo registraion main leni */}
        <img src={`http://localhost:8000/${pic}`} alt="" />
        <input
          type="text"
          placeholder="write a comment"
          value={commentText}
          onChange={(e) => setcommentText(e.target.value)}
        />
        <button onClick={PostComment}>Send</button>
      </div>
      {queryComment.map((q_comment) => (
        <div className="comment">
          <img src={q_comment.profilePicture} alt="" />
          <div className="info">
            <span>{q_comment.commentedBy}</span>
            <p>{q_comment.commentText}</p>
          </div>

        { pname !=q_comment.commentedBy &&
          <div
            class="rating"
            onChange={(event) =>
              commentRating(event.target.value, q_comment.commentedBy)
            }
          >
            <input type="radio" name="rating" value="5" id="5" />
            <label for="5">☆</label>
            <input type="radio" name="rating" value="4" id="4" />
            <label for="4">☆</label>
            <input type="radio" name="rating" value="3" id="3" />
            <label for="3">☆</label>
            <input type="radio" name="rating" value="2" id="2" />
            <label for="2">☆</label>
            <input type="radio" name="rating" value="1" id="1" />
            <label for="1">☆</label>
          </div>
        }
        </div>
      ))}
    </div>
  );
};

export default Q_comments;
