import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import mediumRareIcon from '../../medium_rare_icon.jpg';

function NavBar() {
    return (
        <nav className="NavBar">
            <img src={mediumRareIcon} alt="Medium Rare Icon" className="nav-icon"/>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/faq-page">FAQ</Link></li>
                <li><Link to="/map-page">地图</Link></li>
                <li><Link to="/about-page">关于我们</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;