import React from 'react'
import "./landing.scss";
function Landing() {
  return (
    <div className='landing'>
    <div className="wrapper_f">
    <div class="center-line">
      <a href="#" class="scroll-icon"><i class="fa fa-caret-up"></i></a>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fa fa-home"></i>
        <div class="details">
          <span class="title">Post Query</span>
          
        </div>
        <p>Here you can post query.</p>
        <div class="bottom">
          <a href="/addQuery">Post Query</a>
       
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fa fa-star"></i>
        <div class="details">
          <span class="title">Upload Gallery</span>
         
        </div>
        <p>Upload gallery here.</p>
        <div class="bottom">
          <a href="/gallery">Gallery Feed</a>
          
        </div>
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fa fa-rocket"></i>
        <div class="details">
          <span class="title">Request Diet</span>
       
        </div>
        <p>Request Diet here.</p>
        <div class="bottom">
          <a href="/req">Request DietPlan</a>
          
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fa fa-globe"></i>
        <div class="details">
          <span class="title">View Nutritions list</span>
         
        </div>
        <p>Here you can view nutritions list</p>
        <div class="bottom">
          <a href="/req">View Profiles</a>
        
        </div>
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fa fa-paper-plane"></i>
        <div class="details">
          <span class="title">Check profile</span>
        
        </div>
        <p>here you can check your profile</p>
        <div class="bottom">
          <a href="/profile/:id">Read more</a>
        
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fa fa-map-marker-alt"></i>
        <div class="details">
          <span class="title">Give Feedback</span>
         
        </div>
        <p>here you can give feedback</p>
        <div class="bottom">
          <a href="/add">Nutrition FeedBack</a>
         
        </div>
      </section>
    </div>
  </div>
    </div>
  
  )
}

export default Landing
