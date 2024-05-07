import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ReactStars from 'react-rating-stars-component';
import { useLocation } from 'react-router-dom';
import "./feedback.scss";
function Feedback() {
    const location = useLocation();
    const [feedback, setFeeback] = useState("")
    var stars = 0;
    const receivedData = location.state;
    const dietRevId = receivedData.dietId;

   // let parentName = receivedData.parentName;
    const nutritionId = localStorage.getItem('nutId')
    const auth = localStorage.getItem("user");
    const parentName =  JSON.parse(auth).name
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const commentRating = async (star) => {
        stars = star
        try{
          let result = await fetch(
            `http://localhost:8000/postNutriRating/${nutritionId}/${stars}`,
            {
              headers: {
                Authorization: JSON.parse(localStorage.getItem("token")),
              },
            }
          );
          result = await result.json();
          console.log(result);
        }catch(err){
          console.log(err)
        }

      };
      const submitFeedback = async () =>{
        try{
            let result = await fetch("http://localhost:8000/giveFeedBack", {
              method: "Post",
              body: JSON.stringify({
                feedback,
                nutritionId,
                stars,
                dietRevId,
                parentName
              }),
              headers: {
                "Content-type": "application/json",
                Authorization: JSON.parse(localStorage.getItem("token")),
              },
            });
            const res = await result.json();
            console.log(res)
            window.location.replace("/req");

          }catch(err){
            console.log(err)
          }
      }
return (
<div className="f1">
    <div class="containerfed">
        <div class="leftfed">
            <div class="headerfed">
                <h2 class="animation1 a1">Diet FeedBack Form</h2>
                <h4 class="animation2 a2">Please share Your Feedback</h4>
            </div>
            <form class="formfed">
                <div class="row">
                    <div class="labels">
                        <h4 class="animation2 a2">
                            Please describe your experience.
                        </h4>
                    </div>
                    <div class="fields_event ">
                        <textarea className= "event-details" value={feedback} onChange={(e) => setFeeback(e.target.value)} name="event-details" cols="1" rows="1"
                            placeholder="Enter your experience here..." required></textarea>
                    </div>
                    <div
            class="rating"
            onChange={(event) =>
              commentRating(event.target.value)
            }
          >
            <input type="radio" name="rating" value="5" id="5" />
            <label for="5">☆</label>
            <input type="radio" name="rating" value="4" id="4" />
            <label for="4">☆</label>
            <input type="radio" name="rating" value="3" id="3" />
            <label for="3">☆</label>
            <input type="radio" name="rating" value="2" id="2" />
            <label for="2">☆</label>
            <input type="radio" name="rating" value="1" id="1" />
            <label for="1">☆</label>
          </div>
                </div>
        
                <button class="animation3 a6" id="submit" type="submit" onClick={submitFeedback}>Submit</button>
                {/* <Dialog style={{background:"linear-gradient(rgba(245, 202, 198, 0.967), rgba(138, 218, 255, 0.87))"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          {"Your Prefrence"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Wanna give Feedback Later?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button  autoFocus><a href='/'>Agree</a>
            
          </Button>
        </DialogActions>
      </Dialog> */}

            </form>
        </div>
        <div class="rightfed"></div>
    </div>
</div>
)
}

export default Feedback