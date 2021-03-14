import logo from './logo.svg';
import { MarkdownContent } from 'react-markdown-content';

function Home() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Home
          </h1>
          <MarkdownContent markdownFilePath={`${process.env.PUBLIC_URL}/content/home.md`} />
        </header>
      </div>
    );
  }
  
  export default Home;