import React from 'react';
import styles from './canyoneering.module.css';
import BlogPostsHeader from '../../assets/icons/BlogPostsHeader.svg'
import HardDayHarveyPhoto from '../../assets/images/HardDayHarvey.png';

function CanyoneeringPage() {
  return (
    <>
    <div className={`${styles.blogPost} ${styles.container}`}>
        <div>
            <h2>Canyoneering<br /> With Sadie and Jonny</h2>
            <p>Welcome to our canyoneering journey! My wife and I are passionate about exploring Utah's stunning canyons, each adventure offering unique challenges and mesmerizing landscapes.</p>
            <p>This page features blog posts about our escapades, detailing the routes, technical gear, and the beauty of each canyon. Dive into each post to discover more about our thrilling experiences. Join us as we navigate the depths of Utah's hidden natural wonders, one canyon at a time.</p>
        </div>
        <img className={styles.blogPostsHeader} src={BlogPostsHeader} alt="" />
        <img src={HardDayHarveyPhoto} alt="hard day harvey canyon" />
        <h3>Hard Day Harvey: Canyoneering near Lake Powell</h3>
        <p>Last weekend, my wife and I took on one of Utah's hidde gems - Hard Day Harvey Canyon. Known for its challenging decents and ...</p>
        <p className={styles.blogPostDate}>March 2024</p>
        <button className={styles.readMoreButton}>Read More</button>
        <div className={styles.postBreak}></div>
    </div>
    </>
  )
}

export default CanyoneeringPage