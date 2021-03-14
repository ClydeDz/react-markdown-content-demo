import logo from './logo.svg';
import { MarkdownContent } from 'react-markdown-content';

function Dashboard() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Dashboard
          </h1>
          <MarkdownContent 
            markdownFilePath="https://raw.githubusercontent.com/ClydeDz/react-markdown-content/main/test/fixtures/link.md"
            />
        </header>
      </div>
    );
  }
  
  export default Dashboard;