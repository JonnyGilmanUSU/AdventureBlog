import React from 'react';
import styles from './hiking.module.css';
import BlogPostsHeader from '../../assets/icons/BlogPostsHeader.svg'
import HardDayHarveyPhoto from '../../assets/images/HardDayHarvey.png';

function HikingPage() {
  return (
    <>
    <div className={`${styles.blogPost} ${styles.container}`}>
        <div>
            <h2>Hiking<br /> With Sadie and Jonny</h2>
            <p>Step into our world of hiking where we share the routes we’ve traversed and the moments that have made each journey special. We may not be the fastest hikers, but our passion lies in the exploration and enjoyment of the trail.</p>
            <h3>From these blog posts you can expect details and information on each hike we do and how to recreate the experience for youself.</h3>
            <p>For us, hiking is an invitation to slow down and savor the world around us. It’s a time to appreciate the subtle changes in the landscape, the shifting patterns of light through the trees, and the quiet moments that fill the soul with peace. We focus on adventure hikes that offer not just physical exercise but also a chance to escape into nature’s embrace.</p>
            <p>Our hikes take us through some of the most breathtaking areas—from the expansive vistas of Utah’s national parks to the intimate paths winding through local forests. Each path offers new discoveries and a chance to create lasting memories. Join us as we lace up our boots and hit the trail, eager for the sights and experiences that await. Whether you’re seeking solitude, adventure, or a gentle stroll, our hiking stories are here to inspire and guide your next outdoor adventure.</p>
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

export default HikingPage;