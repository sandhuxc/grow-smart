import './home.scss'
import Navbar from  "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import { Outlet } from 'react-router-dom';
import Posts from '../../components/posts/Posts';
import Share from '../../components/share/Share';
import Queries from '../../components/queries/Queries';
import Landing from '../../components/h1/h1';

const Home = () => {

  return (
    <div className='home'>
     {/* <Share/> */}
    
     <Landing/>
     
    </div>
  )
}

export default Home
