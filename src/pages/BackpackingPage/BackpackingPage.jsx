import React from 'react';
import styles from './backpacking.module.css';
import BlogPostsHeader from '../../assets/icons/BlogPostsHeader.svg'
import HardDayHarveyPhoto from '../../assets/images/HardDayHarvey.png';

function BackpackingPage() {
  return (
    <>
    <div className={`${styles.blogPost} ${styles.container}`}>
        <div>
            <h2>Backpacking<br /> With Sadie and Jonny</h2>
            <p>Welcome to our dedicated space for sharing the tales of our backpacking journeys. While we are not the fastest hikers on the trail, our love for backpacking is rooted in the immersive experiences that each trek offers.</p>
            <p>Backpacking for us is about discovery and connection. We relish the slower pace that allows us to absorb the beauty of our surroundings, understand the terrain, and connect with nature on a deeper level. Our trips are less about covering miles quickly and more about creating memorable experiences in the wild.</p>
            <h3>From these blog posts you can expect details and information on each backpacking trip we do and how to recreate the experience for youself.</h3>
            <p>Our backpacking adventures take us through some of the most stunning landscapes, from the vast expanses of Southern Utah to the rugged peaks of the Wasatch Range. Each trip is a new chapter in our adventure story, filled with the sights, sounds, and scents of the wild. Join us as we strap on our packs and set out on foot, eager to discover what’s just over the next ridge or around the next bend. Our trails are open to all who seek to explore, relax, and reconnect with the great outdoors.</p>
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

export default BackpackingPage