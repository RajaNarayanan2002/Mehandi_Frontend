import React, { useState, useEffect } from 'react';
import aus from "../Assets/a-1.jpg";
import "./About.css";

export default function About() {
    return (
        <>
                <div id="about-section">

            <div className='container-abot'>
                <div className='imgcls'>
                    <img src={aus} alt="Arrow Left" className="sds" />
                </div>
                <div className="swxz">
                    <h1>About Us</h1>
<p1>At MehndiElegance, we specialize in creating stunning mehndi designs for weddings, festivals, and special occasions. With a personalized approach, we ensure each design reflects individual style and tradition. Our expert artists use premium henna and creative patterns to deliver beautiful, long-lasting results, making every celebration truly memorable.</p1>
<p2>We have crafted elegant designs for occasions such as <span className="para2">bridal blouses, party wear, traditional silk sarees, designer cuts, stonework patterns, mirror embroidery, floral thread work, kundan detailing, and festive collections.</span> Whether you seek a timeless classic or a modern twist, we are here to enhance your style with customized Aari work solutions.</p2>



                </div>

            </div>
            </div>
        </>
    );


}
