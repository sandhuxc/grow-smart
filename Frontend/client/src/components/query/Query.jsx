import "./query.scss";
import React from 'react'
import pic from "../../assets/user.png"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import axios from "axios";
import Q_comments from "../querycomments/Q_comments";
import { useState, useEffect } from "react";
function Query({ query}) {
  const [commentOpen, setCommentOpen] = useState(false);
  const auth = localStorage.getItem('user')
  let commentNo = query.queryComment.length;
  const [likedByUser, setLikedByUser] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  let parent = JSON.parse(auth).name
  useEffect(() => {
    setLikesCount(query.queryLikeS.length);
    // Check if the user has already liked this query
    if (auth && query.queryLikeS.some((like) => like.likedById === JSON.parse(auth)._id)) {
      setLikedByUser(true);
    }
  }, [query]);

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

      const res = await axios.post(`http://localhost:8000/like/${query._id}`, data, config);

      setLikedByUser(true);
      setLikesCount(res.data.queryLikeS.length);
    } catch (err) {
      console.error(err);
      alert('Error liking query');
    }
  };
  const handleDeleteClick = async(event , id) => {
    let result = await fetch(`http://localhost:8000/deleteQuery/${id}`, {
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
    <div className="query">
      <div className="container">
        <div className="user">
          <div className="userInfo">
          <img src={`http://localhost:8000/${query.profilePic}`} alt="" />
            <div className="details">
              <Link
                to={`/profile/${query.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{query.parentName}</span>
              </Link>
              <span className="date">{query.queryDateAgo}</span>
            </div>
          </div>
          {query.parentName == parent  && (
        <DeleteIcon onClick={(event) => handleDeleteClick(event , query._id)} />
      )}
          

        </div>
        <div className="contentQuery">
          <p className="queryp">{query.queryContent}</p>
          <img src="" alt="" />
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
        {commentOpen && <Q_comments query={query} />}
      </div>
    </div>
    
  )
}

export default Query