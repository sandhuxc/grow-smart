import React from 'react'
import "./land.scss"
function land() {
  return (
    <div className='h1_0'>
  <body>


<div class="w3-top">
  <div class="w3-bar w3-white w3-padding w3-card" >
   
    <div class="w3-right w3-hide-small">
      <a href="#intro" class="w3-bar-item w3-button">Introduction</a>
      <a href="#services" class="w3-bar-item w3-button">Sevices</a>
      <a href="#contact" class="w3-bar-item w3-button">Contact</a>
      <a href="/login" class="w3-bar-item w3-button">Get Started</a>
    </div>
  </div>
</div>

<div class="w3-content" >


  <div class="w3-row w3-padding-64" id="intro">
    <div class="w3-col m6 w3-padding-large w3-hide-small">
     <img src="https://images.pexels.com/photos/11971635/pexels-photo-11971635.jpeg?auto=compress&cs=tinysrgb&w=600" class="w3-round w3-image w3-opacity-min" alt="Table Setting" width="600" height="750"/>
    </div>

    <div class="w3-col m6 w3-padding-large">
      <h1 class="w3-center">About GrowSmart</h1><br/>
      <h5 class="w3-center">Parental Guide</h5>
      <p class="w3-large">We aim to provide parents a better platform for their interaction and to make it easy for them to
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
        concerns with each other and develop early cognitive skills in children.</p>
    </div>
  </div>
  
  <hr/>
  

  <div class="w3-row w3-padding-64" id="services">
    <div class="w3-col l6 w3-padding-large">
      <h1 class="w3-center">Our Services</h1><br/>
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


  <div class="w3-container w3-padding-64" id="contact">
    <h1>Contact</h1><br/>
    <p>We offer all services for parents community, large or small. We understand parents needs and tensions in growing their child,  and we will provide services for parents to satisfy the biggerst criteria of them all, both growth and good diet. Do not hesitate to contact us.</p>
    <p class="w3-text-blue-grey w3-large"><b>Grow Smart, Parenting Application</b></p>
    <p>You can also contact us by phone 00553123-2323 or email catering@Growsmart.com, or you can send us a message here:</p>
    <form action="/action_page.php" target="_blank">
      <p><input class="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
      <p><input class="w3-input w3-padding-16" type="email" placeholder="Email" required name="Email" /></p>
      <p><input class="w3-input w3-padding-16" type="datetime-local" placeholder="Date and time" required name="date" value="2020-11-16T20:00"/></p>
      <p><input class="w3-input w3-padding-16" type="text" placeholder="Message \ Any Feedback" required name="Message"/></p>
      <p><button class="w3-button w3-light-grey w3-section" type="submit">SEND MESSAGE</button></p>
    </form>
  </div>
  

</div>


</body>
    </div>
  )
}

export default land
