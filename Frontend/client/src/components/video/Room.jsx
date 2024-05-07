import {useParams} from 'react-router-dom';
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
import {Button} from '@mui/material';

function Room() {
  const auth = localStorage.getItem("user");
  let NutName = JSON.parse(auth).name;
  const {roomId} = useParams();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:3000/room/${roomId}`);
    const emailSubject = 'Join my meeting!';
    const emailBody = `Hey, let's have a meeting! Here's the link: http://localhost:3000/room/${roomId}`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoUrl);
  };

  const Mymeeting = async (element) => {
    const appID = 1800002079 ;
    const serverSecret = "02b04a1162ff5321ecfeaaca79e286c6";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,
     serverSecret,
      roomId,
       Date.now().toString(),
      NutName);
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'share link to parent',
          url: `http://localhost:3000/room/${roomId}`
        }
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference
      }
    });
  };

  return (
    <div className="vc6" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div ref={Mymeeting} />
      <Button variant="contained" onClick={copyToClipboard}>
        Share Link Via Email
      </Button>
    </div>
  );
  
  
}

export default Room;
