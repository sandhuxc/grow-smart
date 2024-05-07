import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Posts from "../posts/Posts";
import { useState } from "react";
import axios from "axios";
const Share = () => {
  const auth = localStorage.getItem("user");
  let profilePic = JSON.parse(auth).profilePic;
  const [postDecrption, setpostDecrption] = useState("");
  const [postPic, setpostPic] = useState("");
  const postdate = new Date().toLocaleDateString();
  let parentName = JSON.parse(auth).name;
  let parentId = JSON.parse(auth)._id;
  const sharePost = async () => {

    const formData = new FormData();
    formData.append("postDecrption", postDecrption);
    formData.append("postPic", postPic);
    formData.append("parentName", parentName);
    formData.append("parentId", parentId);
    formData.append("profilePic", profilePic);
    formData.append("postdate", postdate);

    try{
      if(postDecrption=="" || postPic=="" || (postDecrption=="" && postPic==""))
      {
        alert("Post not Added, Description is must");
      }
else
{
      const result = await axios.post("http://localhost:8000/addPost", formData);
      window.location.reload(true);
    }
  }catch(err){
      alert(err)
    }
  };
  return (
    <div className="share1">
      <div className="share">
        <div>\n</div>
        <div>\n</div>
        <div className="s1">\n</div>

        <div className="container">
          <div className="top">
            <img src={`http://localhost:8000/${profilePic}`} alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${JSON.parse(auth).name}?`}
              value={postDecrption} onChange={(e) => setpostDecrption(e.target.value)}
            />
          </div>
          <hr />
          <div className="bottom">
            <div className="left">
              <input onChange={(e) => setpostPic(e.target.files[0])} type = "file" ></input>
              <label htmlFor="file">
                <div className="item">
                  <img src={Image} alt="" />
                  <span>Add Post</span>
                </div>
              </label>
              <div className="item">
                <img src={Map} alt="" />
                <span>Add Place</span>
              </div>
            </div>
            <div className="right">
              <button onClick={sharePost}>Share</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Posts />
      </div>
    </div>
  );
};

export default Share;
