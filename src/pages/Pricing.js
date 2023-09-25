
import '../styles/Pricing.css';
import Plans from '../Data/Plans.json';
import ServiceIncluded from '../assets/ServiceIncluded.svg';
import ServiceAlreadyIncluded from '../assets/ServiceAlreadyIncluded.svg';
import { useState } from 'react';

export default function Pricing() {
    const [planActive, setPlanActive] = useState(0);
    function handlePlanActive(id) {
        setPlanActive(id);
    }
    return (
        <div className='Pricing'>
            <div className='AllPlans'>
                <div className='PriceHead'>Select the <span style={{ color: "#5E1A89" }}>Best Modules</span> for You</div>

                <div className='Plans'>
                    <div className='EachPlan Silver' onMouseLeave={() => handlePlanActive(0)} onMouseOver={() =>handlePlanActive(1)} style={planActive===1?{borderColor:"#5E1A89"}:{}}>
                        <div className='PlanName'>Silver</div>
                        <div className='PlanDesc'>Some dummy text goes here for each plan</div>
                        {Plans.map((service) => (
                            <li className='ServicesList' key={service.id} style={service.plan === "silver" ? {} : { display: "none" }}>
                                <img src={ServiceIncluded} alt='greenTick' className='greenTick'></img>  <div className='ServiceName'>{service.module}</div>
                            </li>
                        ))}
                        <div className='BtnSection'><button className='SelectBtn'>Get Quote</button></div>
                    </div>
                    <div className='EachPlan Gold' onMouseLeave={() => handlePlanActive(0)} onMouseOver={() =>handlePlanActive(2)} style={planActive===2?{borderColor:"#5E1A89"}:{}}>
                        <div className='PlanName'>Gold</div>
                        <div className='PlanDesc'>Some dummy text goes here for each plan</div>
                        <div className='Already'><img src={ServiceAlreadyIncluded} alt='purpleTick' className='greenTick'></img>  <div className='AlreadyText'>Silver Modules</div></div>
                        <div className='Plus'>+</div>
                        {Plans.map((service) => (
                            <li className='ServicesList' key={service.id} style={service.plan === "gold" ? {} : { display: "none" }}>
                                <img src={ServiceIncluded} alt='greenTick' className='greenTick'></img>  <div className='ServiceName'>{service.module}</div>
                            </li>
                        ))}
                        <div className='BtnSection'><button className='SelectBtn'>Get Quote</button></div>
                    </div>
                    <div className='EachPlan Premium' onMouseLeave={() => handlePlanActive(0)} onMouseOver={() =>handlePlanActive(3)} style={planActive===3?{borderColor:"#5E1A89"}:{}}>
                        <div className='PlanName'>Premium</div>
                        <div className='PlanDesc'>Some dummy text goes here for each plan</div>
                        <div className='Already'><img src={ServiceAlreadyIncluded} alt='purpleTick' className='greenTick'></img>  <div className='AlreadyText'>Gold Modules</div></div>
                        <div className='Plus'>+</div>
                        {Plans.map((service) => (
                            <li className='ServicesList' key={service.id} style={service.plan === "premium" ? {} : { display: "none" }}>
                                <img src={ServiceIncluded} alt='greenTick' className='greenTick'></img>  <div className='ServiceName'>{service.module}</div>
                            </li>
                        ))}
                        <div className='BtnSection'><button className='SelectBtn'>Get Quote</button></div>
                    </div>
                </div>


            </div>
        </div>
    );
}