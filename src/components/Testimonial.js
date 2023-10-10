import '../styles/Testimonial.css';
import { motion, useAnimation } from "framer-motion";
import Doctors from '../Data/Doctors.json';
import PreviousBtn from '../assets/PreviousBtn.svg';
import NextBtn from '../assets/NextBtn.svg';
import { useState } from 'react';


export default function Testimonial() {
    const [msgsActive, setMsgsActive] = useState(4);
    const [mobileView, setMobileView] = useState(1);
    const controls = useAnimation();

    function handlePreviousBtn() {
        setMsgsActive(() => msgsActive - 1);
        setMobileView(() => mobileView - 1);
    }
    function handleNextBtn() {
        setMsgsActive(() => msgsActive + 1);
        setMobileView(() => mobileView + 1)
    }

    return (
        <>
            <div className='Testimonial Desktop'>
                <div className='TestHeading'><div>What <span style={{ color: "#5E1A89" }}>Our Happy Clients</span> are saying?</div><div className='ViewAll'>View All</div></div>
                <div className='TestimonialBox'>
                    <motion.div
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: '-10vw' },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onAnimationComplete={() => controls.start({ opacity: 1, x: 0 })} // Start the next animation after completion
                    >
                        <div className='TestCards'>
                            {Doctors.map((doctor) => (
                                <motion.div
                                    className='doctor'
                                    key={doctor.id}
                                    style={doctor.id <= msgsActive && doctor.id >= (msgsActive - 3) ? {} : { display: "none" }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img src={doctor.dimg} alt="Doctor" className='DoctorImg'></img>
                                    <div className='DoctorName'>{doctor.dname}</div>
                                    <div className='DoctorSpec'>{doctor.dspec}</div>
                                    <div className='DoctorMessage'>{doctor.dtext}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className='PrevBtn' style={msgsActive === 4 ? { display: "none" } : {}}><img src={PreviousBtn} alt='previous' onClick={handlePreviousBtn}></img></div>
                <div className='ScrollBtns' style={msgsActive === 13 ? { display: "none" } : {}}><img src={NextBtn} alt='next' onClick={handleNextBtn} style={msgsActive === 4 ? { position: "relative", top: "8.3vh" } : {}}></img></div>
            </div>


            <div className='Testimonial Mobile'>
                <div className='TestHeading'><div>What <span style={{ color: "#5E1A89" }}>Our Happy Clients</span> are saying?</div><div className='ViewAll'>View All</div></div>
                <div className='TestimonialBox'>
                    <motion.div
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: '-10vw' },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onAnimationComplete={() => controls.start({ opacity: 1, x: 0 })} // Start the next animation after completion
                    >
                        <div className='TestCards'>
                            {Doctors.map((doctor) => (
                                <motion.div
                                    className='doctor'
                                    key={doctor.id}
                                    style={doctor.id <= mobileView && doctor.id >= mobileView ? {} : { display: "none" }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img src={doctor.dimg} alt="Doctor" className='DoctorImg'></img>
                                    <div className='DoctorName'>{doctor.dname}</div>
                                    <div className='DoctorSpec'>{doctor.dspec}</div>
                                    <div className='DoctorMessage'>{doctor.dtext}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className='PrevBtn' style={mobileView === 1 ? { display: "none" } : {}}><img src={PreviousBtn} alt='previous' onClick={handlePreviousBtn}></img></div>
                <div className='ScrollBtns' style={mobileView === 12 ? { display: "none" } : {}}><img src={NextBtn} alt='next' onClick={handleNextBtn} style={msgsActive === 4 ? { position: "relative", top: "8.3vh" } : {}}></img></div>
            </div>

        </>
    );
}