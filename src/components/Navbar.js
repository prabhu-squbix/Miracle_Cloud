import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import PhoneOff from '../assets/PhoneInactive.svg';
import PhoneOn from '../assets/PhoneActive.svg';
import '../styles/Navbar.css';
import Home from '../pages/Home';
import Pricing from '../pages/Pricing';
import DropDown from '../assets/DropDown.svg';
import { motion } from "framer-motion";
import Product from './Product';
import HamIcon from '../assets/HamMenu.svg';
import Blog from '../pages/Blog';
import Market from '../pages/Market';
import Contact from '../pages/Contact';
import PartnersProgram from '../pages/PartnersProgram';

export default function Navbar() {
    const [optionActive, setOptionActive] = useState(1);
    const [phoneOn, setPhoneOn] = useState(false);
    const [dropdown, setDropdownActive] = useState(false);
    const [dropOption, setDropOptionActive] = useState(0);
    const [prodActive, setProductActive] = useState(0);
    const [hamMenu, setHamMenuActive] = useState(false);
    const handleCalling = () => {
        const phoneNumber = '+918447846239';
        window.location.href = `tel:${phoneNumber}`;
    };


    function handleProductActive(id) {
        setProductActive(id);
        setOptionActive(0);
    }

    function handleDropOption(value) {
        setDropOptionActive(value);
    }
    function handleDropdown(value) {
        setDropdownActive(value);
    }
    function handleMobileDropdown() {
        setDropdownActive(!dropdown);
    }
    function handlePhoneOn() {
        setPhoneOn(true);
    }
    function handlePhoneOff() {
        setPhoneOn(false);
    }
    function handleCall(current) {
        return (current ? <img src={PhoneOn} alt="PhoneOn" className='PhoneIcon'></img> : <img src={PhoneOff} alt="PhoneOff" className='PhoneIcon'></img>);
    }

    function handleOptionClick(id) {
        setOptionActive(id);
    }
    function handleHamMenu() {
        setHamMenuActive(!hamMenu);
    }
    function handleHamOptionClick(id) {
        setHamMenuActive(false);
        setOptionActive(id);
    }

    return (
        <>
            <div className="Navbar">
                <div className="Logo">
                    <img onClick={() => handleOptionClick(1)} className="MobLogo" src={Logo} alt="Miracle Cloud Logo"></img>
                </div>
                <div className="Menu">
                    <div className="option" onClick={() => handleOptionClick(1)}>
                        <div className="OptionText" style={optionActive === 1 ? { color: "#5E1A89" } : {}}>Home</div>
                        <div className="OptionBar" style={optionActive === 1 ? {} : { display: "none" }}></div>
                    </div>
                    <div className="option" onMouseOver={() => handleDropdown(true)} onMouseLeave={() => handleDropdown(false)}>
                        <div className="OptionText" style={prodActive !== 0 && optionActive === 0 ? { color: "#5E1A89" } : {}}>Solutions {dropdown ? < motion.img src={DropDown} style={{ position: "relative", top: "2px" }}
                            alt="Rotating Image"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 180 }}
                            transition={{ duration: 0.2, ease: "linear" }} /> : <></>}<img style={dropdown ? { display: "none" } : {}} className='DropDown' src={DropDown} alt='dropdown'></img></div>
                        <div className="TheDropDown" style={dropdown ? {} : { display: "none" }}>
                            <ul className='DropDownList' style={prodActive !== 0 && optionActive === 0 ? { position: "absolute", top: "-14px" } : {}}>
                                <li onClick={() => handleProductActive(1)} onMouseLeave={() => handleDropOption(0)} onMouseOver={() => handleDropOption(1)} style={dropOption === 1 ? { color: "#5E1A89", backgroundColor: "#EAE5F1" } : {}} className='DropListItem'>HIS Starter</li>
                                <li onClick={() => handleProductActive(2)} onMouseLeave={() => handleDropOption(0)} onMouseOver={() => handleDropOption(2)} style={dropOption === 2 ? { color: "#5E1A89", backgroundColor: "#EAE5F1" } : {}} className='DropListItem'>HIS Advanced</li>
                                <li onClick={() => handleProductActive(3)} onMouseLeave={() => handleDropOption(0)} onMouseOver={() => handleDropOption(3)} style={dropOption === 3 ? { color: "#5E1A89", backgroundColor: "#EAE5F1" } : {}} className='DropListItem'>LIS</li>
                                <li onClick={() => handleProductActive(4)} onMouseLeave={() => handleDropOption(0)} onMouseOver={() => handleDropOption(4)} style={dropOption === 4 ? { color: "#5E1A89", backgroundColor: "#EAE5F1" } : {}} className='DropListItem'>RIS</li>
                                <li onClick={() => handleProductActive(5)} onMouseLeave={() => handleDropOption(0)} onMouseOver={() => handleDropOption(5)} style={dropOption === 5 ? { color: "#5E1A89", backgroundColor: "#EAE5F1" } : {}} className='DropListItem'>Clinic</li>
                                <li onClick={() => handleProductActive(6)} onMouseLeave={() => handleDropOption(0)} onMouseOver={() => handleDropOption(6)} style={dropOption === 6 ? { color: "#5E1A89", backgroundColor: "#EAE5F1" } : {}} className='DropListItem'>PIS</li>
                                <li onClick={() => handleProductActive(7)} onMouseLeave={() => handleDropOption(0)} onMouseOver={() => handleDropOption(7)} style={dropOption === 7 ? { color: "#5E1A89", backgroundColor: "#EAE5F1" } : {}} className='DropListItem'>EMR</li>
                            </ul>
                        </div>
                    </div>
                    <div className="option" onClick={() => handleOptionClick(3)}>
                        <div className="OptionText" style={optionActive === 3 ? { color: "#5E1A89" } : {}}>Pricing</div>
                        <div className="OptionBar" style={optionActive === 3 ? {} : { display: "none" }}></div>
                    </div>
                    <div className="option" onClick={() => handleOptionClick(4)}>
                        <div className="OptionText" style={optionActive === 4 ? { color: "#5E1A89" } : {}}>Marketplace</div>
                        <div className="OptionBar" style={optionActive === 4 ? {} : { display: "none" }}></div>
                    </div>
                    <div className="option" onClick={() => handleOptionClick(5)}>
                        <div className="OptionText" style={optionActive === 5 ? { color: "#5E1A89" } : {}}>Partners Program</div>
                        <div className="OptionBar" style={optionActive === 5 ? {} : { display: "none" }}></div>
                    </div>
                    <div className="option" onClick={() => handleOptionClick(6)}>
                        <div className="OptionText" style={optionActive === 6 ? { color: "#5E1A89" } : {}}>Blog</div>
                        <div className="OptionBar" style={optionActive === 6 ? {} : { display: "none" }}></div>
                    </div>
                    <div className="option" onClick={() => handleOptionClick(7)}>
                        <div className="OptionText" style={optionActive === 7 ? { color: "#5E1A89" } : {}}>Contact</div>
                        <div className="OptionBar" style={optionActive === 7 ? {} : { display: "none" }}></div>
                    </div>
                </div>
                <div className="ContactNo" onClick={handleCalling} onMouseOver={handlePhoneOn} onMouseLeave={handlePhoneOff}><div>{handleCall(phoneOn)}</div>  <div><strong>+91 844 784 6239</strong></div></div>
                <div onClick={handleHamMenu} ><img className='HamIcon' src={HamIcon} alt='HamIcon'></img></div>

                <div className='HamPage' style={hamMenu ? {} : { display: "none" }}>
                    <div className='HamMenu'>
                        <div className="HamOption" onClick={() => handleHamOptionClick(1)}>Home</div>
                        <div className="HamOption"
                            onClick={handleMobileDropdown} >Solutions {dropdown ? < motion.img src={DropDown} style={dropdown ? { position: "relative", top: "2px", left: "110px", scale: "1.9" } : {}}
                                alt="Rotating Image"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 180 }}
                                transition={{ duration: 0.2, ease: "linear" }} /> : <></>}<img style={dropdown ? { display: "none" } : { position: "relative", top: "2px", left: "100px", scale: "1.9" }} className='DropDown' src={DropDown} alt='dropdown'></img>
                            <div className="MobileDropDown" style={dropdown ? {} : { display: "none" }}>
                                <ul className='MobileDropDownList'>
                                    <li onClick={() => handleProductActive(1)} className='DropListItem'>HIS Starter</li>
                                    <li onClick={() => handleProductActive(2)} className='DropListItem'>HIS Advanced</li>
                                    <li onClick={() => handleProductActive(3)} className='DropListItem'>LIS</li>
                                    <li onClick={() => handleProductActive(4)} className='DropListItem'>RIS</li>
                                    <li onClick={() => handleProductActive(5)} className='DropListItem'>Clinic</li>
                                    <li onClick={() => handleProductActive(6)} className='DropListItem'>PIS</li>
                                    <li onClick={() => handleProductActive(7)} className='DropListItem' style={{ paddingBottom: 0 }}>EMR</li>
                                </ul>
                            </div>
                        </div>
                        <div className="HamOption" style={dropdown ? { position: "relative", bottom: "28px" } : {}} onClick={() => handleHamOptionClick(3)}>Pricing</div>
                        <div className="HamOption" style={dropdown ? { position: "relative", bottom: "28px" } : {}} onClick={() => handleHamOptionClick(4)}>Marketplace</div>
                        <div className="HamOption" style={dropdown ? { position: "relative", bottom: "28px" } : {}} onClick={() => handleHamOptionClick(5)}>Partners Program</div>
                        <div className="HamOption" style={dropdown ? { position: "relative", bottom: "28px" } : {}} onClick={() => handleHamOptionClick(6)}>Blog</div>
                        <div className="HamOption" style={dropdown ? { position: "relative", bottom: "28px" } : {}} onClick={() => handleHamOptionClick(7)}>Contact</div>

                    </div>
                </div>
            </div>





            <div className="PageContents">
                <div style={optionActive === 1 ? {} : { display: "none" }}>
                    <Home />
                </div>

                <div style={dropdown ? {} : { display: "none" }}></div>
                <div style={prodActive === 1 && optionActive === 0 ? {} : { display: "none" }}>
                    <Product prodID={1} />
                </div>
                <div style={prodActive === 2 && optionActive === 0 ? {} : { display: "none" }}>
                    <Product prodID={2} />
                </div>
                <div style={prodActive === 3 && optionActive === 0 ? {} : { display: "none" }}>
                    <Product prodID={3} />
                </div>
                <div style={prodActive === 4 && optionActive === 0 ? {} : { display: "none" }}>
                    <Product prodID={4} />
                </div>
                <div style={prodActive === 5 && optionActive === 0 ? {} : { display: "none" }}>
                    <Product prodID={5} />
                </div>
                <div style={prodActive === 6 && optionActive === 0 ? {} : { display: "none" }}>
                    <Product prodID={6} />
                </div>
                <div style={prodActive === 7 && optionActive === 0 ? {} : { display: "none" }}>
                    <Product prodID={7} />
                </div>


                <div style={optionActive === 3 ? {} : { display: "none" }}>
                    <Pricing />
                </div>
                <div style={optionActive === 4 ? {} : { display: "none" }}>
                    <Market />
                </div>
                <div style={optionActive === 5 ? {} : { display: "none" }}>
                    <PartnersProgram />
                </div>
                <div style={optionActive === 6 ? {} : { display: "none" }}>
                    <Blog />
                </div>
                <div style={optionActive === 7 ? {} : { display: "none" }}>
                    <Contact />
                </div>
            </div>
        </>
    );
}