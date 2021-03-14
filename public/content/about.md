## What is this exactly? 
This is [React Markdown Component](https://www.npmjs.com/package/react-markdown-content) that reads contents from a Markdown file and renders it as HTML. 

## Usage
Import the component in your file. 
```javascript
import { MarkdownContent } from 'react-markdown-content';
```

Add the `<MarkdownContent />` component to your file. Supply it with the path to the markdown file that needs to be displayed on this page. This path can be relative or absolute. Optionally, supply it a custom CSS class but we've added one by default anyway. 
```javascript
<MarkdownContent markdownFilePath="/path/to/markdownfile.md" className="custom-css-class"/>
```

## Fun fact
This demo website is using `<MarkdownContent />`. Check out the source code for this repo on [GitHub](https://github.com/ClydeDz/react-markdown-content-demo). 
