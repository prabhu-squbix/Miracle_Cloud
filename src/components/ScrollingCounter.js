import '../styles/ScrollingCounter.css';
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import ScrollSeparator from '../assets/ScrollSeparator.svg';
import MainData from '../Data/Counter.json';
import Cloud from '../assets/Cloud.png';
import { motion } from "framer-motion";

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
                                <div className='EachData' key={data.id} style={data.id <= 3 ? {} : { display: "none" }}>
                                    <div className='Number'>{counterOn && <CountUp start={0} end={data.end} duration={4} delay={0} />}<span style={data.id === 2 ? {} : { display: "none" }}> Million</span> <span style={{ position: "relative", bottom: "30px" }}>+</span></div>
                                    <div className='LineSep'><img src={ScrollSeparator} alt='line'></img></div>
                                    <div className='CountDesc'>{data.desc}</div>
                                </div>
                            ))}</div><br></br>
                        <div className='row1'>
                            {MainData.map((data) => (
                                <div className='EachData' key={data.id} style={data.id > 3 ? {} : { display: "none" }}>
                                    <div className='Number'>{counterOn && <CountUp start={0} end={data.end} duration={4} delay={0} />}<span style={data.id === 2 ? {} : { display: "none" }}> Million</span> <span style={{ position: "relative", bottom: "30px" }}>+</span></div>
                                    <div className='LineSep'><img src={ScrollSeparator} alt='line'></img></div>
                                    <div className='CountDesc'>{data.desc}</div>
                                </div>
                            ))}</div>
                    </div>
                </ScrollTrigger>
            </div>
            <motion.div className='Cloud'
                initial={{ opacity: 1, y: '-10vh' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            >
                <img src={Cloud} alt="cloud" />
            </motion.div>
        </>
    );
}