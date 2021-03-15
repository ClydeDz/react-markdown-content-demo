import { render, screen, act } from '@testing-library/react';
import App from './App';
import axios from "axios";
import About from './About';
import Home from './Home';
import External from './External';
import Footer from './Footer';

jest.mock("axios");

describe('App components', () => {
  test('<App />', async () => {
    const res = {data: "## Sample content"};
    axios.get.mockResolvedValue(res);
    
    await act(async () => {
      render(<App />);
    });
  
    const heading = screen.queryAllByText(/Home/i);
    expect(heading[0]).toBeInTheDocument();
  });

  test('<Home />', async () => {
    const res = {data: "## Sample content"};
    axios.get.mockResolvedValue(res);
    
    await act(async () => {
      render(<Home />);
    });
  
    const heading = screen.queryAllByText(/Home/i);
    expect(heading[0]).toBeInTheDocument();
  });
  
  test('<About />', async () => {
    const res = {data: "## Sample content"};
    axios.get.mockResolvedValue(res);
    
    await act(async () => {
      render(<About />);
    });
  
    const heading = screen.queryAllByText(/About/i);
    expect(heading[0]).toBeInTheDocument();
  });
  
  test('<External />', async () => {
    const res = {data: "## Sample content"};
    axios.get.mockResolvedValue(res);
    
    await act(async () => {
      render(<External />);
    });
    
    const heading = screen.queryAllByText(/External Markdown Content/i);
    expect(heading[0]).toBeInTheDocument();
  });

  test('<Footer />', () => {
    render(<Footer />);
    const searchedContent = screen.queryAllByText(/Developed by/i);
    expect(searchedContent[0]).toBeInTheDocument();
  });
});
