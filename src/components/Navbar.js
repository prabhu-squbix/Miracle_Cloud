import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import PhoneOff from '../assets/PhoneInactive.svg';
import PhoneOn from '../assets/PhoneActive.svg';
import '../styles/Navbar.css';
import Healthcare from '../pages/Healthcare';
import Softwares from '../pages/Softwares';
import Stories from '../pages/Stories';
import Pricing from '../pages/Pricing';

export default function Navbar() {
    const [optionActive,setOptionActive] = useState(1);
    const [phoneOn,setPhoneOn] = useState(false);

    function handlePhoneOn(){
        setPhoneOn(true);
    }
    function handlePhoneOff(){
        setPhoneOn(false);
    }
    function handleCall(current){
        return (current? <img src={PhoneOn} alt="PhoneOn" className='PhoneIcon'></img>:<img src={PhoneOff} alt="PhoneOff" className='PhoneIcon'></img>);
    }

    function handleOptionClick(id){
        setOptionActive(id);
    }

    return (
        <>
        <div className="Navbar">
            <div className="Logo">
                <img src={Logo} alt="Miracle Cloud Logo"></img>
            </div>
            <div className="Menu">
                <div className="option" onClick={()=>handleOptionClick(1)}>
                    <div className="OptionText" style={optionActive===1?{color:"#5E1A89"}:{}}>Cloud</div>
                    <div className="OptionBar" style={optionActive===1?{}:{display:"none"}}></div>
                </div>
                <div className="option" onClick={()=>handleOptionClick(2)}>
                    <div className="OptionText" style={optionActive===2?{color:"#5E1A89"}:{}}>Software & Services</div>
                    <div className="OptionBar" style={optionActive===2?{}:{display:"none"}}></div>
                </div>
                <div className="option" onClick={()=>handleOptionClick(3)}>
                    <div className="OptionText" style={optionActive===3?{color:"#5E1A89"}:{}}>LIS</div>
                    <div className="OptionBar" style={optionActive===3?{}:{display:"none"}}></div>
                </div>
                <div className="option" onClick={()=>handleOptionClick(4)}>
                    <div className="OptionText" style={optionActive===4?{color:"#5E1A89"}:{}}>RIS</div>
                    <div className="OptionBar" style={optionActive===4?{}:{display:"none"}}></div>
                </div>
                <div className="option" onClick={()=>handleOptionClick(5)}>
                    <div className="OptionText" style={optionActive===5?{color:"#5E1A89"}:{}}>Clinic</div>
                    <div className="OptionBar" style={optionActive===5?{}:{display:"none"}}></div>
                </div>
                <div className="option" onClick={()=>handleOptionClick(6)}>
                    <div className="OptionText" style={optionActive===6?{color:"#5E1A89"}:{}}>Pharmacy</div>
                    <div className="OptionBar" style={optionActive===6?{}:{display:"none"}}></div>
                </div>
                <div className="option" onClick={()=>handleOptionClick(7)}>
                    <div className="OptionText" style={optionActive===7?{color:"#5E1A89"}:{}}>EMR</div>
                    <div className="OptionBar" style={optionActive===7?{}:{display:"none"}}></div>
                </div>
            </div>
            <div className="ContactNo" onMouseOver={handlePhoneOn} onMouseLeave={handlePhoneOff}><div>{handleCall(phoneOn)}</div>  <div>Call <strong>1800 425 3800</strong></div></div>
        </div>
        <div className="PageContents">
            <div style={optionActive===1?{}:{display:"none"}}>
                <Healthcare />
            </div>
            <div style={optionActive===2?{}:{display:"none"}}>
                <Softwares />
            </div>
            <div style={optionActive===3?{}:{display:"none"}}>
                <Stories />
            </div>
            <div style={optionActive===4?{}:{display:"none"}}>
                <Pricing />
            </div>
        </div>
        </>
    );
}