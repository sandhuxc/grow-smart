import "./leftBar.scss";
import Parents from "../../assets/1.png";
import diet from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import growth from "../../assets/6.png";
import querie from "../../assets/querie.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Content from "../../assets/12.png";
import Feedback from "../../assets/13.png";
import { Link } from "react-router-dom";
import Query from "../query/Query";
function LeftBar() {
  const auth = localStorage.getItem('user')
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
             <img
              src="https://images.pexels.com/photos/3030090/pexels-photo-3030090.jpeg?cs=srgb&dl=pexels-caleb-oquendo-3030090.jpg&fm=jpg"
              alt=""
            /> 
            <span>{JSON.parse(auth).name}</span>
          </div>
          <div className="item">
            <img src={Parents} alt="" />
            <span>Parents</span>
          </div>
        
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
         
         
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Feedback} alt="" />
            <span>Feedback</span>
          </div>
          <div className="item" >
            <img src={querie} alt="" />
            <Link
                to={`/addQuery`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>Queries</span>
              </Link>
            
          </div>
          <div className="item">
            <img src={Content} alt="" />
            <span>Learning Content</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Request Nutrition</span>
          </div>
          <div className="item">
            <img src={growth} alt="" />
            <Link
                to={`/trackgrowth`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
            
            <span>Track Growth</span>
            </Link>
          </div>
          <div className="item">
            <img src={diet} alt="" />
            <Link
                to={`/addrequestform`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
            <span>View Diet</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar