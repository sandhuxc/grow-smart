import "./guidelineshare.scss";
import React, { useState } from 'react';
const GuidelineShare = () => {
  const [blogCategory, setCategory] = useState('');
  const [blogContent, setContent] = useState('');
  const [blogTitle, setTitle] = useState('');
  const [error, setError] = useState('');
  const auth = localStorage.getItem("user");
  const name = JSON.parse(auth).name;
  const role = "Nutrition"
  const currentDate = new Date();
  const dateUploaded = currentDate.toDateString();
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleBlogUpload = async (e) => {
    e.preventDefault();

    if (!blogCategory || !blogContent || !blogTitle) {
      setError("Please fill in all fields.");
      return;
    }else{
      try {
        const response = await fetch("http://localhost:8000/addBlog", {
          method: "POST",
          body: JSON.stringify({ blogCategory, blogContent, blogTitle , name , role , dateUploaded }),
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        alert("Guideline uploaded successfully!");
      } catch (err) {
        setError(err.message);
      }
    }
  }
  
  return (
    <div className="upload-gd-page">
    
    
  
      <header className='kkkk'>
        <h1 className='kkkk1'>UPLOAD GUIDELINES</h1>
    </header>
      <main className="pppp_gd">
      <form id="login_form" class="form_class" onSubmit={handleBlogUpload}>
        {error && <div className="error">{error}</div>}
        <div class="form_div">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            className="field_class" 
            value={blogCategory}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Diet Related">Diet Related</option>
            <option value="Physical Activity">Physical Activity</option>
           
          </select>
        </div>
        <div className="form_div">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="field_class" 
            id="title"
            value={blogTitle}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form_div">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={blogContent}
            className="field_class" 
            onChange={handleContentChange}
            required
          ></textarea>
        </div>
        <button className="submit_class" type="submit">Upload</button>

      </form>
      </main>
    <footer>
        <p>Grow <a href="#">Smart&trade;</a></p>
    </footer>
   
    </div>
  );
};
export default GuidelineShare;
