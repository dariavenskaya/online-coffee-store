import React from 'react';
import './styles/Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="wrapper startscreen">
        <div className="start-about">
            <h1>FINE COFFEE ROASTERS</h1>
            <p className="startscreen-caption">
                Find the finest coffee beans and accesories for the best expirience.
            </p>
            <Link to='/shop'><button className="explore">EXPLORE</button></Link>
        </div>
        <div className="image">
            <img width={720} src="home.jpg" alt="startscreen" />
        </div>
    </div>
    </>
  );
}

export default Home;
