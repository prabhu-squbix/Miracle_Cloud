import '../styles/Benefits.css'
import { useState } from 'react';
import ListOfBenefits from '../Data/Benifits.json';


export default function Benefits() {
    const [optionActive, setOptionActive] = useState(0);
    function handleSetOptionActive(id) {
        setOptionActive(id);
    }
    return (
        <>
            <div className='BeneTopic'>Benefitting <span style={{ color: "#7774F0" }}>Hospitals & Clinics</span></div>
            <div className='Benefits'>
                <div className='BenefitList'>
                    {ListOfBenefits.map((benefit) => (
                        <div key={benefit.id} className='ListItem'
                            onMouseOver={() => handleSetOptionActive(benefit.id)}
                            onMouseLeave={() => handleSetOptionActive(0)}
                            style={optionActive === benefit.id ? {} : { filter: "grayscale(100%)" }}>
                            <img src={benefit.img} alt='benefit'></img>
                            <div className='BenefitDesc'
                                style={optionActive === benefit.id ? { color:"#000" } : {}}>
                                {benefit.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}