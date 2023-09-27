import '../styles/Different.css';
import PlayBtn from '../assets/PlayBtn.svg';
import PlayBtnActive from '../assets/PlayBtnActive.svg';
import VideoDemo from '../assets/VideoDemo.gif';
import { useState } from 'react';

export default function Different() {
    const TextWidth = window.innerWidth - 918;
    const [playBtnActive, setplayBtnActive] = useState(false);
    const [videoActive, setVideoActive] = useState(false);

    function handleVideoPlay() {
        setVideoActive(true);
    }

    function handleSetPlayBtnActive(value) {
        setplayBtnActive(value);
    }

    return (
        <div className="Different">
            <div className="DifferentText" style={{ width: `${TextWidth}px` }}>
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
                    onMouseLeave={() => handleSetPlayBtnActive(false)}
                    onClick={handleVideoPlay}>
                    <img className='VideoPlay' style={videoActive ? {position:"relative",top:"2px"} : { display: "none" }} src={VideoDemo} alt='video'></img>
                            <button className='PlayBtn' style={videoActive ? { display: "none" } : {}}>
                                <img src={PlayBtn} alt="PlayButton" style={playBtnActive ? { display: "none" } : {}}></img>
                                <img src={PlayBtnActive} alt="PlayButton" style={playBtnActive ? {} : { display: "none" }}></img>
                            </button>
                        </div>
                </div>
            </div >
            );
}