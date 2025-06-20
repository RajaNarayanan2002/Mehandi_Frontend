import React, { useState, useEffect } from 'react';
import "./Service.css";
// import s1 from "../Assets/service 1 img.jpg";
// import s2 from "../Assets/service 2 img.jpg";
import s3 from "../Assets/service 3 img.jpg";
import s1 from"../Assets/mehndi.png";
import s2 from "../Assets/Aari.png";

export default function Service() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const featuresData = [
        {
            key: 1,
            title: '01',
            subTitle: 'Bringing Elegance to Life Through Traditional Henna Designs',
            content:'Enhance your look with intricate Mehndi designs tailored for weddings, festivals, and special moments.',
            cost:'Cost: $20 /one-time pay',
            image: s1,
        },
        {
            key: 2,
            title:'02',
            subTitle: 'Designer Aari Work Blouses Crafted with Precision and Artistry',
            content:'Get a professionally designed Aari blouse tailored to your style, ensuring elegance and perfection for every occasion.',
            cost:'Cost: $10 /one-time pay',
            image: s2,
        },
        {
            key: 3,
            title:'03',
            subTitle: 'Job Application Service',
            content:'We apply to jobs on your behalf daily using VPNs on leading job portals, including Monster, LinkedIn, Dice, and CareerBuilder, ensuring maximum exposure and interview opportunities.',
            cost:'Cost: $250/month',
            image: s3,
        }
    ];

    return (
        <div id="services-section">
        <div className="service-container"> 
            <div className="servip">
                <h2 className="rsc">Services</h2>
                <p className="sw">
We bring over three years of dedicated experience in Mehndi and Aari work, delivering high-quality, intricate designs with a professional touch tailored for weddings, festivals, and special occasions.                </p>
                {/* <p className="sw">track your success in the IT industry.
                </p> */}
            </div>

            <div className="features-list">
                {featuresData.map((item) => (
                    <div key={item.key} className={`feature-card ${item.key % 2 === 0 ? 'reverse' : ''}`}>
                        <div className="feature-image-container">
                            <img 
                                src={item.image} 
                                alt={`Feature ${item.key}`} 
                                className="feature-image"
                            />
                        </div>
                        <div className="feature-content">
                            <h3 className="feature-title">{item.title}</h3>
                            {item.subTitle && (
                                <div className="feature-subtitles">
                                    <span>{item.subTitle}</span>
                                </div>
                            )}
                            <p className="feature-text">{item.content}</p>
                            <p className="feature-cost">{item.cost}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}
