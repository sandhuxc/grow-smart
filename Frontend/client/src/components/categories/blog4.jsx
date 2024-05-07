import React from 'react'
import "./blog.scss"
import { useEffect, useState } from 'react'
function Blog4() {
    const [parentingBlogs, setparentingBlogs] = useState([])
    useEffect(()=>{
        getParentingBlogs()
    
    }, [])
    const getParentingBlogs = async ()=>{
  
        let result = await fetch('http://localhost:8000/getBlogs',{
            headers:{
                Authorization: JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
       console.log(result)
       setparentingBlogs(result)
      }
      function moveToViewDiet() {

      }
  return (
    <div>
         <br/>
        <br/>
<body>



<div class="container container-flex">
<main role="Inside_main">
    {parentingBlogs.length > 0 && parentingBlogs.map((Pblogs) => {

        if(Pblogs.blogCategory === "Diet Related"){
            return( 
            <article class="ar_1">
            <div class="ar_main">
                <h2 class="ar-title">{Pblogs.blogTitle}</h2>
                <p class="article-body">{Pblogs.blogContent}</p>
            </div>
            <div class="article-recent-secondary">
            <p class="article-info">{Pblogs.name} - {Pblogs.role}</p>
                <p class="article-info">{Pblogs.dateUploaded}</p>
            </div>
        </article>
            )
        }
    })}



    </main>

    {/* <aside class="sidebar">


        <div class="sidebar-widget">
            <h2 class="widget-title">RECENT POSTS</h2>

            <div class="widget-recent-post">
                <h3 class="widget-recent-post-title">Measurements Learning</h3>
                <img className='i1'  src="https://images.squarespace-cdn.com/content/v1/5cb8758a840b16feb856884c/3689ee81-9f64-42e9-8b5c-5f6f969bbe61/capacity-activities-for-kindergarten.jpg?format=1000w" alt="" class="widget-image"/>
            </div>

            <div class="widget-recent-post">
                <h3 class="widget-recent-post-title">Matching Games</h3>
                <img className='i1'  src="https://play-lh.googleusercontent.com/zRa9e5WyYM63m9nU80jYsYzmpTAP5PJOd1j3kL9VR3-YQ3Wm4UkI47jK8A8Abgp7cpo" alt="" class="widget-image"/>
            </div>

            <div class="widget-recent-post">
                <h3 class="widget-recent-post-title">Knock Knock Game</h3>
                <img className='i1'  src="http://1.bp.blogspot.com/-Tt3ZgimLebI/VAsWW2UPsyI/AAAAAAAACyc/888PgvprjT0/s1600/knockknockdoor1.jpg" alt="" class="widget-image"/>
            </div>

        </div>

    </aside> */}
</div>


</body>
    </div>
  )
}

export default Blog4
