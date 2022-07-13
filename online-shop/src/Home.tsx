import React from 'react';
import './styles/Home.css'

function Home() {
  return (
    <>
    <div className="wrapper">
        <div className="start">
            <h1>FINE COFFEE ROASTERS</h1>
            <p className="startscreen-caption">
                Find the finest coffee beans and accesories for the best expirience.
            </p>
            <button className="explore">EXPLORE</button>
        </div>
        <div className="image">
            <img width={750} src="home.jpg" alt="startscreen" />
        </div>
    </div>
    </>
  );
}

export default Home;
