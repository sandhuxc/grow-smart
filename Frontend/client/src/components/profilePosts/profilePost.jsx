import Post from "../post/Post";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./profilePost.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Track1 from "../../components/track_param/Track1";

const ProfilePosts = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  let pic = JSON.parse(auth).profilePic;
  let parentName = JSON.parse(auth).name;
  let role = JSON.parse(auth).role;
  let ID = JSON.parse(auth)._id;
  const [posts, setPosts] = useState([]);
  const [Childs, setChilds] = useState([]);
  useEffect(() => {
    getPosts();
    getChilds();
  }, []);
  const getPosts = async () => {
    let result = await fetch(`http://localhost:8000/getProfilePosts/${ID}`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    console.log(result.result);
    setPosts(result);
  };
  const getChilds = async () => {
    let result = await fetch(`http://localhost:8000/getChilds/${ID}`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    console.log(result);
    setChilds(result);
  };
  function gotoTrackPage(item){
    console.log(item)
    localStorage.setItem('ChildData',JSON.stringify(item))
    navigate('/childtrack');
  }
  function gotoWhoPage(item){
    console.log(item)
    localStorage.setItem('ChildData',JSON.stringify(item))
    navigate('/childgrowth' , {state: item});
  }


  return (
    <div>
      <div className="w3-container w3-content1" style={{}}>
        <div class="w3-row">
          <div class="w3-col m3">
            <div class="w3-card w3-round w3-white w3-margin">
              <div class="w3-container">
                <h4 class="w3-center">My Profile</h4>
                <p class="w3-center">
                  <img
                    src={`http://localhost:8000/${pic}`}
                    class="w3-circle"
                    style={{ height: "106px", width: "106px" }}
                    alt="Avatar"
                  />
                </p>
                <hr />
                <p>
                  <i class="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>{" "}
                  {parentName}
                </p>
                <p>
                  <i class="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>{" "}
                  {role}{" "}
                </p>

                <p></p>

                {Childs.map((child) => (
                  <div class="dropdown">
                    <i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>
                    child Names: {child.childName}
                    <div class="dropdown-content">
                    <a> <button onClick={() => gotoWhoPage(child)} >childgrowth</button> </a> 

                    </div>
                  </div>
                ))}
              </div>
            </div>
            <br />
            <div class="w3-card w3-round w3-white w3-hide-small">
              <div class="w3-container">
                <p>Trending Topics</p>
                <p>
                  <span class="w3-tag w3-small w3-theme-d5">Learning</span>
                  <span class="w3-tag w3-small w3-theme-d4">
                    Physical Excercises
                  </span>
                  <span class="w3-tag w3-small w3-theme-d3">Memories</span>
                  <span class="w3-tag w3-small w3-theme-d2">Diet</span>
                  <span class="w3-tag w3-small w3-theme-d1">Toys</span>
                  <span class="w3-tag w3-small w3-theme">Games</span>
                  <span class="w3-tag w3-small w3-theme-l1">Daily Queries</span>
                  <span class="w3-tag w3-small w3-theme-l2">Food</span>
                  <span class="w3-tag w3-small w3-theme-l3">Gallery</span>
                  <span class="w3-tag w3-small w3-theme-l4">Blogs</span>
                  <span class="w3-tag w3-small w3-theme-l5">Photos</span>
                </p>
              </div>
            </div>
            <br />

            <div class="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
              <span
                onclick="this.parentElement.style.display='none'"
                class="w3-button w3-theme-l3 w3-display-topright"
              >
                <i class="fa fa-remove"></i>
              </span>
              <p>
                <strong>Hey!</strong>
              </p>
              <p>
                People are looking at your Memories in profile. Check Their
                Memories.
              </p>
            </div>
          </div>
          <br />

          <div class="w3-col m7 w3-padding" style={{ whiteSpace: "10px" }}>
            <div className="w3-container w3-content1 posts">
              {posts.map((post) => (
                <Post post={post} key={post.id} />
              ))}
            </div>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePosts;
