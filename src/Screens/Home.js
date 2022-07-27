import React from 'react'
import {  useEffect,useState } from 'react'
import Header from './Components/Header';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './Components/Footer';


const Home = () => {
     
    useEffect(() => {
        AOS.init({
            duration : 1000,
            disable: 'mobile',
            delay: 200,
        });
        AOS.refresh();
      }, []);

  
    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        loop:true,
        autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
        slidesToShow: 9,
        slidesToScroll: 1,
        className: "slider-images",
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 1,
                },
            },
        ],

    };

  return (

    <>
   <section id='Banner'>
    <div className='row'>
        <div className='col-md-12' data-aos="fade-up">
            <h1>We make <span className='bold-txt'>individual 
creators, communities 
& brands</span> <span className='blue-txt'>to thrive in
the NFT world</span></h1>
            
            <p>Get started with the easiest and most secure platfor to buy & trade <span>Digital Art & NFTs</span></p>


        <div className='btn-outer'>
        <button className='explore-btn'>Explore</button>    
        <button className='create-btn'>Create<span>+</span></button>    
        </div>

        <img src='assets/images/mobile-banner-img.png' className='mobile-img' />

<div className='stats'>
<div className='row' >
            <div className='col-4 col-md-4'>
                <h2>26.3k</h2>
                <h3>ARTWORKS</h3>
            </div>
            <div className='col-4 col-md-4'>
                <h2>19.7k</h2>
                <h3>AUCTION</h3>
            </div>
            <div className='col-4 col-md-4'>
                <h2>7.5k</h2>
                <h3>ARTISTS</h3>
            </div>
 </div> 
    </div>        
        
        </div>
    </div>

    <img src='assets/images/photo-1.png' className='photo-1' alt='img-1' data-aos="fade-up" />
    <img src='assets/images/photo-2.png' className='photo-2' alt='img-2' data-aos="fade-up" />
    <img src='assets/images/photo-3.png' className='photo-3' alt='img-3' data-aos="fade-up" />
    <img src='assets/images/photo-4.png' className='photo-4' alt='img-4' data-aos="fade-up" />
    <img src='assets/images/photo-5.png' className='photo-5' alt='img-5' data-aos="fade-up" />
    
    <a href="#Features" className='down-arrow'><img src='assets/images/icons/down-arrow.svg' /></a>

   </section>

   <section id='Features'>
    <div className='features-inner' data-aos="fade-up">
    <div className='top text-center'>
       <h2>Platfom <span>features</span></h2>
    </div>
    <div className='bottom'>
        <div className='row'>
            <div className='col-md-3'>
                <h3><img src='assets/images/icons/create.svg' className='icon' />Create NFTs<img src='assets/images/icons/arrow.svg' className='arrow' /></h3>
                <p>Nunc malesuada est a tellus rhoncus, feugiat arcu finibus.</p>
            </div>
            <div className='col-md-3'>
               <h3><img src='assets/images/icons/collect.svg' className='icon' />Collect It<img src='assets/images/icons/arrow.svg' className='arrow' /></h3>
               <p>Nunc malesuada est a tellus rhoncus, feugiat arcu finibus.</p>
            </div>
            <div className='col-md-3'>
               <h3><img src='assets/images/icons/express.svg' className='icon' />Express Them<img src='assets/images/icons/arrow.svg' className='arrow' /></h3>
               <p>Nunc malesuada est a tellus rhoncus, feugiat arcu finibus.</p>
            </div>
            <div className='col-md-3'>
               <h3><img src='assets/images/icons/sell.svg' className='icon' />Sell NFTs</h3>
               <p>Nunc malesuada est a tellus rhoncus, feugiat arcu finibus.</p>
            </div>
        </div>
    </div>
    </div>
   </section>



   <section id='Exceptional'>

        <div className='row'>
            <div className='col-md-12 text-center heading' data-aos="fade-up" data-aos-duration="1200">
         <h1 className='big-text'>What makes us Exceptional</h1>
         <h5>We can do all of these in a spin</h5>
         <h2>What makes us <span>Exceptional</span></h2>
            </div>
        </div>
         
         <div className='row top-row'>
            <div className='col-md-5' data-aos="fade-right">
                <h5>WHAT  WE  DO</h5>
                <h3>For <span>Individual Creators:</span></h3>
                <p className='main_p'>Suspendisse feugiat ipsum consectetur erat ultricies aliquet. Etiam nisi orci, porta ut aliquam vel, <span>hendrerit vel erat.</span></p>
            </div>
            <div className='col-md-7'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card-div' id='card_1' data-aos="fade-up" data-aos-duration="2000">
                            <img src='assets/images/icons/switch.png' className='switch' />
                            <h4>Work with Brands to <span>Create their NFT Collections</span></h4>
                            <p>Nulla mattis ligula nibh, in tincidunt dolor molestie sit amet.</p>
                            <img src='assets/images/icons/line.svg' className='line' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='card-div' id='card_2' data-aos="fade-up" data-aos-duration="1500">
                          <img src='assets/images/icons/switch.png' className='switch' />
                          <h4>Exclusive Space for Creators to <span>Add Utility</span> to NFTs</h4>
                          <p>Nulla mattis ligula nibh, in tincidunt dolor molestie sit amet.</p>
                          <img src='assets/images/icons/line.svg' className='line' />
                        </div>
                    </div>
                </div>
            </div>
         </div>


         <div className='row bottom-row'>
         <div className='col-md-5 mobile-div' data-aos="fade-left">
                <h5>WHAT  WE  DO</h5>
                <h3>For <span>Major Brands:</span></h3>
                <p className='main_p'>Suspendisse feugiat ipsum consectetur erat ultricies aliquet. Etiam nisi orci, porta ut aliquam vel, <span>hendrerit vel erat.</span></p>
            </div>
            <div className='col-md-7'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card-div' id='card_3' data-aos="fade-up" data-aos-duration="1500">
                            <img src='assets/images/icons/switch.png' className='switch' />
                            <h4>The only Marketplace with <span>Dedicated Segment for Brands</span> Collectibles</h4>
                            <p>Nulla mattis ligula nibh, in tincidunt dolor molestie sit amet.</p>
                            <img src='assets/images/icons/line.svg' className='line' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='card-div' id='card_4' data-aos="fade-up" data-aos-duration="1500">
                          <img src='assets/images/icons/switch.png' className='switch' />
                          <h4>Launch Your Brand into NFT Space with <span>Trusted and Secure marketplace</span></h4>
                          <p>Nulla mattis ligula nibh, in tincidunt dolor molestie sit amet.</p>
                          <img src='assets/images/icons/line.svg' className='line' />
                        </div>
                        <div className='card-div' id='card_5' data-aos="fade-up" data-aos-duration="1500">
                          <img src='assets/images/icons/switch.png' className='switch' />
                          <h4>Get Access to <span>Hire NFT Creators</span> for Your Brand</h4>
                          <p>Nulla mattis ligula nibh, in tincidunt dolor molestie sit amet.</p>
                          <img src='assets/images/icons/line.svg' className='line' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-5 desktop-div' data-aos="fade-left">
                <h5>WHAT  WE  DO</h5>
                <h3>For <span>Major Brands:</span></h3>
                <p className='main_p'>Suspendisse feugiat ipsum consectetur erat ultricies aliquet. Etiam nisi orci, porta ut aliquam vel, <span>hendrerit vel erat.</span></p>
            </div>
         </div>

   </section>


   <section id='Create'>
    <img className='create_img_1' src='assets/images/create_img_1.png' />
    <img className='create_img_2' src='assets/images/create_img_2.png' />
    <img className='create_img_3' src='assets/images/create_img_3.png' />
          <h2 data-aos="fade-up">How to <span className='blue-text'>create NFT's</span> <span className='black-text'>in Fleeks</span><img src='assets/images/icons/plus.png' className='plus' /></h2>
          <div className='steps'>
            <div className='row'>
                <div className='col-md-4' data-aos="fade-left">
                    <div className='steps-inner text-center'>
                        <img src='assets/images/icons/sign-up.png' />
                        <p>Sign up as creator</p>
                    </div>
                    <img src='assets/images/icons/right-arrow.svg' className='arrow' />
                    <img src='assets/images/icons/d-arrow.svg' className='d-arrow' />
                </div>
                <div className='col-md-4' data-aos="fade-left" data-aos-delay="400">
                <div className='steps-inner text-center'>
                <img src='assets/images/icons/get-verified.png' />
                    <p>Get verified</p>
                </div>
                <img src='assets/images/icons/right-arrow.svg' className='arrow' />
                <img src='assets/images/icons/d-arrow.svg' className='d-arrow' />
                </div>
                <div className='col-md-4' data-aos="fade-left" data-aos-delay="600">
                <div className='steps-inner text-center'>
                <img src='assets/images/icons/create-nfts.png' />
                    <p>Create NFTs</p>
                </div>
                </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 text-center' data-aos="fade-up">
                <button className='sign-up'>Signup as Creator</button>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 text-center heading' data-aos="fade-up" data-aos-duration="1200">
         <h1 className='big-text'>Why We're Better!</h1>
         <h3>Why We're <span>Better!</span></h3>
         <img src='assets/images/icons/question.svg' className='question' />
            </div>
        </div>

        <div className='better'>
            <div className='row'>
                <div className='col-md-4 text-center' data-aos="fade-up">
                <img src='assets/images/icons/authentic.svg' />
                    <p>Authentic NFT Marketplace</p>
                </div>
                <div className='col-md-4 text-center' data-aos="fade-up" data-aos-delay="400">
                <img src='assets/images/icons/blockchain.svg' />
                    <p>Create NFTs on Sustainable Blockchain</p>
                </div>
                <div className='col-md-4 text-center' data-aos="fade-up" data-aos-delay="600">
                <img src='assets/images/icons/superman.svg' />
                    <p>Entrance to Thrive in NFT World</p>
                </div>
            </div>
        </div>
   </section>


   <section id='Table'>
    <div className='table-inner' data-aos="fade-up" data-aos-delay="600">
     
     <div className='row'>
        <div className='col-5 col-md-6'>
            <h2>Title</h2>
        </div>
        <div className='col-7 col-md-6'>
          <div className='row'>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/main-icon.png' className='icon'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/blank-icon.png' className='icon'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/blank-icon.png' className='icon'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/blank-icon.png' className='icon'/>
            </div>
          </div>
        </div>
     </div>
     <div className='row table-margin'>
        <div className='col-5 col-md-6'>
            <p>Proin ac tincidunt enim</p>
        </div>
        <div className='col-7 col-md-6'>
          <div className='row'>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/tick.svg' className='tick'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/table-line.svg' className='line'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/tick.svg' className='tick'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/table-line.svg' className='line'/>
            </div>
          </div>
        </div>
     </div>
     <hr/>
     <div className='row table-margin'>
        <div className='col-5 col-md-6'>
            <p>Sed tempor erat pharetra odio</p>
        </div>
        <div className='col-7 col-md-6'>
          <div className='row'>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/tick.svg' className='tick'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/tick.svg' className='tick'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/table-line.svg' className='line'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/table-line.svg' className='line'/>
            </div>
          </div>
        </div>
     </div>
     <hr/>
     <div className='row table-margin'>
        <div className='col-5 col-md-6'>
            <p>Donec sit amet lobortis ipsum</p>
        </div>
        <div className='col-7 col-md-6'>
          <div className='row'>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/tick.svg' className='tick'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/table-line.svg' className='line'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/table-line.svg' className='line'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/tick.svg' className='tick'/>
            </div>
          </div>
        </div>
     </div>
     <hr/>
     <div className='row table-margin'>
        <div className='col-5 col-md-6'>
            <p>Nam fringilla semper</p>
        </div>
        <div className='col-7 col-md-6'>
          <div className='row'>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/tick.svg' className='tick'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/table-line.svg' className='line'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/tick.svg' className='tick'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/tick.svg' className='tick'/>
            </div>
          </div>
        </div>
     </div>
     <hr/>
     <div className='row table-margin'>
        <div className='col-5 col-md-6'>
            <p>Morbi lobortis ligula at luctus eleifend</p>
        </div>
        <div className='col-7 col-md-6'>
          <div className='row'>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/tick.svg' className='tick'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/tick.svg' className='tick'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/table-line.svg' className='line'/>
            </div>
            <div className='col-3 col-md-3'>
                <img src='assets/images/icons/tick.svg' className='tick'/>
            </div>
          </div>
        </div>
     </div>

    </div>
   </section>


   <section id='Artists'>
    <div className='row'>
        <div className='col-md-12 text-center'>
            <h2><img src='assets/images/icons/artist_line_1.svg' className='line_1' />Top Artists<img src='assets/images/icons/artist_line_2.svg' className='line_2' /></h2>
        </div>     
    </div>

     <div className='slider' id="Slider_1">
    <Slider ref={c => setSliderRef(c)} {...settings} >
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_1.jpg' />
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_2.jpg' />
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_3.jpg' />
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_4.jpg' />
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_5.png' />
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_6.jpg' />
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_7.jpg' />
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_1.jpg' />
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_2.jpg' />
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_3.jpg' />
                        </div>
                        </div>
        </Slider>    
    </div>

    <div className='slider' id="Slider_2">
    <Slider ref={c => setSliderRef(c)} {...settings} >
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_7.jpg' />  
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_6.jpg' />  
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_5.png' />  
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_4.jpg' />  
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_3.jpg' />  
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_2.jpg' />  
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_1.jpg' />  
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_7.jpg' />  
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_6.jpg' />  
                        </div>
                        </div>
                        <div className="item">
                        <div className='inner'>
                        <img src='assets/images/artists/artist_5.png' />  
                        </div>
                        </div>
        </Slider>    
    </div>
   </section>

   
   <section id='Blogs'>
    <div className='row'>
        <div className='col-md-4'>
            <h2 data-aos="fade-right">Latest blogs from <span>Fleeks</span></h2>

            <div className='blog' data-aos="fade-up" data-aos-duration="2000">
                <img src='assets/images/blog_1.jpg' className='blog-img' />
                <div className='overlay'></div>
                <a>Integer suscipit lectus sed nulla scelerisque ullamcorper. Donec gravida, mauris in imperdiet.</a>
            </div>
        </div>
        <div className='col-md-4' data-aos="fade-up" data-aos-duration="2000">
        <div className='blog' >
                <img src='assets/images/blog_2.jpg' className='blog-img' />
                <div className='overlay'></div>
                <a>Nam ornare consectetur turpis id ultricies. Vivamus a neque justo. </a>
            </div>
            <div className='blog' data-aos="fade-up" data-aos-duration="2000">
                <img src='assets/images/blog_3.jpg' className='blog-img' />
                <div className='overlay'></div>
                <a>Sed et purus dapibus, posuere ipsum gravida, pellentesque erat. Praesent sapien dui.</a>
            </div>
        </div>
        <div className='col-md-4'>
        <div className='big-blog' data-aos="fade-up" data-aos-duration="2000">
                <img src='assets/images/blog_4.jpg' className='blog-img' />
                <div className='overlay'></div>
                <a>Mauris ultrices arcu at sem euismod dapibus. In eu nunc non risus elementum aliquam.</a>
            </div>
        </div>
    </div>
   </section>


   <section id='Subscribe'>
       <div className='row'>
        <div className='col-md-4'>
            <h2>Subscribe</h2>
        </div>
        <div className='col-8 col-md-6'>
            <input type="text" name="user_email" placeholder="Email ID" />
        </div>
        <div className='col-4 col-md-2'>
            <button className='btn btn-primary'><img src='assets/images/icons/send-arrow.svg'/></button>
        </div>
       </div>
   </section>

   <Footer/>



</>


  )
}

export default Home