// src/pages/FaqPage/FaqPage.js
import React from 'react';
import './FaqPage.css';
import Footer from '../../components/Footer/Footer';

const FaqPage = () => {
    return (
        <div className="faq-page">
            <h1 className="faq-title">FAQ</h1>
            <div className="faq-item">
                <h2 className="faq-question">Q: 什么是“三分熟 Medium Rare”?</h2>
                <p className="faq-answer">A:
                    我们是一个活动想法发起平台，在这里你可以发布你的活动想法吸引拥有相同兴趣的人参加，你也可以发现并加入他人的活动</p>
            </div>
            <div className="faq-item">
                <h2 className="faq-question">Q: 发起活动前我需要定好活动细节吗?</h2>
                <p className="faq-answer">A: 不需要！活动细节如时间、地点、预算等可以在活动聊天室中同小伙伴们一同确认</p>
            </div>
            <div className="faq-item">
                <h2 className="faq-question">Q: How can I join an event?</h2>
                <p className="faq-answer">A: You can join an event by signing up on our platform and browsing available
                    events.</p>
            </div>
            <div className="faq-item">
                <h2 className="faq-question">Q: 如何联系三分熟 Medium Rare的客服?</h2>
                <p className="faq-answer">A: 如果您有任何问题，可以通过“我的”->“设置”->“帮助与反馈”联系客服</p>
            </div>
            <div className="faq-item">
                <h2 className="faq-question">Q: 三分熟 Medium Rare目前支持哪些平台?</h2>
                <p className="faq-answer">A: 我们暂时只上线了小程序端，iOS、安卓、Web端目前还正在研发中。</p>
            </div>
            <div className="faq-item">
                <h2 className="faq-question">Q: 三分熟 Medium Rare目前支持哪些平台?</h2>
                <p className="faq-answer">A: 我们暂时只上线了小程序端，iOS、安卓、Web端目前还正在研发中。</p>
            </div>
            {/*<div className="faq-item">*/}
            {/*    <h2 className="faq-question">Q: 三分熟 Medium Rare目前支持哪些平台?</h2>*/}
            {/*    <p className="faq-answer">A: 我们暂时只上线了小程序端，iOS、安卓、Web端目前还正在研发中。</p>*/}
            {/*</div>*/}
            {/*<div className="faq-item">*/}
            {/*    <h2 className="faq-question">Q: 三分熟 Medium Rare目前支持哪些平台?</h2>*/}
            {/*    <p className="faq-answer">A: 我们暂时只上线了小程序端，iOS、安卓、Web端目前还正在研发中。</p>*/}
            {/*</div>*/}
            {/*<div className="faq-item">*/}
            {/*    <h2 className="faq-question">Q: 三分熟 Medium Rare目前支持哪些平台?</h2>*/}
            {/*    <p className="faq-answer">A: 我们暂时只上线了小程序端，iOS、安卓、Web端目前还正在研发中。</p>*/}
            {/*</div>*/}
            {/*<div className="faq-item">*/}
            {/*    <h2 className="faq-question">Q: 三分熟 Medium Rare目前支持哪些平台?</h2>*/}
            {/*    <p className="faq-answer">A: 我们暂时只上线了小程序端，iOS、安卓、Web端目前还正在研发中。</p>*/}
            {/*</div>*/}
            <Footer />
        </div>
    );
};

export default FaqPage;