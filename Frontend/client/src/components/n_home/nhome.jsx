import React from 'react'
import "./nhome.scss"
function nhome() {
  return (
    <div>
      <body>
  <div class="menu-overlay1" id="menu"></div>

  <div class="bg-slide-accent1"></div>
  <div class="bg-slide1"></div>
  <div class="closemenu1" id="closemenu" onclick="closeMenu()"></div>
  
  <section class="head-img-container1">
    <div class="header-img1"><img src="https://images.pexels.com/photos/1122415/pexels-photo-1122415.jpeg?auto=compress&cs=tinysrgb&w=600"/></div>
  </section>
  <section class="head-text1">
    <h1>Grow Smart</h1>
    <h2>A Platform for nutrition to earn and help parents in taking good care of children diet.</h2>
   <button  className='i5'><a href="/NutritionDashBoard">Get Started</a></button>  
  </section>
</body>
    </div>
  )
}

export default nhome
