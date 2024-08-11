// src/pages/FaqPage/FaqPage.js
import React from 'react';
import './FaqPage.css';

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
                <h2 className="faq-question">Q: 第一次使用，怎么发布“我的想法”？</h2>
                <p className="faq-answer">A: 拍/截一张图或简单文字，点【创建】表达自己的需求或者小愿望</p>
            </div>
            <div className="faq-item">
                <h2 className="faq-question">Q: 如何参加活动?</h2>
                <p className="faq-answer">A: 参加活动：在聊天室哪，点“加入活动”</p>
            </div>
            <div className="faq-item">
                <h2 className="faq-question">Q: 如何联系三分熟 Medium Rare的客服?</h2>
                <p className="faq-answer">A: 如果您有任何问题，可以通过“我的”->“设置”->“帮助与反馈”联系客服</p>
            </div>
            <div className="faq-item">
                <h2 className="faq-question">Q: 如何联系活动发起人?</h2>
                <p className="faq-answer">A: 目前成团后，需要用户自行加wx或在聊天室里联络，-后期会提供一键拨打虚拟号入口，敬请期待</p>
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
        </div>
    );
};

export default FaqPage;