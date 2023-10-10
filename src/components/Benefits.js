import '../styles/Benefits.css';
import { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import ScrollTrigger from 'react-scroll-trigger';
import ListOfBenefits from '../Data/Benifits.json';

export default function Benefits() {
    const [colorOn, setColorOn] = useState(false);
    const controls = useAnimation(); // Initialize Framer Motion controls

    useEffect(() => {
        // Initialize animations once the component has mounted
        if (colorOn) {
            controls.start({ filter: 'grayscale(0%)', color: "#5E1A89" }); // Animate to color
        } else {
            controls.start({ filter: 'grayscale(100%)', color: "inherit" }); // Animate to grayscale
        }
    }, [colorOn, controls]);

    return (
        <div className='AllBenefits'>
            <div className='BeneTopic'>Benefitting <span style={{ color: "#5E1A89" }}>Hospitals & Clinics</span></div>
            <div className='Benefits'>
                <div className='BenefitList'>
                    {ListOfBenefits.map((benefit) => (
                        <ScrollTrigger
                            key={benefit.id}
                            onEnter={() => {
                                setColorOn(true);
                            }}
                            onExit={() => {
                                setColorOn(false);
                            }}
                        >
                            <motion.div
                                className='ListItem'
                                initial={{ filter: 'grayscale(100%)' }}
                                animate={controls} // Use Framer Motion controls for animations
                                style={{
                                    filter: colorOn === true ? 'grayscale(0%)' : 'grayscale(100%)',
                                    color: colorOn === true ? '#5E1A89' : 'inherit',
                                }}
                                transition={{ duration: 1, delay: 0.5 }} // Set duration and delay
                            >
                                <img className='BenefitImg' src={benefit.img} alt='benefit'></img>
                                <div className='BenefitDesc'>
                                    {benefit.description}
                                </div>
                            </motion.div>
                        </ScrollTrigger>
                    ))}
                </div>
            </div>
        </div>
    );
}
