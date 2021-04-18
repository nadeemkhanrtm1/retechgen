import React from 'react';
import HomeBanner from "../../assests/images/home-banner.png";

const Home = () => {
    return (
        <div className="retechgen-home-container">
            <div>
                <h2>Best IT Solution Providers For<br/> Cloud- Based Applications and Infrastructure</h2>
                <button>
                    Know More
                </button>
            </div>
            <div>
                <img src={HomeBanner} alt="Home Banner"/>
            </div>
        </div>
    )
}

export default Home
