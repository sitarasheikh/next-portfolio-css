import React from 'react';
import './styles/Blog.css'; // Importing the vanilla CSS file

const Blog = () => {
  return (
    <div id="blog" className="blog-section">
      <h1 className="heading">
        MY <span className="highlight-text">BLOG</span>
      </h1>
      <div className="blog-grid">
        
        <div className="blog-post">
          <div className="image-container">
            <img src="/images/b7.jpeg" alt="blog" className="image" />
          </div>
          <div className="blog-content">
            <div className="date-badge">Dec 10, 2023</div>
            <div className="meta-info">
              <div className="author">
                <span className="icon"></span>
                <p>By ALEX</p>
              </div>
              <div className="comments">
                <span className="icon"></span>
                <p>Comments (3)</p>
              </div>
            </div>
            <p className="blog-title">Artificial Intelligence</p>
          </div>
        </div>

        <div className="blog-post">
          <div className="image-container">
            <img src="/images/b1.jpeg" alt="blog" className="image" />
          </div>
          <div className="blog-content">
            <div className="date-badge">Jan 20, 2024</div>
            <div className="meta-info">
              <div className="author">
                <span className="icon"></span>
                <p>By Anas</p>
              </div>
              <div className="comments">
                <span className="icon"></span>
                <p>Comments (6)</p>
              </div>
            </div>
            <p className="blog-title">Next.js Full Stack Development</p>
          </div>
        </div>

        <div className="blog-post">
          <div className="image-container">
            <img src="/images/b6.jpeg" alt="blog" className="image" />
          </div>
          <div className="blog-content">
            <div className="date-badge">Aug 13, 2024</div>
            <div className="meta-info">
              <div className="author">
                <span className="icon"></span>
                <p>By Civi</p>
              </div>
              <div className="comments">
                <span className="icon"></span>
                <p>Comments (9)</p>
              </div>
            </div>
            <p className="blog-title">AI New Feature</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Blog;
