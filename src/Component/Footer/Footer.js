import React from "react";
import "./Footer.css";
import fs from "../Assets/6a066435-5809-412f-aaeb-dec9f975eb3a.jpg";
import f1 from "../Assets/Vf-1.png";
import f2 from "../Assets/Vf-2.png";
import f3 from "../Assets/Vf-3.png";
import f4 from "../Assets/gmail.png";
import fd from "../Assets/Rectangle 880.png";
import f5 from "../Assets/instagram (1).png";
import f6 from "../Assets/whatsapp-logo_4406163.png"

export default function Footer() {
    const contactInfo = {
        company: "Kaviya Designs",
        address: "102, koliyankulam",
        address1: "kamarajar Street, TirunelveliDist- 627116",
        phone: "+91 9955550505",
        website: "www.hiremany.com",
    };

    const navLinks = [
        { label: "About Us", id: "about-section" },
        { label: "Services", id: "services-section" },
        { label: "Testimonials", id: "testimonials-section" },
        { label: "Contact Us", id: "contact-section" }
    ];

    const mediaList = [
        { img: f4, path: "https://www.google.com" },
        { img: f5, path: "https://www.google.com" },
        { img: f6, path: "https://www.google.com" },
    ];

    const handleClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div id="contact-section">
            <div className="footer">
                <div className="hgf">
                    <div className="rod">
                        <img src={fs} alt="Company Logo" className="logos" />
                    </div>
                    <div className="ros">
                        <img src={fd} alt="Decorative" className="rectangle" />
                        <span className="dial">
                            We are here to assist you in securing your next IT job. 
                            Reach out to us for expert guidance and personalized career support.
                        </span>
                    </div>
                </div>
                <div className="footer-sec">
                    <div className="footer-container">
                        {/* Company Info */}
                        <div className="footer-info">
                            <div className="footer-title">
                                <img src={f1} className="map" alt="Location icon" />
                                <p1>{contactInfo.company}</p1>
                            </div>
                            <div className="footer-title">
                                <p1>{contactInfo.address}</p1>
                            </div>
                            <div className="footer-title">
                                <p1>{contactInfo.address1}</p1>
                            </div>
                            <div className="footer-title">
                                <img src={f2} className="map" alt="Phone icon" />
                                <p1>{contactInfo.phone}</p1>
                            </div>
                            <div className="footer-title">
                                <img src={f3} className="map" alt="Website icon" />
                                <p1>
                                    <a href={`mailto:${contactInfo.website}`}>
                                        {contactInfo.website}
                                    </a>
                                </p1>
                            </div>
                        </div>

                        {/* Navigation Links with click */}
                        <div className="footer-links">
                            {navLinks.map((link, index) => (
                                <span
                                    key={index}
                                    className="nav-item"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleClick(link.id)}
                                >
                                    {link.label}
                                </span>
                            ))}
                        </div>

                        {/* Social Media Links */}
                        <div className="footer-social">
                            <h3>Follow Us</h3>
                            <div className="ro">
                                {mediaList.map((item, index) => (
                                    <a key={index} href={item.path} target="_blank" rel="noopener noreferrer">
                                        <img src={item.img} alt={`Social media ${index + 1}`} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="yew">
                    <p>"Your dream IT job is just one application away. Let us get you there!"</p>
                </div>
            </div>
        </div>
    );
}
