import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from './layout';

import BlogList from '@/components/BlogList';
import styles from "@/styles/Blog.module.css";


const Home: NextPageWithLayout = () => {
  return (
      <div className={styles.container}>

        <BlogList />

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

Home.getLayout = function getLayout(home: ReactElement) {
  return (
    <Layout>
      {home}
    </Layout>
  )
}

export default Home;
