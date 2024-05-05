import React from 'react';
import styles from './adventures.module.css';
import BlogPostsHeader from '../../assets/icons/BlogPostsHeader.svg'
import HardDayHarveyPhoto from '../../assets/images/HardDayHarvey.png';

function AdventuresPage() {
  return (
    <>
    <div className={`${styles.blogPost} ${styles.container}`}>
        <div>
            <h2>Adventures<br /> With Sadie and Jonny</h2>
            <p>Dive into our collection of adventure stories, arranged in chronological order to showcase our journey through the great outdoors. Each post is packed with insights and practical information, allowing you to experience our adventures and plan your own.</p>
            <p>Explore our blog to gain inspiration, gather information, and prepare for your own adventures. Scroll down to read about our latest exploits and learn how to make these adventures your own.</p>
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

export default AdventuresPage;