import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./pages/about";
import Home from "./pages/home";
import Login from "./pages/login";
import Contact from "./pages/contact";
import AddFur from "./pages/addfur";
import Added from "./pages/added";
import reportWebVitals from './reportWebVitals';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="addfur" element={<AddFur />} />
        <Route path="added" element={<Added />} />

      </Routes>
    </BrowserRouter>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
