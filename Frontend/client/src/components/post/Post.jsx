import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState, useEffect } from "react";
import axios from "axios";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const auth = localStorage.getItem('user')
  let commentNo = post.postComment.length;
  const [likedByUser, setLikedByUser] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  let parent = JSON.parse(auth).name
  useEffect(() => {
    setLikesCount(post.postLikes.length);
    // Check if the user has already liked this query
    if (auth && post.postLikes.some((like) => like.likedById === JSON.parse(auth)._id)) {
      setLikedByUser(true);
    }
  }, [post]);


  const handleLike = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      };

      const data = {
        likedBy: JSON.parse(auth).name,
        likedById: JSON.parse(auth)._id,
      };

      const res = await axios.post(`http://localhost:8000/plike/${post._id}`, data, config);

      setLikedByUser(true);
      setLikesCount(res.data.postLikes.length);
    } catch (err) {
      console.error(err);
      alert('Error liking query');
    }
  };
  const handleDeleteClick = async(event , id) => {
    let result = await fetch(`http://localhost:8000/deletePost/${id}`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    alert("deleted")
    event.stopPropagation();
    window.location.reload(true); 
  };
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={`http://localhost:8000/${post.profilePic}`} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.parentName}</span>
              </Link>
              <span className="date">{post.postdate}</span>
            </div>
          </div>
          {post.parentName == parent  && (
        <DeleteIcon onClick={(event) => handleDeleteClick(event , post._id)} />
      )}
        </div>
        <div className="contentpost">
          <p className="postp">{post.postDecrption}</p>
          {post.postPic.match(/\.(mp4)$/i) ? (
            <video
              src={`http://localhost:8000/${post.postPic}`}
              controls
            ></video>
          ) : (
            <img src={`http://localhost:8000/${post.postPic}`} alt="" />
          )}
        </div>
        <div className="info">
        <div className="item" onClick={() => handleLike()}>
          
          
          {likedByUser ? <FavoriteOutlinedIcon  /> : <FavoriteBorderOutlinedIcon />}
          {likesCount} likes
        </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            {commentNo} Comments
          </div>
          
        </div>
        {commentOpen && <Comments post={post} />}
      </div>
    </div>
  );
};

export default Post;
