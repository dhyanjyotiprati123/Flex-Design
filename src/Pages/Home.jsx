import React from 'react';
import Navbar from "../Components/Navbar";
import Description from "../Components/Description";

const Home = () => {
    return (
        <div className="home">
            <Navbar />

            <main className="container">
                <div className="sidebar">
                   <ul className="sidebar-list">
                       <li className="sidebar-list-item">
                           <a href="/" className="sidebar-list-link">
                               <svg className="sidebar-list-icon">
                                  <use xlinkHref="SVGS/sprite.svg#icon-home" />
                               </svg>
                               <span className="sidebar-list-name">Home</span>
                           </a>
                       </li>

                       <li className="sidebar-list-item">
                           <a href="/" className="sidebar-list-link">
                               <svg className="sidebar-list-icon">
                                  <use xlinkHref="SVGS/sprite.svg#icon-aircraft-take-off" />
                               </svg>
                               <span className="sidebar-list-name">Flight</span>
                           </a>
                       </li>

                       <li className="sidebar-list-item">
                           <a href="/" className="sidebar-list-link">
                               <svg className="sidebar-list-icon">
                                  <use xlinkHref="SVGS/sprite.svg#icon-key" />
                               </svg>
                               <span className="sidebar-list-name">Car Rentals</span>
                           </a>
                       </li>

                       <li className="sidebar-list-item">
                           <a href="/" className="sidebar-list-link">
                               <svg className="sidebar-list-icon">
                                  <use xlinkHref="SVGS/sprite.svg#icon-map" />
                               </svg>
                               <span className="sidebar-list-name">Tour</span>
                           </a>
                       </li>
                   </ul>
                   <div className="sidebar-copyright">
                       <p>Copyright @prati all right reserved 2021</p>
                   </div>
                </div>
                {/* main content */}
                <div className="content">
                   <div className="gallery">
                       <img className="gallery-pic" src="../img/hotel-1.jpg" alt="hotel"/>
                       <img className="gallery-pic" src="../img/hotel-2.jpg" alt="hotel"/>
                       <img className="gallery-pic" src="../img/hotel-3.jpg" alt="hotel"/>
                   </div>

                   <div className="about">
                       <div className="left">
                         <div className="left-heading">
                             <h1 className="left-name">
                                 Hotel Pragati Path
                             </h1>
                         </div>
                         <div className="left-rating">
                             <svg className="left-star">
                                <use xlinkHref="SVGS/sprite.svg#icon-star" />
                             </svg>
                             <svg className="left-star">
                                <use xlinkHref="SVGS/sprite.svg#icon-star" />
                             </svg>
                             <svg className="left-star">
                                <use xlinkHref="SVGS/sprite.svg#icon-star" />
                             </svg>
                             <svg className="left-star">
                                <use xlinkHref="SVGS/sprite.svg#icon-star" />
                             </svg>
                             <svg className="left-star">
                                <use xlinkHref="SVGS/sprite.svg#icon-star" />
                             </svg>
                         </div>
                       </div>
                       <div className="right">
                           <div className="right-location">
                               <svg className="right-location-icon">
                                  <use xlinkHref="SVGS/sprite.svg#icon-location-pin" />
                               </svg>
                               <h3 className="right-location-place">
                                   jyotikuchi dhopolia
                               </h3>
                           </div>
                           <div className="right-votes">
                               <p>892</p>
                               <h5>votes</h5>
                           </div>
                       </div>
                   </div>

                   <div className="hotel-description">
                       <Description />
                   </div>

                   <div className="footer-button">
                       <button className="footer-button-btn">Book Now</button>
                   </div>
                </div>
            </main>
        </div>
    )
}

export default Home
