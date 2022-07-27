import React from 'react';

const Header = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src='assets/images/logo/light-logo.svg' className='LE' alt='fleek-logo' /><img src='assets/images/logo/dark-logo.svg' className='DE' alt='fleek-logo' /></a>
  <button className='connect-btn ml-auto mobile-btn'>SignUp as a Creator</button>
  <button className="toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <img src='assets/images/icons/hamburger.svg' />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="./">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link rainbow-text" href="./marketplace">Marketplace</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button className='connect-btn'>SignUp as a Creator</button>
    </form>
  </div>
</nav>
    </>
  )
}

export default Header