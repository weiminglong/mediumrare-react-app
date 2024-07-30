import logo from './medium_rare_icon.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          桑莫君信息科技（深圳）有限公司
        </p>
        <p>
          欢迎来到三分熟｜拼搭子，一个专为活动爱好者打造的社交平台。在这里，无论是吃喝玩乐、搭饭、唱K、旅游还是打球，你都能轻松找到志同道合的伙伴，享受更多的乐趣和优惠。我们致力于通过高效便捷的社交体验，帮助用户快速组织和参与各类精彩活动，同时为商家提供丰富的合作机会。加入我们，发现更多精彩，结识更多朋友，让每一刻都充满乐趣和惊喜！
        </p>
        <a
          className="App-link"
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          粤ICP备2023135574号
        </a>
      </header>
    </div>
  );
}

export default App;
