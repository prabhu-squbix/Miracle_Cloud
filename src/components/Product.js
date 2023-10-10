import '../styles/Product.css';
import React, { useState } from 'react';
import Products from '../Data/Products.json';
import Form from './Form';
import ClosePopup from '../assets/ClosePopup.svg';
import Popup from 'reactjs-popup';

export default function Product({ prodID }) {
  const [btn1Active, setBtn1Active] = useState(0);
  function handleBtn1Active(set) {
    setBtn1Active(set);
  }
  const [btn2Active, setBtn2Active] = useState(0);
  function handleBtn2Active(set) {
    setBtn2Active(set);
  }
  const [popupActive, setPopupActive] = useState(false);
  function handlePopupActive() {
    setPopupActive(true);
  }
  function handlePopupInactive() {
    if (popupActive)
      setPopupActive(false);

  }
  return (
    <>
      <div className='DesktopProduct'>
        <div className='Product' style={popupActive ? {
          background: "linear-gradient(248deg, rgba(94, 26, 136, 0.17) 1.52%, rgba(255, 255, 255, 0.00) 96.99%)",
          backdropFilter: "blur(25px)"
        } : {}}><div className='Popup' style={popupActive ? {} : { display: "none" }}>
            <Form popActive={popupActive} />
          </div>
          {Products.map((product) => (
            <div key={product.id} className='EachProduct' style={product.id === prodID ? {} : { display: "none" }}>
              <img src={product.ProdImg} alt="Product" className="ProductImg"></img>
              <div className='ProdDetails'>
                <div className='Intro'>Introducing</div>
                <div className='ProdName'>{product.ProdName}<span style={{ fontWeight: "400" }}>{product.ProdCat}</span></div>
                <div className='ProdDesc'>{product.ProdDesc}</div>
                <div className='KeyFeatures'>Key Features:</div>
                {product.Features.map((feature) => (
                  <ul key={feature.FeatureName} className='FeatureList'>
                    <li><span style={{ fontWeight: "700" }}>{feature.FeatureID}.</span> <span className='FeatureHead'>{feature.FeatureName} <span style={feature.FeatureDesc ? {} : { display: "none" }}>:</span></span> {feature.FeatureDesc} </li>
                  </ul>
                ))}
                <div className='ProdExtro'>{product.ProdExtro}</div>
                <div className='ProdBtns'>
                  <Popup trigger=
                    {<button className="btn1" id="btnOpenForm" onClick={handlePopupActive} onMouseOver={() => handleBtn1Active(1)} onMouseLeave={() => handleBtn1Active(0)} style={btn1Active === 1 ? { color: "#5E1A89", backgroundColor: "#fff", borderColor: "#fff" } : {}}>{product.ProdBtn1}</button>}
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
                  <button className="btn2" onMouseOver={() => handleBtn2Active(1)} onMouseLeave={() => handleBtn2Active(0)} style={btn2Active === 1 ? { color: "#ce96e6", background: "none", borderColor: "#ce96e6" } : {}}>{product.ProdBtn2}</button>
                </div>
              </div>

            </div>
          ))}</div>
      </div>
      <div className='MobileProduct'>
        <div className='Product' style={popupActive ? {
          background: "linear-gradient(248deg, rgba(94, 26, 136, 0.17) 1.52%, rgba(255, 255, 255, 0.00) 96.99%)",
          backdropFilter: "blur(25px)"
        } : {}}><div className='Popup' style={popupActive ? {} : { display: "none" }}>
            <Form popActive={popupActive} />
          </div>
          {Products.map((product) => (
            <div key={product.id} className='EachProduct' style={product.id === prodID ? {} : { display: "none" }}>
              <div className='ProdDetails'>
              <img src={product.ProdImg} alt="Product" className="ProductImg"></img>
                <div className='Intro'>Introducing</div>
                <div className='ProdName'>{product.ProdName}<span style={{ fontWeight: "400" }}>{product.ProdCat}</span></div>
                <div className='ProdDesc'>{product.ProdDesc}</div>
                <div className='KeyFeatures'>Key Features:</div>
                {product.Features.map((feature) => (
                  <ul key={feature.FeatureName} className='FeatureList'>
                    <li><span style={{ fontWeight: "700" }}>{feature.FeatureID}.</span> <span className='FeatureHead'>{feature.FeatureName} <span style={feature.FeatureDesc ? {} : { display: "none" }}>:</span></span> {feature.FeatureDesc} </li>
                  </ul>
                ))}
                {/* <div className='ProdExtro'>{product.ProdExtro}</div> */}

              </div>

            </div>
          ))}
          
          </div>
          <div className='ProdBtns'>
                  <Popup trigger=
                    {<button className="btn1" id="btnOpenForm" onClick={handlePopupActive} onMouseOver={() => handleBtn1Active(1)} onMouseLeave={() => handleBtn1Active(0)} style={btn1Active === 1 ? { color: "#5E1A89", backgroundColor: "#fff", borderColor: "#fff" } : {}}>Download Brochure</button>}
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
                  <button className="btn2" onMouseOver={() => handleBtn2Active(1)} onMouseLeave={() => handleBtn2Active(0)}>Plans & Pricing</button>
                </div>
      </div>
    </>
  );
}