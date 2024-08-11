import React from 'react';
import logo from './medium_rare_icon.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FaqPage from "./pages/FaqPage/FaqPage";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MapPage from "./pages/MapPage/MapPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/faq-page" element={<FaqPage />} />
            <Route path="/map-page" element={<MapPage />} />
            <Route path="/about-page" element={<AboutPage />} />
            <Route path="/" element={
              <React.Fragment>
                <header className="App-header">
                  <h1>桑莫君信息科技（深圳）有限公司</h1>
                  <img src={logo} className="App-logo" alt="logo"/>
                  <h3 className="centered-text">
                    欢迎来到三分熟 Medium Rare，一个专为活动爱好者打造的社交平台。
                  </h3>

                  <div className="mp-image-container">
                    <div className="mp-image">
                      <div className="mp-image-item">
                        <img src={`${process.env.PUBLIC_URL}/mp_home_page.jpg`} alt="MP Home"/>
                        <p className="mp-image-text">首页</p>
                      </div>
                      <div className="mp-image-item">
                        <img src={`${process.env.PUBLIC_URL}/mp_post_page.jpg`} alt="MP Post"/>
                        <p className="mp-image-text">活动页</p>
                      </div>
                    </div>

                    <h3 className="centered-text">
                      💡快速发现、发起活动想法💡
                    </h3>
                    <hr className="divider"/>

                    <div className="mp-image">
                      <div className="mp-image-item">
                        <img src={`${process.env.PUBLIC_URL}/mp_chat_page.jpg`} alt="MP Chat"/>
                        <p className="mp-image-text">聊天页</p>
                      </div>
                      <div className="mp-image-item">
                        <img src={`${process.env.PUBLIC_URL}/mp_my_page.jpg`} alt="MP Profile"/>
                        <p className="mp-image-text">个人页</p>
                      </div>
                    </div>

                    <h3 className="centered-text">
                      🚀快速组织、参与活动🚀
                    </h3>
                    <hr className="divider"/>

                    <div className="mp-image">
                      <div className="mp-image-item">
                        <img src={`${process.env.PUBLIC_URL}/mini_program_code.jpg`} alt="MP Code"/>
                        <p className="mp-image-text">小程序</p>
                      </div>
                      <div className="mp-image-item">
                        <img src={`${process.env.PUBLIC_URL}/gongzhonghao_code.jpg`} alt="GZH Code"/>
                        <p className="mp-image-text">公众号</p>
                      </div>
                    </div>

                    <h3 className="centered-text">
                      📢快来自己试试吧📢
                    </h3>
                    <div className="gap"></div>
                  </div>

                </header>
              </React.Fragment>
            }/>
          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;