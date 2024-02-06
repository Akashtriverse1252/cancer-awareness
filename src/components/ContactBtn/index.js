import React, { useEffect, useState } from 'react';
import Call from "../../images/phone.webp";
import Whatsapp from "../../images/whatsapp-2.webp";
import { BsWhatsapp } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';

const Index = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        // Get the scroll position
        const scrollPosition = window.scrollY;
  
        // Define a threshold for when the class should be added
        const scrollThreshold = 100;
  
        // Check if the scroll position is greater than the threshold
        setIsScrolled(scrollPosition > scrollThreshold);
      };
  
      // Add the event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <div className={isScrolled ? 'float_btn mobile_show show' : 'float_btn mobile_show'}>
      <a href="https://wa.me/+919716664040?text=Hii!%20assurepathlabs.com, I am looking for Health Packages." target='_blank' onclick="dataLayer.push({'event': 'whatsapp-click'});">
        {/* <img src={Whatsapp} alt="Whatsapp" /> */}
        <BsWhatsapp/>
        Whatsapp
      </a>
      <a href="tel:01814667555" target='_blank' onclick="dataLayer.push({'event': 'call-click'});">
        <FiPhoneCall/>
        {/* <img src={Call } alt="Call" /> */}
        Call
      </a>
    </div>
  );
};

export default Index;
