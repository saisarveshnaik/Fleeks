import React from 'react'
import { useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import Home from './Screens/Home';
import Marketplace from './Screens/Marketplace';
import About from './Screens/About';
import Header from './Screens/Components/Header';
import Loader from './Screens/Components/Loader';




function App() {

  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

   const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" :"light"));
   }

   useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])


  return (
    <div className='App' id={theme} >    {/*website theme is set here*/}

{loading === false ? (
<>  
<Header/>
<BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="about" element={<About />} />
          </Routes>
</BrowserRouter>
</>
) : (
  <Loader/>
      )}

    {/* <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="#"><img src='assets/images/logo/light-logo.svg' className='LE' alt='fleek-logo' /><img src='assets/images/logo/dark-logo.svg' className='DE' alt='fleek-logo' /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Collectables</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Artists</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          My NFTs <img src='assets/images/icons/light-drop.svg' className='LE' alt='icon' /><img src='assets/images/icons/dark-drop.svg' className='DE' alt='icon' />
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Item 1</a>
          <a className="dropdown-item" href="#">Item 2</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link blue-text" href="#">Create<sup>+</sup></a>
      </li>
      <li className="nav-item">
        <a className="nav-link rainbow-text" href="#">Marketplace</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <div>
    <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleTheme} />
  <label for="checkbox" className="label">
    <i className="fa fa-moon-o"></i>
    <i className='fa fa-sun-o'></i>
    <div className='ball'></div>
  </label>
  </div>
    <ul className="navbar-nav mr-auto">
    <li className="nav-item dropdown">
        <a className="nav-link white-clr" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          SignUp <img src='assets/images/icons/light-drop.svg' className='LE' alt='icon' /><img src='assets/images/icons/dark-drop.svg' className='DE' alt='icon' />
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Item 1</a>
          <a className="dropdown-item" href="#">Item 2</a>
        </div>
      </li>
    </ul>
      <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={toggleTheme}>Search</button>
      <button className='connect-btn'>SignUp as a Creator</button>
      <button className='btn btn-white search-btn'><img src='assets/images/icons/light-search.svg' className='LE' alt='search' /><img src='assets/images/icons/dark-search.svg' className='DE' alt='search' /></button>
    </form>
  </div>

<img src='assets/images/light-line.svg' className='line LE' />
<img src='assets/images/dark-line.svg' className='line DE' />
</nav> */}

    </div>
  );
}

export default App;
