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
