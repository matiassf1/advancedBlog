import React from "react";
import styles from "@/styles/Blog.module.css";

interface IHome {}

const home: React.FunctionComponent<IHome> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__blogs}>
        <div className={styles.blogs}>
          <div className={styles.blog_posts}>
            <h2>Blog Post Title</h2>
            <p>Blog post content goes here...</p>
          </div>
          <div className={styles.blog_posts}>
            <h2>Blog Post Title</h2>
            <p>Blog post content goes here...</p>
          </div>
          <div className={styles.blog_posts}>
            <h2>Blog Post Title</h2>
            <p>Blog post content goes here...</p>
          </div>
          {/* Add more blog posts here... */}
        </div>
      </div>

      <div className={styles.container__sidebar}>
        {/* Sidebar with recent posts and categories */}
        <div className={styles.sidebar}>
          <h3>Recent Posts</h3>
          <ul>
            <li>
              <a href="#">Recent Post 1</a>
            </li>
            <li>
              <a href="#">Recent Post 2</a>
            </li>
            <li>
              <a href="#">Recent Post 3</a>
            </li>
            {/* Add more recent posts here... */}
          </ul>

          <h3>Categories</h3>
          <ul>
            <li>
              <a href="#">Category 1</a>
            </li>
            <li>
              <a href="#">Category 2</a>
            </li>
            <li>
              <a href="#">Category 3</a>
            </li>
            {/* Add more categories here... */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default home;
