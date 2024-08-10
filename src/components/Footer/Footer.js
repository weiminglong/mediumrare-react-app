// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <a
                className="App-link"
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
            >
                粤ICP备2023135574号
            </a>
            <p>©桑莫君信息科技（深圳）有限公司版权所有</p>
        </footer>
    );
};

export default Footer;