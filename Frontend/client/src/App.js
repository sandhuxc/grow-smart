import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Reset from "./components/reset/Reset";
import Videocall from "./components/video/Video";
import Room from "./components/video/Room";
import Nut1 from "./pages/nutritionPanel/nutritionPanel"
import Nut2 from "./components/nutDash/nutdash";
import L1 from "./components/land/land";
import H2 from "./components/h2/h2";
import V1 from "./components/viewDiet/VD"
import V2 from "./components/view_meal/View_meal"
import { Routes, BrowserRouter, Route,Outlet, RouterProvider,createBrowserRouter } from "react-router-dom";
import "./app.scss";
import Home from "./pages/home/Home";
import MakeMyDietPlan from "./components/nutrition_form/Nutrition_form";
import Profile from "./pages/profile/Profile";
import Profile1 from "./components/nutrition_profiles/Nutprofiles";
import Navbar from "./components/navbar/Navbar";
import MH from "./components/meetinghome/Mh";
import Footer from "./components/footer/footer";
import Feedback1 from "./components/feedback/Feedback";
import ChildChart from './components/childCharts/ChildChart';
import ChildData from './components/childData/childData';
import Requestform from "./components/requestform/Requestform";
import Dietform from "./components/dietform/Dietform";
import Approve from "./components/approve_diet/ApproveDiet";
import Feature from "./components/landing/Landing";
import ReactDOM from "react-dom";
import Slide from "./components/home1/slide";
import Posts from './components/posts/Posts';
import Guidelines from './components/guidelines/Guidelines';
import Share from './components/share/Share';
import Guideline1 from './components/guidelineshare/GuidelineShare';
import Back1 from './components/h1/h1';
import h_1 from './components/h1/h1'
import Cat from './components/video_s/v1'
import "./style.scss";
import { DarkModeContext } from "./context/darkModeContext";
import PrivateRoute from "./privateRoutes";
import React, { useState, useEffect,useContext } from 'react';
import {Navgate} from 'react-router-dom'
import Addquery from "./pages/addquery/Addquery";
import Nut from "./components/nutrition/Nutri";
import Cat1 from "./components/categories/play_learning";
import Cat2 from "./components/categories/cat2";
import Cat3 from "./components/categories/cat3";
import Blog1 from "./components/categories/blog1";
import Blog2 from "./components/categories/blog2";
import Blog3 from "./components/categories/blog3";
import Blog4 from "./components/categories/blog4";
import Blog5 from "./components/categories/blog5";
import Blog6 from "./components/categories/blog6";
import Cat4 from "./components/categories/cat4";
import Track from "./components/Track/Track.jsx";
import Track1 from "./components/track_param/Track1.jsx";
import ReqDes from "./components/viewparent_request/Parentdiscription";
import Nutrition_approve from "./components/nutrition_approval/JobApplicationForm";
import Diet_Table from "./components/diet_table/Diet_Table.jsx";
import Pending from "./components/pending_approve_page/Pending.jsx";
import ViewFeedback from "./components/viewFeedback/viewFeedback.jsx";
import Nutreq from "./components/Nut_all_req/Nut_req.jsx";
import Nutviewdiet from "./components/nutritionview_diet/Nut_view_diet.jsx";
import NutdashVAR from "./components/nutdashVAR/nutdashVAR";

