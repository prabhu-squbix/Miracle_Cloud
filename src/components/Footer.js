import { useState } from 'react';
import '../styles/Footer.css';
import Logo from '../assets/Logo.svg';

export default function Footer() {
    const [iconActive,setIconActive] = useState(0);
    function handleSetIconActive(id) {
        setIconActive(id);
    }
    function handleSetIconInactive(){
        setIconActive(0);
    }
    
    return (
        <>
        <div className='Footer'>
            <div className='Section'>
                <img src={Logo} alt='Logo'className='FooterLogo'></img>
            </div>
            <div className='Section'>
                <div className='SectionTitle'>Overview</div>
                <div className='SectionContent'>
                    <div className='feature'>Medicines</div>
                    <div className='feature'>Healthcare Devices</div>
                    <div className='feature'>Health Progress</div>
                </div>
            </div>
            <div className='Section'>
                <div className='SectionTitle'>Company</div>
                <div className='SectionContent'>
                    <div className='feature'>Home</div>
                    <div className='feature'>About us</div>
                    <div className='feature'>Services</div>
                </div>
            </div>
            <div className='Section'>
                <div className='SectionTitle'>Explore</div>
                <div className='SectionContent'>
                    <div className='feature'>Blogs & Feeds</div>
                    <div className='feature'>Privacy Police</div>
                    <div className='feature'>Cookies</div>
                </div>
            </div>
            <div className='Section'>
                <div className='SectionTitle'>Social Media</div>
                <div className='SocialContent'>
                    <div className='icon' onMouseOver={()=>handleSetIconActive(1)} onMouseLeave={handleSetIconInactive} style={iconActive===1?{color:"#5E1A89"}:{}}><i class="fa-brands fa-facebook"></i></div>
                    <div className='icon' onMouseOver={()=>handleSetIconActive(2)} onMouseLeave={handleSetIconInactive} style={iconActive===2?{color:"#5E1A89"}:{}}><i class="fa-brands fa-instagram"></i></div>
                    <div className='icon' onMouseOver={()=>handleSetIconActive(3)} onMouseLeave={handleSetIconInactive} style={iconActive===3?{color:"#5E1A89"}:{}}><i class="fa-brands fa-twitter"></i></div>
                </div>
            </div>
        </div>
        <div className='copyrights'>©️Miracle Cloud All Rights Reserved. Copyright 2023</div>
        </>
    );
}