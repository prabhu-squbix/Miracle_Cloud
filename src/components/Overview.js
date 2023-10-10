import '../styles/Overview.css';
import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import ScrollTrigger from 'react-scroll-trigger';
import Products from '../Data/Overview.json';

export default function Overview() {
  const [scaleOn, setScaleOn] = useState(false);
  const controls = useAnimation(); // Initialize Framer Motion controls
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Initialize animations once the component has mounted
    if (scaleOn) {
      controls.start({ opacity: 1 }); // Animate to scale 1
    } else {
      controls.start({ opacity: 0.5 }); // Animate to scale 0
    }
  }, [scaleOn, controls]);

  return (
    <div>
      <div className='OverviewHeading'>
        Overview of <span style={{ color: '#5E1A89' }}>Our Products</span>
      </div>
      <div className='ProductRow'>
        {Products.map((product) => (
          <ScrollTrigger
            key={product.id}
            onEnter={() => {
              setScaleOn(true);
            }}
            onExit={() => {
              setScaleOn(false); // Reset animation immediately when exiting
            }}
          >
            <motion.div
              className={`ProductCard ${scaleOn === true ? 'active' : ''} ${hoveredCard === product.id ? 'hovered' : '' // Apply 'hovered' class when hovering
                }`}
              initial={{ opacity: 0.5 }}
              animate={controls} // Use Framer Motion controls for animations
              transition={{ duration: 1.5 }}
              onMouseEnter={() => setHoveredCard(product.id)} // Set hovered card ID
              onMouseLeave={() => setHoveredCard(null)} // Reset hovered card ID
            >
              <div>
                <img className='MobileImgs' src={product.img} alt='ProductImg' />
              </div>
              <div className='ProductName'>{product.productName}</div>
              <div className='ProductDesc'>{product.productDesc}</div>
            </motion.div>
          </ScrollTrigger>
        ))}
      </div>
    </div>
  );
}
