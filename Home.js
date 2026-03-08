import React, { useState, useRef, useEffect } from "react";
import './Home.css';
import { AiOutlineArrowRight } from "react-icons/ai";
import { PiScooterBold } from "react-icons/pi";
import { useContext } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from '../src/istockphoto.jpg'
function Home() {

    const [text, setText] = useState("");

    const showText = () => {
        setText("99311885843 per Call Now");
    };

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    const sliderRef = useRef(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const products = [
        {
            id: 1,
            title: "Smart Watch",
            price: "₹1,999",
            description: "Best smart watch with heart rate monitor",
            image: "https://via.placeholder.com/200"
        },
        {
            id: 2,
            title: "Headphone",
            price: "₹999",
            description: "Wireless headphone with noise cancellation",
            image: "https://via.placeholder.com/200"
        },
        {
            id: 3,
            price: "₹15,999",
            title: "Mobile Phone",

            description: "5G smartphone with 128GB storage",
            image: img
        },
        {
            id: 4,
            image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UL320_.jpg",
            link: "https://www.example.com/product1"
        },
        {
            id: 5,
            image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UL320_.jpg",
            link: "https://www.flipkart.com/plus"
        },
        {
            id: 6,
            image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UL320_.jpg",
            link: "https://www.flipkart.com/plus"
        },
        {
            id: 7,
            image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UL320_.jpg",
            link: "https://www.flipkart.com/plus"
        },
        {
            id: 8,
            image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UL320_.jpg",
            link: "https://www.flipkart.com/plus"
        },
        {
            id: 9,
            image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UL320_.jpg",
            link: "https://www.flipkart.com/plus"
        },
        {
            id: 10,
            image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UL320_.jpg",
            link: "https://www.flipkart.com/plus"
        },

    ];

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const goBack = () => {
        setSelectedProduct(null);
    };


    return (
        <>
            <div className="container">
                <div className="z">
                    <h2 className="logo0">IND.Plus+</h2>
                    <li className="men">
                        <Link to="/Login"><FaUser /> Login</Link>
                    </li>
                </div>
                <div className="slider" ref={sliderRef}>

                    <div className="slider-container">

                        {products.map((Product) => (
                            <div
                                className="card"
                                key={products.id}
                                onClick={() => handleProductClick(products)}
                            >

                                <img src={products.image} alt="" />

                                <h3>{products.title}</h3>

                            </div>

                        ))}

                    </div>
                </div>

                <span className="btno" onClick={scrollLeft}><BiChevronLeft />
                </span>
                <span className="btno" onClick={scrollRight}><BiChevronRight /></span>


            </div>
            <div className="div2">
                <h1>
                    MARCH OF FLIPKART <span>IND.Plus+</span>
                    <h2 className='dim'>flipkart + IND</h2>
                </h1>
            </div>

            <div className="container">
                <h2>Digital Products</h2>

                {/* Product List */}
                {!selectedProduct && (
                    <div className="product-list">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="card"
                                onClick={() => setSelectedProduct(product)}
                            >
                                <img src={product.image} alt={product.title} />
                                <h3>{product.title}</h3>
                            </div>
                        ))}
                    </div>
                )}
                {selectedProduct && (
                    <div className="product-details">

                        <button onClick={goBack}>⬅ Back</button>

                        <img src={selectedProduct.image} alt="" />

                        <h2>{selectedProduct.title}</h2>

                        <p>{selectedProduct.description}</p>

                        <h3>{selectedProduct.price} Ek behtareen title mein brand ka naam,
                            display ka size aur main features hona chahiye.<br />
                            Style ke liye: "[Brand Name] Luxury Edition: 1.43" AMOLED Display, Stainless
                            Steel Body, & AI Voice Assistant".<br />
                            Fitness ke liye: "[Brand Name] Sport Pro: GPS Tracking,<br />
                            120+ Sports Modes, SpO2 & 24/7 Heart Rate Monitor".<br />
                            Bye karne ke liye call now
                        </h3>
                        <button onClick={showText}>
                            Buy Now
                        </button>

                        {showText && (
                            <p>{text}</p>



                        )}

                    </div>
                )}
            </div>
            <p className='vcv'>Welcome to all Popples my Ecommees Website IND.Plus+
                <div className='btn6'>
                    <a href="https://www.flipkart.com/">
                        <button className='btny'>Buy Now<BsArrowRight /></button>
                    </a>
                </div>
                .</p>

            <footer className="footer">
                <div className="footer-top">
                    {/* Logo Section */}
                    <div className="footer-col logo-col">
                        <h2 className="logo">IND.Plus</h2>
                        <p>IND.Plus India Ecommers Bast Company.</p>
                    </div>
                    <div className="footer-col">
                        <h4>ABOUT</h4>
                        <ul>
                            <li>Our Story</li>
                            <li>Career</li>
                            <li>Contact</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="footer-col">

                        <ul>
                            <li>Chalo</li>
                            <li>Chalo 1000V2</li>
                            <li>Chalo Smart PRO</li>
                            <li>Chalo Smart Plus</li>
                            <li>Chalo Smart ECO</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>COMMERCIAL</h4>
                        <ul>
                            <li>Book a Test Ride</li>
                            <li>Book Now</li>
                            <li>Find a Dealer</li>
                            <li>Support</li>
                            <li>SCRATCH & WIN</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>POLICY</h4>
                        <ul>
                            <li>Privacy policy</li>
                            <li>Terms & Conditions</li>
                            <li>Refund & Cancellations</li>
                            <li>Shipping policy</li>
                            <li>Warranty Registration</li>
                        </ul>
                    </div>
                </div>
                <hr />

                {/* Bottom */}
                <div className="footer-bottom">
                    <p>
                        © 2026 IND.Plus GREEN E-VEHICLES PRIVATE LIMITED All rights reserved
                    </p>

                    <div className="social-icons">
                        <span><FaFacebookF /> Facebook</span>
                        <span><FaInstagram /> Instagram</span>
                        <span><FaYoutube /> Youtube</span>
                        <span><FaLinkedinIn /> LinkedIn</span>
                        <span><FaXTwitter /> Twitter</span>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;