import { useState } from 'react';
import '../styles/Footer.css';
import FooterLogo from '../assets/FooterLogo.svg';
import MobileLogo from '../assets/MobileLogo.svg';
import { motion } from 'framer-motion';
import DropDown from '../assets/DropDown.svg';
export default function Footer() {
    const [iconActive, setIconActive] = useState(0);
    function handleSetIconActive(id) {
        setIconActive(id);
    }
    function handleSetIconInactive() {
        setIconActive(0);
    }
    const [menuActive, setMenuActive] = useState(0);
    function handleMenuActive(id) {
        if (menuActive !== id)
            setMenuActive(id);
        else
            setMenuActive(0);
    }

    return (
        <>  <div className='FooterDesktop'>
            <div className='Footer'>
                <div className='Section'>
                    <img src={FooterLogo} alt='Logo' className='FooterLogo'></img>
                </div>
                <div className='Section'>
                    <div className='SectionTitle'>New to MoC?</div>
                    <div className='SectionContent'>
                        <div className='feature'>Why Miracle on Cloud</div>
                        <div className='feature'>What is EMR?</div>
                        <div className='feature'>Explore all Products</div>
                        <div className='feature'>Product Pricing</div>
                    </div>
                </div>
                <div className='Section'>
                    <div className='SectionTitle'>About MoC</div>
                    <div className='SectionContent'>
                        <div className='feature'>Our Story</div>
                        <div className='feature'>Blog</div>
                        <div className='feature'>AkhilSystems.com</div>
                    </div>
                </div>
                <div className='Section'>
                    <div className='SectionTitle'>Populer Links</div>
                    <div className='SectionContent'>
                        <div className='feature'>Akhil Systems Mobile App</div>
                        <div className='feature'>Contact Us 24 X 7</div>
                    </div>
                </div>
                <div className='Section'>
                    <div className='SectionTitle'>Social Media</div>
                    <div className='SocialContent'>
                        <div className='icon'><i class="fa-brands fa-facebook"></i></div>
                        <div className='icon'><i class="fa-brands fa-instagram"></i></div>
                        <div className='icon'><i class="fa-brands fa-twitter"></i></div>
                    </div>
                </div>
            </div>
            <div className='FooterSeparator'></div>
            <div className='copyrights'>©️Miracle Cloud All Rights Reserved. Copyright 2023</div>
        </div>
            <div className='FooterMobile'>
                <div className='MobileMenu'>
                    <div className='LogoSocials'>
                        <div>
                            <img src={MobileLogo} alt='Logo' className='MobileLogo'></img>
                        </div>
                        <div className='SocialContent'>
                            <div className='icon'><i class="fa-brands fa-facebook"></i></div>
                            <div className='icon'><i class="fa-brands fa-instagram"></i></div>
                            <div className='icon'><i class="fa-brands fa-twitter"></i></div>
                        </div>
                    </div>
                    <div className='MobileFooterMenu'>
                        <div className='MobileTitle' onClick={() => handleMenuActive(1)}>
                            <div>New to MoC?</div>
                            <div>
                                {menuActive === 1 ?
                                    < motion.img src={DropDown}
                                        alt="Rotating Image"
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: 180 }}
                                        transition={{ duration: 0.2, ease: "linear" }} />
                                    :
                                    <img src={DropDown} alt='DropDown'></img>}

                            </div>
                        </div>
                        <div className='MobileContent' style={menuActive === 1 ? {} : { display: "none" }}>
                            <div className='Mfeature'>Why Miracle on Cloud</div>
                            <div className='Mfeature'>What is EMR?</div>
                            <div className='Mfeature'>Explore all Products</div>
                            <div className='Mfeature'>Product Pricing</div>
                        </div>
                    </div>
                    <div className='MobileFooterMenu'>
                        <div className='MobileTitle' onClick={() => handleMenuActive(2)}>
                            <div>About MoC</div>
                            <div>
                                {menuActive === 2 ?
                                    < motion.img src={DropDown}
                                        alt="Rotating Image"
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: 180 }}
                                        transition={{ duration: 0.2, ease: "linear" }} />
                                    :
                                    <img src={DropDown} alt='DropDown'></img>}

                            </div>
                        </div>
                        <div className='MobileContent' style={menuActive === 2 ? {} : { display: "none" }}>
                            <div className='Mfeature'>Our Story</div>
                            <div className='Mfeature'>Blog</div>
                            <div className='Mfeature'>AkhilSystems.com</div>
                        </div>
                    </div>
                    <div className='MobileFooterMenu'>
                        <div className='MobileTitle' onClick={() => handleMenuActive(3)}>
                            <div>Popular Links</div>
                            <div>
                                {menuActive === 3 ?
                                    < motion.img src={DropDown}
                                        alt="Rotating Image"
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: 180 }}
                                        transition={{ duration: 0.2, ease: "linear" }} />
                                    :
                                    <img src={DropDown} alt='DropDown'></img>}

                            </div>
                        </div>
                        <div className='MobileContent' style={menuActive === 3 ? {} : { display: "none" }}>
                            <div className='Mfeature'>Akhil Systems Mobile App</div>
                            <div className='Mfeature'>Contact Us 24 X 7</div>
                        </div>
                    </div>

                </div>
                <div className='FooterSeparator'></div>
                <div className='copyrightsMobile'>All Rights Reserved. Copyright 2023</div>
            </div>

        </>
    );
}