import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import { motion } from "framer-motion";
import Form from './Form';
import ClosePopup from '../assets/ClosePopup.svg';
import Popup from 'reactjs-popup';
import HeroImg from '../assets/HeroImg.png';


export default function Hero() {
  const [btn1Active, setBtn1Active] = useState(0);
  function handleBtn1Active(set) {
    setBtn1Active(set);
  }
  const [btn2Active, setBtn2Active] = useState(0);
  function handleBtn2Active(set) {
    setBtn2Active(set);
  }

  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLine(true);
    }, 500);
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
    <div className="Hero" style={popupActive ? { height: "100vh", overflow: "hidden" } : {}}>
      <div className="Banner" style={popupActive ? {
        background: "linear-gradient(248deg, rgba(94, 26, 136, 0.17) 1.52%, rgba(255, 255, 255, 0.00) 96.99%)",
        backdropFilter: "blur(25px)"
      } : {}}>
        <div className='Popup' style={popupActive ? {} : { display: "none" }}>
          <Form popActive={popupActive} />
        </div>
        <div className='FullBanner'>
          <div className="BannerText" style={popupActive ? { display: "none" } : {}}>
            {showLine && <motion.div
              initial={{ opacity: 0, y: '-10px' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            > <div id="Line1">Healthcare IT now Simplified
              </div></motion.div>}

            {showLine && (
              <motion.div
                initial={{ opacity: 0, y: '-10px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              ><div id="Line2">
                  for <span className="SpecialText">Everyone</span>
                </div></motion.div>
            )}
            {showLine && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              ><div className="BannerDesc">
                  <span style={{ fontWeight: "700" }}>Miracle on Cloud</span>, a game changing hospital technology, streamlines patient data & treatment strategies, boasting efficiency & improving outcomes
                </div></motion.div>
            )}
            {showLine && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}>
                <div id="Line3" className="BannerBtns">
                  <Popup trigger=
                    {<button className="btn1" id="btnOpenForm" onClick={handlePopupActive} onMouseOver={() => handleBtn1Active(1)} onMouseLeave={() => handleBtn1Active(0)} style={btn1Active === 1 ? { color: "#5E1A89", backgroundColor: "#fff", borderColor: "#fff" } : {}}>Request Demo</button>}
                    modal nested>
                    {
                      close => (
                        <div className='modal'>
                          <div>
                            <button className='Close' onClick=
                              {() => close()}>
                              <img src={ClosePopup} alt='close' onClick={handlePopupInactive}></img>
                            </button>
                          </div>
                          <div className='content'>
                            <Form />
                          </div>
                        </div>
                      )
                    }
                  </Popup>

                  <div className="btnSpacer"></div>
                  <button className="btn2" onMouseOver={() => handleBtn2Active(1)} onMouseLeave={() => handleBtn2Active(0)} style={btn2Active === 1 ? { color: "#ce96e6", background: "none", borderColor: "#ce96e6" } : {}}>Download Brochure</button>
                </div>
              </motion.div>
            )}

          </div>
          <div className='BannerImage'>
            <motion.div className='MovingImg'
              initial={{ opacity: 0.8, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            >
              <img className='MobileImg' src={HeroImg} alt="Tech" />
            </motion.div>
            <motion.div className='MovingImgMobile'
              initial={{ opacity: 1, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            >
              <img className='MobileImg' src={HeroImg} alt="Tech" />
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