function App() {
  

 const { darkMode } = useContext(DarkModeContext);

 const data = [
    { x: 40, y: 30 },
    { x: 50, y: 40 },
    { x: 60, y: 50 },
    { x: 70, y: 60 },
    { x: 80, y: 70 },
    { x: 90, y: 80 },
  ];
 
 const Layout = ({ children }) => {
 return (
  
 <div className={`theme-${darkMode ? "dark" : "light"}`}>

 <Navbar />
 {/* <div style={{ display: "flex" }}>
 <LeftBar /> */}

 <div className="abc">
 
 <Outlet /> 
 </div>
 {/* <RightBar /> */}
 {/* </div> */}
 {/* <Footer /> */}
 
 </div>
 
 
 );
 };


 const router = createBrowserRouter([
 {
 path: "/",
 element: (
 <PrivateRoute>
 <Layout />
 </PrivateRoute>
 ),
 children: [
 {
 path: "/",
 element: <Home />,
 },
 {
 path: "/profile/:id",
 element: <Profile />,
 },
 {
 path: "/addQuery",
 element: <Addquery />,
 },
 {
 path: "/addrequestform",
 element: <Requestform/>,
 },
 {
 path: "/features",
 element: <Feature/>,
 },
 {
 path: "/gallery",
 element: <Posts/>,
 },
 {
 path: "/share",
 element: <Share/>,
 },
 {
 path: "/addDiet",
 element: <Dietform/>,
 },
 
 {
 path: "/add",
 element: <Feedback1/>,
 },
 {
 path: "/req",
 element: <Nut/>
 },

 {
 path: "/categories",
 element: <Cat/>
 },
 {
 path: "/category1",
 element: <Cat1/>
 },
 {
  path: "/reset",
  element: <Reset />,
  }, 
 {
 path: "/category2",
 element: <Cat2/>
 },
 {
 path: "/category3",
 element: <Cat3/>
 },
 {
 path: "/blog1",
 element: <Blog1/>
 },
 {
 path: "/blog2",
 element: <Blog2/>
 },
 {
 path: "/blog3",
 element: <Blog3/>
 },
 {
 path: "/blog4",
 element: <Blog4/>
 },
 {
  path: "/blog5",
  element: <Blog5/>
  },
  {
    path: "/blog6",
    element: <Blog6/>
    },
 {
 path: "/category4",
 element: <Cat4/>
 },

 {
 path: "/footer",
 element: <Footer/>
 },
 {
 path: "/track",
 element:<Track />
 },
 {
  path:"/childgrowth",
  element:<ChildChart/>
},

{
  path:"/approve",
  element:<Approve/>
},
{
  path:"/childtrack",
  element:<Track1/>
},

{
  path: "/guideline",
  element: <Guidelines/>,
  },
  
{
  path: "/parentviewreq",
  element: <Parentview/>,
  },
  {
  path: "/ViewReqParent",
  element: <Parentreqview/>,
  },
  {
    path: "/viewdiet",
    element: <V1/>
    },
  {
    path: "/view_diet_meal",
    element: <V2/>
    },
 
 ],
 },
 {
   path: "/back",
   element: <L1/>
   },
 {
 path: "/login",
 element: <Login />,
 },
 {
  path: "/dietway",
  element: <H2 />,
  },
 {
 path: "/register",
 element: <Register />,
 },

 {

 path: "/Nutritionhome",
 element: <Nut1/>
 },
{
 path: "/Nutrition-form",
 element: <MakeMyDietPlan/>
 },

 {
  path: "/guidelineshare",
  element: <Guideline1/>,
  },

 {
 path: "/Nutritionhome",
 element: <Nut1/>
 },
 
 {
 path: "/NutritionDashBoard",
 element: <Nut2/>
 },
 {
 path: "/Nutritiondietplan",
 element: <Nutviewdiet/>
 },
 {
 path: "/Nutritionreq",
 element: <Nutreq/>
 },
 {
  path: "/NutdashVAR",
  element: <NutdashVAR/>
  },
  {
    path: "/viewPayment",
    element: <ViewPayment/>
    },

 {
 path: "/view-req-des",
 element: <ReqDes/>
 },
 {
   path: "/ChildData",
   element: <ChildData/>
 },
{
 path: "/nut_approve_form",
 element: <Nutrition_approve/>
 },

 {
  path:"/addFood",
  element:<MH/>
},
{
  path:"/addviewfeedback",
  element:<ViewFeedback/>
},
 {
  path:"/diettable",
  element:<Diet_Table/>
},
 {
  path:"/approvealstatus",
  element:<Pending/>
},
 {
    path: "/About",
    element: <Slide/>
    },
    {
      path: "/profile",
      element: <Profile1/>
      },
      {
        path: "/meeting",
        element: <Videocall/>
        },
        {
          path: "/room/:roomId",
          element: <Room/>
          }
            

 ]);
 return (

 <div>
 <RouterProvider router={router}/>

 </div>
 );

}



export default App;