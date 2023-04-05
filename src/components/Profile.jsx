import React from 'react'

// img
import githubpro from '../assets/profile/github-profile.jpg'
import download from '../assets/profile/download-install-line-icon.svg'
import user from '../assets/profile/username-icon.svg'
import card from '../assets/profile/id-proof-black-icon.svg'
import cake from '../assets/profile/cake-icon.svg'
import hash from '../assets/profile/hashtag-sign-icon.svg'
import heart from '../assets/profile/heart-icon.svg'
import contact from '../assets/profile/contact-book-icon.svg'
import tel from '../assets/profile/phone-ringing-icon.svg'
import github from '../assets/profile/github-icon.svg'
import web from '../assets/profile/web-page-icon.svg'
import portfolio from '../assets/profile/Narongchai_port.pdf'

const Profile = () => {
  return (
    <div className="container">
        <div className="center-wrapper">
            <div className="profile-title" id="profile">
                <p><span>My</span> Profile</p>
            </div>
            <div className="profile-card">
                <div className="profile-main">
                    <div className="profile-pic">
                       <a href="https://github.com/lmDOW01">
                       <img src={githubpro} alt="my-github-profile" />
                       </a>
                    </div>
                    <div className="profile-about">
                        <p>Narongchai</p>
                        <hr />
                        <p>(lmDOW)</p>
                        <p>We are not obligated to 
                            explain our dreams  to anyone .
                            But we have a duty to make 
                            our dreams come true.
                        </p>
                        <a href={portfolio} className="btn first-btn "><img src={download} className="plus-icon" download alt="Download-icon" /></a>
                    </div>
                </div>
                <div className="profile-info">
                    <div className="profile-info-title">
                       <img src={user} className="grey" width={30} alt="user-icon" /> <p>ข้อมูลส่วนตัว</p>
                    </div>
                    <hr className="mt-1" />
                    <div className="profile-info-group mt-1">
                        <div className="profile-info-item">
                            <img src={card} alt="card-icon" width={30} className="grey" />
                            <p>ชื่อ</p> 
                        </div>
                        <div className="profile-info-item">
                            <img src={cake} alt="cake-icon" width={30} className="grey" />
                            <p>เกิดเมื่อ</p> 
                        </div>
                       
                    </div>
                    <div className="profile-info-group">
                        <div className="profile-info-item">
                          <span>นายณรงค์ชัย สุราษฎารมย์</span>
                        </div>
                        <div className="profile-info-item">
                        <span>17 พฤษภาคม 2547</span>
                        </div>
                    </div>
                    <div className="profile-info-group mt-1">
                        <div className="profile-info-item">
                            <img src={hash} alt="profile-icon" width={30} className="grey" />
                            <p>อายุ</p> 
                            <p className="mt-1">18 ปี</p>
                        </div>
                        <div className="profile-info-item ms-1">
                            <img src={heart} alt="heart-icon" width={30} className="grey " />
                            <p>สถานะ</p> 
                            <p className="mt-1">โสด</p>
                        </div>
                    </div>
                    <div className="profile-info-title mt-1 ">
                       <img src={contact} className="grey" width={30} alt="contact-icon" /> <p>ติดต่อ</p>
                    </div>
                    <hr className="mt-1" />
                    <div className="profile-info-item mt-1">
                            <img src={tel} alt="telephone-icon" width={30} className="grey " />
                            <p>096-847-8774</p> 
                    </div>
                    <div className="profile-info-item mt-1">
                           <a   href="https://github.com/lmDOW01"><img src={github} alt="github-con" width={30} className="grey " /></a>
                            <p>lmDOW01</p> 
                    </div>
                    <div className="profile-info-item mt-1">
                          <a  href="nrc-dev.com">  <img src={web} alt="web-icon" width={30} className="grey " /></a>
                            <p>nrc-dev.com</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile