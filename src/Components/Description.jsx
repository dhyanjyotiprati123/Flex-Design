import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Description = () => {
    return (
        <div className="description">

            <div className="description-about">
               <div className="description-about-top">
                  <p className="descrption-about-top-para">
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, 
                     earum sunt accusantium laudantium recusandae, 
                     reprehenderit id doloribus esse corporis tenetur autem veniam vel dolorem ea at optio doloremque sed nam itaque. 
                     facilis sunt sed distinctio ab recusandae nihil officia ipsa et ratione necessitatibus fugi
                     itaque totam expedita eum accusantium harum doloremque fugiat odit? Fugiat, laboriosam iure!
                  </p>
               </div>
               <div className="description-about-middle">
                <p className="descrption-about-middle-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi corrupti tempore blanditiis porro?
                     Omnis delectus impedit ipsum dolores fugit sequi, aperiam mollitia laborum modi? Cupiditate ipsa voluptas quibusdam recusandae earum, 
                  </p>
               </div>
               <div className="description-about-bottom">
                   <ul className="list">
                       <li className="list-item"><ArrowForwardIosIcon style={{color: "#ff79cd"}} /> Close To City</li>
                       <li className="list-item"><ArrowForwardIosIcon style={{color: "#ff79cd"}} /> Wi Fi Facility</li>
                       <li className="list-item"><ArrowForwardIosIcon style={{color: "#ff79cd"}} /> room service </li>
                       <li className="list-item"><ArrowForwardIosIcon style={{color: "#ff79cd"}} /> swimming pool</li>
                       <li className="list-item"><ArrowForwardIosIcon style={{color: "#ff79cd"}} /> personal locker</li>
                       <li className="list-item"><ArrowForwardIosIcon style={{color: "#ff79cd"}} /> massage parlour</li>
                       <li className="list-item"><ArrowForwardIosIcon style={{color: "#ff79cd"}} /> inside bar</li>
                       <li className="list-item"><ArrowForwardIosIcon style={{color: "#ff79cd"}} /> spring bed</li>
                   </ul>
               </div>
               <div className="description-about-footer">
                   <p>
                       recomended by kuku, sunuki and putuki
                   </p>
                   <div className="profile">
                       <img src="../img/user-1.jpg" alt="profile" className="profile-pics"/>
                       <img src="../img/user-2.jpg" alt="profile" className="profile-pics"/>
                       <img src="../img/user-3.jpg" alt="profile" className="profile-pics"/>
                       <img src="../img/user-4.jpg" alt="profile" className="profile-pics"/>
                   </div>
               </div>
            </div>

            <div className="description-review">
               <div className="description-review-box">
                      <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                          Nemo reprehenderit facere porro praesentium? Iure, facere sed dignissimos ex similique dolorem!
                      </p>
                      <div className="user">
                          <div className="user-info">
                             <img  src="../img/user-5.jpg" alt="user"/>
                             <div className="user-info-bio">
                                 <h5>sunuki</h5>
                                 <p>1:feb 2021</p>
                             </div>
                          </div>
                          <div className="user-rating">
                              <h1>7.9</h1>
                          </div>
                      </div>
               </div>
               <div className="description-review-box">
                   <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                     Nemo reprehenderit facere porro praesentium? Iure, facere sed dignissimos ex similique dolorem!
                  </p>
                      <div className="user">
                          <div className="user-info">
                             <img  src="../img/user-4.jpg" alt="user"/>
                             <div className="user-info-bio">
                                 <h5>devdas</h5>
                                 <p>5:march 2021</p>
                             </div>
                          </div>
                          <div className="user-rating">
                              <h1>8.9</h1>
                          </div>
                      </div>
               </div>
               <div className="description-review-button">
                    <button className="btn">see more &rarr;</button>
               </div>
            </div>
        </div>
    )
}

export default Description
