import React from 'react';

const Footer = () => {
  return (
    <footer>

    <img src='assets/images/icons/footer-top-line.svg' className='footer-top-line' />
    <img src='assets/images/icons/footer-bottom-line.svg' className='footer-bottom-line' />
    <a href='#'><img src='assets/images/icons/top-arrow.svg' className='top-arrow' /></a>


      <div className='row'>
        <div className='col-12 col-md-3'>
            <img src='assets/images/logo/light-logo.svg' className='footer-logo' />
            <p>Mauris ultrices arcu at sem euismod dapibus. 
In eu nunc non risus elementum aliquam 
in sed mauris.</p> 

<p>Maecenas convallis turpis id enim auctor, ut 
porta ipsum euismod. In gravida et 
urna at volutpat. In quis egestas enim, 
ut convallis magna. </p>
        </div>
        <div className='col-6 col-md-2 text-center'>
        <h2>My Account</h2>
        <ul>
            <li><a href='#'>Authors</a></li>
            <li><a href='#'>Collection</a></li>
            <li><a href='#'>Author Profile</a></li>
            <li className='blue-text'><a href='#'>Create Item</a></li>
        </ul>
        </div>
        <div className='col-6 col-md-2 text-center'>
        <h2>Resources</h2>
        <ul>
            <li><a href='#'>Help & Support</a></li>
            <li><a href='#'>Live Auction</a></li>
            <li><a href='#'>Item Details</a></li>
            <li><a href='#'>Activity</a></li>
        </ul>
        </div>
        <div className='col-6 col-md-2 text-center'>
        <h2>Company</h2>
        <ul>
            <li><a href='#'>Explore</a></li>
            <li><a href='#'>Contact Us</a></li>
            <li><a href='#'>Our Blog</a></li>
            <li><a href='#'>FAQ</a></li>
        </ul>
        </div>
        <div className='col-6 col-md-3 socials'>
        <h2>Socials</h2>
        <ul>
            <li><a href='#'><img src='assets/images/icons/social.svg' className='social'/></a><a href='#'><img src='assets/images/icons/social.svg' className='social'/></a></li>
            <li><a href='#'><img src='assets/images/icons/social.svg' className='social'/></a><a href='#'><img src='assets/images/icons/social.svg' className='social'/></a></li>
            <li><a href='#'><img src='assets/images/icons/social.svg' className='social'/></a><a href='#'><img src='assets/images/icons/social.svg' className='social'/></a></li>
        </ul>
        </div>
      </div>
   </footer>
  )
}

export default Footer