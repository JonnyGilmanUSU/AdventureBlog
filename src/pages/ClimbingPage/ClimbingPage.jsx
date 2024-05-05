import React from 'react';
import styles from './climbing.module.css';
import BlogPostsHeader from '../../assets/icons/BlogPostsHeader.svg'
import HardDayHarveyPhoto from '../../assets/images/HardDayHarvey.png';
import TheatreOfShadowsPhoto from '../../assets/images/TheatreOfShadows.png';

function ClimbingPage() {
  return (
    <>
        <div className={`${styles.blogPost} ${styles.container}`}>
            <div>
                <h2>Climbing<br /> With Sadie and Jonny</h2>
            <p>Welcome to our climbing page, where we share our experiences with traditional (trad) and sport climbing across various landscapes. While we may not be the strongest climbers out there, our technical proficiency ensures that we safely enjoy each ascent.</p>
            <h3>Climbing Philosphy</h3>
            <p>For us, climbing is less about pushing limits and more about enjoying the journey. We thrive on adventure climbs that offer not just physical challenges but also the chance to immerse ourselves in the beauty of nature. It’s about the peaceful moments spent on vertical faces and the camaraderie found among fellow climbers.</p>
            <p>Climbing offers us a unique way to connect with the outdoors, providing a mix of adrenaline and tranquility. Whether hanging on a crag in the Wasatch Mountains or planning our next big wall, each climb is a chance to explore limits, enjoy nature, and disconnect from the daily grind. Join us as we lace up our climbing shoes and chalk up for adventures that lift us above the ordinary, into the extraordinary vistas that only climbers can reach.</p>
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

export default ClimbingPage;