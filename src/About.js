import { MarkdownContent } from 'react-markdown-content';
import logo from './logo.svg';

function About() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            About
          </h1>
          <MarkdownContent 
            markdownFilePath={`${process.env.PUBLIC_URL}/content/about.md`} 
            className="about-page" 
            />
        </header>
      </div>
    );
  }
  
  export default About;