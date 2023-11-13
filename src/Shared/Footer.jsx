import React from 'react';
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter, BsFillSendFill } from 'react-icons/bs'
import logoImage from "../assets/Images/feedback/footer-logo.png"
import appStore from "../assets/Images/feedback/app-store.png"
import playStore from './../assets/Images/feedback/gogle-play.png'

const Footer = () => {
  return (
    <footer className=' mt-10 bg-gray-300'>
      <div className='grid grid-cols-4 gap-3 pt-3  w-11/12 mx-auto h-[220px]'>
        <div>
          <img src={logoImage} alt="" />
          <p>We will not only assist you by taking  classes but also the exact and pinpoint guidelines to make your preparation better and closer to your destination.</p>
          <div className='flex text-xl gap-3'>
            <BsFacebook></BsFacebook>
            <BsInstagram></BsInstagram>
            <BsTwitter></BsTwitter>
            <BsLinkedin></BsLinkedin>
          </div>
        </div>
        <div>
          <h1 className='fw-bold text-[20px]'>Support & Policies</h1>
          <p>FAQs</p>
          <p>Terms and Condition</p>
          <p>Privacy and policy</p>
          <p>Refund policy</p>
        </div>
        <div>
        <h1 className='fw-bold text-[20px]'>Carrier</h1>
          <h1>Become a Instructor</h1>
          <p>About</p>
          <p>Event</p>
          <p>Blogs</p>
        </div>
        <div>
        <h1 className='fw-bold text-[20px]'>Newsletter</h1>
          <div className='flex'>
            <input type="text" />
            <BsFillSendFill></BsFillSendFill>
            </div>
            <p>Download App</p>
            <div className='flex'>
              <img src={appStore} alt="" />
              <img src={playStore} alt="" />
            </div>
          
        </div>
      </div>

    </footer>
  );
  }

export default Footer;