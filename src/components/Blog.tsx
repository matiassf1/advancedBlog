import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

export interface IBlog {
  title?: string;
  content?: string;
  blogID?: number
}

type blogType = {
  title: 'string';
  link: 'string';
  photo_url: 'string';
  published_datetime_utc: 'string';
  credits: 'https://www.reuters.com';
}

const Blog: React.FunctionComponent<IBlog> = ({ title = "Title Default", content = "Content default like lorem but writted by my own random thoughts IPA", blogID = 0 }) => {
  return (
    <>
      <div className={styles.blog_posts}>
        <h2>{title}</h2>
        <p>{content}</p>
        <Link href={`/blog:id=${blogID}`}>More...</Link>
      </div>
    </>
  );
};

export default Blog;
