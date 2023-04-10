import React, { ReactNode } from "react";
import styles from "@/styles/Blog.module.css";
import Blog from "./Blog";

export interface IBlogList {
  blogs?: [];
}

const defaultBlogs = [1,2,3,4,5]

const BlogList: React.FunctionComponent<IBlogList> = ({ blogs = defaultBlogs }) => {
  return (
    <div className={styles.container__blogs}>
      <div className={styles.blogs}>
        {blogs.map((blog ,index) => (
          <Blog key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
