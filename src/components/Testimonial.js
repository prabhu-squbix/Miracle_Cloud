import '../styles/Testimonial.css';
import { motion } from "framer-motion";
import Doctors from '../Data/Doctors.json';
import PreviousBtn from '../assets/PreviousBtn.svg';
import NextBtn from '../assets/NextBtn.svg';
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Testimonial() {
    const [msgsActive, setMsgsActive] = useState(4);
    function handlePreviousBtn() {
        setMsgsActive(() =>msgsActive - 1);
    }
    function handleNextBtn() {
        setMsgsActive(() =>msgsActive + 1);
    }

    return (
        <div className='Testimonial'>
            <div className='TestHeading'><div>Testimonials from <span style={{ color: "#7774F0" }}>Our Happy Clients</span></div><div className='ViewAll'>View All</div></div>
            <div className='TestimonialBox'>
                <motion.div
                    initial={{ opacity: 0, x: '-10vw' }}
                    whileInView={{ opacity: 1, x:'0vw'}}
                    transition={{ duration: 1 }}
                >
                    <div className='TestCards'>
                        {Doctors.map((doctor) => (
                            <div className='doctor' key={doctor.id} style={doctor.id <= msgsActive && doctor.id >= (msgsActive - 3) ? {} : { display: "none" }}>
                                <img src={doctor.dimg} alt="Doctor" className='DoctorImg'></img>
                                <div className='DoctorName'>{doctor.dname}</div>
                                <div className='DoctorSpec'>{doctor.dspec}</div>
                                <div className='DoctorMessage'>{doctor.dtext}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                </div>
                <div className='PrevBtn' style={msgsActive===4?{display:"none"}:{}}><img src={PreviousBtn} alt='previous' onClick={handlePreviousBtn}></img></div>
                <div className='ScrollBtns' style={msgsActive===13?{display:"none"}:{}}><img src={NextBtn} alt='next' onClick={handleNextBtn} style={msgsActive===4?{position:"relative",top:"8.3vh"}:{}}></img></div>
        </div>
    );
}