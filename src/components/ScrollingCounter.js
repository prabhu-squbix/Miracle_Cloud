import '../styles/ScrollingCounter.css';
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import ScrollSeparator from '../assets/ScrollSeparator.svg';
import MainData from '../Data/Counter.json';
import Cloud from '../assets/Cloud.png';
import CloudMobile from '../assets/CloudMobile.png';
import { motion } from "framer-motion";
import AnimatedNumbers from "react-animated-numbers";


export default function ScrollingCounter() {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
            <div className='ScrollingC'>
                <ScrollTrigger onEnter={() => setCounterOn(true)}>
                    <div className='CounterHead'>Our <span style={{ color: "#5E1A89" }} >Solid Accomplishments</span></div>
                    <div className='CounterBox'>
                        <div className='row1'>
                            {MainData.map((data) => (
                                <div className='EachData' key={data.id} style={data.id < 4 ? {} : { display: "none" }}>
                                    <div className='Number'>{counterOn && <AnimatedNumbers
                                        includeComma
                                        animateToNumber={data.end}
                                        locale="en-US"
                                        configs={[
                                            { mass: 1, tension: 220, friction: 100 },
                                            { mass: 1, tension: 180, friction: 130 },
                                            { mass: 1, tension: 280, friction: 90 },
                                            { mass: 1, tension: 180, friction: 135 },
                                            { mass: 1, tension: 260, friction: 100 },
                                            { mass: 1, tension: 210, friction: 180 },
                                        ]}
                                    ></AnimatedNumbers>}<span style={data.id === 2 ? {} : { display: "none" }}> Million</span> <span style={{ position: "relative", bottom: "30px" }}>+</span>
                                    </div>
                                    <div className='LineSep'><img src={ScrollSeparator} alt='line'></img></div>
                                    <div className='CountDesc'>{data.desc}</div>
                                </div>

                            ))}
                        </div>
                        <br></br>
                        <div className='row1'>
                            {MainData.map((data) => (
                                <div className='EachData' key={data.id} style={data.id > 3 ? {} : { display: "none" }}>
                                    <div className='Number'>{counterOn && <AnimatedNumbers
                                        includeComma
                                        animateToNumber={data.end}
                                        locale="en-US"
                                        configs={[
                                            { mass: 1, tension: 220, friction: 100 },
                                            { mass: 1, tension: 180, friction: 130 },
                                            { mass: 1, tension: 280, friction: 90 },
                                            { mass: 1, tension: 180, friction: 135 },
                                            { mass: 1, tension: 260, friction: 100 },
                                            { mass: 1, tension: 210, friction: 180 },
                                        ]}
                                    ></AnimatedNumbers>}<span style={data.id === 0 ? {} : { display: "none" }}> Million</span> <span style={{ position: "relative", bottom: "30px" }}>+</span>
                                    </div>
                                    <div className='LineSep'><img src={ScrollSeparator} alt='line'></img></div>
                                    <div className='CountDesc'>{data.desc}</div>
                                </div>

                            ))}
                        </div>
                    </div>
                    <div className='CounterBoxMobile'>
                        <div className='row1'>
                            {MainData.map((data) => (
                                <div className='EachData' key={data.id} style={data.id < 3 ? {} : { display: "none" }}>
                                    <div className='Number'>{counterOn && <AnimatedNumbers
                                        includeComma
                                        animateToNumber={data.end}
                                        locale="en-US"
                                        configs={[
                                            { mass: 1, tension: 220, friction: 100 },
                                            { mass: 1, tension: 180, friction: 130 },
                                            { mass: 1, tension: 280, friction: 90 },
                                            { mass: 1, tension: 180, friction: 135 },
                                            { mass: 1, tension: 260, friction: 100 },
                                            { mass: 1, tension: 210, friction: 180 },
                                        ]}
                                    ></AnimatedNumbers>}<span style={data.id === 2 ? {} : { display: "none" }}> Million</span> <span style={{ position: "relative", bottom: "30px", right:"10px" }}>+</span>
                                    </div>
                                    <div className='LineSep'><img src={ScrollSeparator} alt='line'></img></div>
                                    <div className='CountDesc'>{data.desc}</div>
                                </div>

                            ))}
                        </div>
                        <br></br>
                        <div className='row1' style={{position:"relative",right:"8px",gap:"100px"}}>
                            {MainData.map((data) => (
                                <div className='EachData' key={data.id} style={data.id === 3 || data.id === 4 ? {} : { display: "none" }}>
                                    <div className='Number'>{counterOn && <AnimatedNumbers
                                        includeComma
                                        animateToNumber={data.end}
                                        locale="en-US"
                                        configs={[
                                            { mass: 1, tension: 220, friction: 100 },
                                            { mass: 1, tension: 180, friction: 130 },
                                            { mass: 1, tension: 280, friction: 90 },
                                            { mass: 1, tension: 180, friction: 135 },
                                            { mass: 1, tension: 260, friction: 100 },
                                            { mass: 1, tension: 210, friction: 180 },
                                        ]}
                                    ></AnimatedNumbers>}<span style={data.id === 0 ? {} : { display: "none" }}> Million</span> <span style={{ position: "relative", bottom: "30px" }}>+</span>
                                    </div>
                                    <div className='LineSep'><img src={ScrollSeparator} alt='line'></img></div>
                                    <div className='CountDesc'>{data.desc}</div>
                                </div>

                            ))}
                        </div>
                        <br></br>
                        <div className='row1' style={{position:"relative",right:"45px",gap:"100px"}}>
                            {MainData.map((data) => (
                                <div className='EachData' key={data.id} style={data.id ===5 || data.id===6 ? {} : { display: "none" }}>
                                    <div className='Number'>{counterOn && <AnimatedNumbers
                                        includeComma
                                        animateToNumber={data.end}
                                        locale="en-US"
                                        configs={[
                                            { mass: 1, tension: 220, friction: 100 },
                                            { mass: 1, tension: 180, friction: 130 },
                                            { mass: 1, tension: 280, friction: 90 },
                                            { mass: 1, tension: 180, friction: 135 },
                                            { mass: 1, tension: 260, friction: 100 },
                                            { mass: 1, tension: 210, friction: 180 },
                                        ]}
                                    ></AnimatedNumbers>}<span style={data.id === 2 ? {} : { display: "none" }}> Million</span> <span style={{ position: "relative", bottom: "30px" }}>+</span>
                                    </div>
                                    <div className='LineSep'><img src={ScrollSeparator} alt='line'></img></div>
                                    <div className='CountDesc'>{data.desc}</div>
                                </div>

                            ))}
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
            <motion.div className='Cloud'
                initial={{ opacity: 1, y: '-5vh'}}
                animate={{ opacity: 1, y: '5vh'}}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            >
                <img className='CloudImg' src={Cloud} alt="cloud" />
                <img className='CloudImgMob' src={CloudMobile} alt="cloud" />
            </motion.div>
        </>
    );
}