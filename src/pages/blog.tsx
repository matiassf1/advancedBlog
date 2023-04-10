import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Blog.module.css";

const blog: React.FunctionComponent = () => {
  const router = useRouter();
  const blogID = router.query.id;

  return (
    <div className={styles.blog__page}>
      <h3>Title of {blogID}</h3>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
        reprehenderit, esse repudiandae odio ducimus commodi omnis quisquam
        fugit? Quod error ipsa saepe modi repellendus doloremque debitis
        similique molestias et veritatis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptate laborum harum eius repudiandae. Ab doloribus
        dolorem vel dignissimos quae, ullam nobis sapiente nesciunt quia vero
        ratione! Eveniet laudantium ea consequuntur!
      </p>

      <blockquote>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        voluptas corrupti facilis, aperiam aliquid rem sed esse molestias,
        assumenda quam architecto incidunt libero culpa officia ipsum laborum
        similique at! Quae.
      </blockquote>
      <button type="button" className={styles.return__btn}>Return</button>
    </div>
  );
};

export default blog;
