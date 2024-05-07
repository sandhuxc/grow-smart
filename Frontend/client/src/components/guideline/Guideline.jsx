import "./guideline.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments1/Comments1";
import { useState } from "react";

const Guideline = ({ guideline }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const auth = localStorage.getItem("user");
  let pic = JSON.parse(auth).nutprofilePic;
  let commentNo = guideline.nutpostComment.length;
  //TEMPORARY
  const liked = false;

  return (
    
    <div className="guideline">
        <div className="h_g">/n</div>
        <div className="h_g">/n</div>
      <div className="container_guideline">
        <div className="user_guideline">
          <div className="userInfo_guideline">

            <img src={`http://localhost:8000/${guideline.nutprofilePic}`} alt="" />
            <div className="details_guideline">
              <Link
                to={`/profile/${guideline.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name_guideline">{guideline.NutritionName}</span>
              </Link>
              <span className="date_guideline">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content_guideline">
           <p className="postp">{guideline.nutpostDecrption}</p>
          <img src={`http://localhost:8000/${guideline.nutpostPic}`} alt="" />
        </div>
        <div className="info_guideline">
          <div className="item_guideline">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item_guideline" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
           {commentNo} Comments
          </div>
          <div className="item_guideline">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments guideline={guideline}/>}
      </div>
    </div>
  );
};

export default Guideline;