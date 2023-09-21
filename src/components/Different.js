import '../styles/Different.css';
import PlayBtn from '../assets/PlayBtn.svg';
import PlayBtnActive from '../assets/PlayBtnActive.svg';
import { useState } from 'react';

export default function Different() {
    const [playBtnActive, setplayBtnActive] = useState(false);
    function handleSetPlayBtnActive(value) {
        setplayBtnActive(value);
    }

    return (
        <div className="Different">
            <div className="DifferentText">
                <div className="DifferentTopic" style={{ fontSize: "36px" }}>How are we different</div>
                <div>
                    <div className='SubHeading'>Technology Integration</div>
                    <div className='Description'>We have integrated various emerging technologies into our solutions</div>
                </div>
                <div>
                    <div className='SubHeading'>Continuous Development</div>
                    <div className='Description'>We’re committed to non-stop development, adding more tech features</div>
                </div>
                <div>
                    <div className='SubHeading'>Unified Platform</div>
                    <div className='Description' style={{ paddingBottom: "0" }}>Our "Miracle Digital Health Ecosystem" brings everything together under one umbrella</div>
                </div>
            </div>
            <div className="DifferentVideo">
                <div onMouseOver={() => handleSetPlayBtnActive(true)}
                    onMouseLeave={() => handleSetPlayBtnActive(false)}>
                    <button className='PlayBtn'>
                        <img src={PlayBtn} alt="PlayButton" style={playBtnActive ? { display: "none" } : {}}></img>
                        <img src={PlayBtnActive} alt="PlayButton" style={playBtnActive ? {} : { display: "none" }}></img>
                    </button>
                </div>
            </div>
        </div >
    );
}