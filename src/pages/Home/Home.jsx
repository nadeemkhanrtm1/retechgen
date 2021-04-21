import React from 'react';
import HomeBanner from "../../assests/images/home-banner.png";

const Home = () => {
    return (
        <div className="retechgen-home-container">
            <div className="rtg-home-col">
                <h2>Best IT Solution<br/> Providers For <span>Cloud- Based<br/> Applications</span> & <span>Infrastructure</span></h2>
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
