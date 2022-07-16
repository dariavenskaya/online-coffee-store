import React from 'react';
import './styles/About.css'

function About() {
  return (
    <>
    <div className="wrapper about">
        <div className="about-map">
            <h3>FIND US:</h3>
        <iframe title='Find us:' 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d150308.40088071144!2d27.6463616!3d53.9394048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1657967611961!5m2!1sru!2sby" 
        width="500" height="400"  loading="lazy"></iframe>
        </div>
        <div className="about-info">
            <h3>OUR STORY</h3>
            <p className="STORY">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque orci ligula, rhoncus nec massa ac, 
            lobortis suscipit nisi. Sed ultrices felis ante, ut euismod ipsum facilisis sit amet. 
            Suspendisse potenti. Pellentesque in auctor mi, accumsan dapibus metus. Nam ullamcorper libero lorem. 
            Phasellus non eros a leo porttitor luctus eu sit amet nibh.  
            </p>
            <div className="contacts">
            <ul>
                <li><span>Location: </span>Minsk</li>
                <li><span>Call us: </span><a href="tel:+375112223344">+375 11 222 33 44</a></li>
            </ul>

        </div>
        </div>
    </div>
    </>
  );
}
export default About;