import React from 'react'
import './slide.scss'
import  {useState} from 'react';


function slide() {
  const toggle = () => {
    document.getElementById('id01').style.display = "block";}
    const toggle1 = () => {
      document.getElementById('id01').style.display = "none";}
  return (
    <div className='h1'>
      
    <div class="Section_top">
        <div class="content">
            <div class="txt">
            <h1>Grow <span> Smart</span></h1>
            <a href="/features">Get Started</a>
            </div>
        </div>
    </div> 

<div class="w3-bottom w3-hide-small" style={{ width: "100%"}}>
  <div class="w3-bar w3-padding w3-opacity-min w3-hover-opacity-off" style={{ width: "100%",height:"100%"}}>
    <a href="/"  style={{ width: "25%" ,background:"white",color:"black"}} class="w3-bar-item w3-button">Home</a>
    <a href="#us" style={{ width: "25%" ,background:"white",color:"black"}} class="w3-bar-item w3-button" >About Us</a>
    <a href="#motive" style={{ width: "25%" ,background:"white",color:"black"}}class="w3-bar-item w3-button">Our Work</a>
    <a href="#rsp" style={{ width: "25%" ,background:"white",color:"black"}} class="w3-bar-item w3-button w3-hover-black">Response</a>
  </div>
</div>
<div class="w3-row w3-padding-64" id="us">
    <div class="w3-col m6 w3-padding-large w3-hide-small">
     <img src="https://images.pexels.com/photos/11971635/pexels-photo-11971635.jpeg?auto=compress&cs=tinysrgb&w=600" class="w3-round w3-image w3-opacity-min" alt="Table Setting" width="600" height="750"/>
    </div>

    <div class="w3-col m6 w3-padding-large">
      <h1 class="w3-center">About GrowSmart</h1><br/>
      <h5 class="w3-center">Parental Guide</h5>
      <p class="w3-large">We are a network who are passionately dedicated to empowering parents and caregiving
            professionals to provide the secure and respectful beginnings children need for a healthy life. We aim to provide parents a better platform for their interaction and to make it easy for them to
        raise
        kids,where parents don't know what activities to do and how to spend quality time with children.Grow
        Smart is a Mobile application. The problem in real-world is that parents face many issues regarding
        the children <span class="w3-tag w3-light-grey">behavioral/</span> physical health,</p>
      <p class="w3-large w3-text-grey w3-hide-medium">and they don't know how to tackle them. Furthermore, many parents don’t
        know what activities
        to do with their children to develop skills in them. The impact of which is Stress issues in parents
        and more
        importantly effect on children health and growth. Grow Smart will provide an environment where
        parents can discuss child
        concerns with each other and develop early cognitive skills in children. we are dedicated to provide plateform where parents can ask professional help from other parents and
                and they will be able to know how they can spent quality time with their children</p>
    </div>
  </div>
  
  <hr/>
    <div class="w3-display-container bgimg2">
        <div class="w3-display-middle w3-text-white w3-center">
            <h1 class="w3-jumbo">Grow Smart</h1><br/>
            
        </div>
    </div>

    <div class="w3-row w3-padding-64" id="motive">
    <div class="w3-col l6 w3-padding-large">
      <h1 class="w3-center">Our Motives</h1><br/>
      <h4>Post Query</h4>
      <p class="w3-text-grey">We facilitate parents by giving them an option to post query related to child daily routine issues.</p><br/>
    
      <h4>Save Memories</h4>
      <p class="w3-text-grey">Parents will save memories of their infants and they will be able to share their memories with other parents community.</p><br/>
    
      <h4>Train Parents</h4>
      <p class="w3-text-grey">We will train parents in nurture their child effectively.</p><br/>
    
      <h4>Provide Good Diet</h4>
      <p class="w3-text-grey">Parents will be able to request and receive diet plans from experts.</p><br/>
    
     
    </div>
    
    <div class="w3-col l6 w3-padding-large">
      <img src="https://images.pexels.com/photos/4642247/pexels-photo-4642247.jpeg?auto=compress&cs=tinysrgb&w=600" class="w3-round w3-image w3-opacity-min" alt="Menu" />
    </div>
  </div>

  <hr/>
    <div class="w3-container w3-padding-64 w3-pale-red w3-center w3-wide" id="rsp">
        <h1>HOPE YOU Like It!</h1>
        <p class="w3-large">Kindly Respond If You Like Our Page</p>
        <p class="w3-xlarge">
            <button onClick={toggle}
                class="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style={{padding:"8px 60px"}}>RESPONSE</button>
        </p>
    </div>

    <div id="id01" class="w3-modal">
        <div class="w3-modal-content w3-card-4 w3-animate-zoom" style={{padding:"32px",height:"350px"}} >
            <div class="w3-container w3-white w3-center">
                <h1 class="w3-wide">Was Our Website Helpful</h1>
                <p>We really hope you can make it.</p>
                <form>
                    <input class="w3-input w3-border" type="text" placeholder="Name(s)" name="name"/><br/>
                </form>
                <div class="w3-row">
                    <div class="w3-half">
                        <button onClick={toggle1} type="button"
                            class="w3-button w3-block w3-green">Yayyyy</button>
                    </div>
                    <div class="w3-half">
                        <button onClick={toggle1} type="button"
                            class="w3-button w3-block w3-red">Nayyyy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default slide
