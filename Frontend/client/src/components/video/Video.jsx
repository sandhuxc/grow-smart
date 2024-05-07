import React , {useState} from 'react'
import  {useNavigate} from 'react-router-dom'
import './video.scss'
const Video = () => {
    const [rc,setRc]=useState('')
    const navigate=useNavigate();
    const handleSubmit = (ev) => {
        ev.preventDefault();
        navigate(`/room/${rc}`);
    }
  return (
    <div className="vc">
      <form onSubmit={handleSubmit} className="vc1">
        <div className="vc2">
            <label className="vc3">Make Meeting Room Code</label>
            <input value={rc} 
            onChange={e => setRc(e.target.value)}
            type="text"
             required 
             placeholder="Enter Room code"/>
        </div>
        <button type="submit">Enter Room</button>
      </form>
    </div>
  )
}

export default Video
