import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import { motion } from "framer-motion";
import Form from './Form';
import ClosePopup from '../assets/ClosePopup.svg';
import Popup from 'reactjs-popup';



export default function Hero() {
  const [btn1Active, setBtn1Active] = useState(0);
  function handleBtn1Active(set) {
    setBtn1Active(set);
  }
  const [btn2Active, setBtn2Active] = useState(0);
  function handleBtn2Active(set) {
    setBtn2Active(set);
  }

  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowLine1(true);
    }, 500);

    setTimeout(() => {
      setShowLine2(true);
    }, 800);

    setTimeout(() => {
      setShowLine3(true);
    }, 1000);
  }, []);

  const [popupActive, setPopupActive] = useState(false);
  function handlePopupActive() {
    setPopupActive(true);
  }
  function handlePopupInactive() {
    if (popupActive)
      setPopupActive(false);

  }
  return (
    <div className="Hero" style={popupActive?{height:"100vh",overflowY:"hidden"}:{}}>
      <div className="Banner" style={popupActive ? {background: "linear-gradient(248deg, rgba(94, 26, 136, 0.17) 1.52%, rgba(255, 255, 255, 0.00) 96.99%)",
backdropFilter: "blur(25px)"} : {}}>
        <div className='Popup' style={popupActive ? {} : { display: "none" }}>
          <Form popActive={popupActive} />
        </div>
        <div className="BannerText" style={popupActive ? { display: "none" } : {}}>
          {showLine1 && <motion.div
            initial={{ opacity: 0, y: '-10px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          > <div id="Line1">Medical Care Now</div></motion.div>}

          {showLine2 && (
            <motion.div
              initial={{ opacity: 0, y: '-10px' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            ><div id="Line2">
                Simplified For <span className="SpecialText">Everyone</span>
              </div></motion.div>
          )}

          {showLine3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}>
              <div id="Line3" className="BannerBtns">
              <Popup trigger=
                {<button className="btn1" id="btnOpenForm" onClick={handlePopupActive} onMouseOver={() => handleBtn1Active(1)} onMouseLeave={() => handleBtn1Active(0)} style={btn1Active === 1 ? { color: "#fff", backgroundColor: "#5E1A89" } : {}}>Request Demo</button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <Form />
                            </div>
                            <div>
                                <button className='Close' onClick=
                                    {() => close()}>
                                      <img src={ClosePopup} alt='close' onClick={handlePopupInactive}></img>
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
                
                <div className="btnSpacer"></div>
                <button className="btn2" onMouseOver={() => handleBtn2Active(1)} onMouseLeave={() => handleBtn2Active(0)} style={btn2Active === 1 ? { color: "#fff", backgroundColor: "#5E1A89", borderColor: "#5E1A89" } : {}}>Download Brochure</button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
