import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navber.css";
import { MdHome } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSearch, FaShoppingCart } from "react-icons/fa";



function Navber() {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    return (
        <nav className="nav">
            <div className="search-container">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="         Search For Electronics products, Brands and More"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
            </div>

            <ul className="nav-links">
                <li>
                    <Link to="/"><MdHome /> Home</Link>
                </li>

                <li className="dropdown">
                    <span><AiFillInfoCircle /> About ▾</span>
                </li>
                <div className="cart">
                    <FaShoppingCart />
                </div>
                <li>
                    <span><Link to="/Sfjwe">More</Link>   </span>
                </li>
                <li>
                    <spam><Link to="/Contact"><MdOutlineMailOutline /> Contact</Link></spam>
                </li>
            </ul>
        </nav>
    );
}

export default Navber;