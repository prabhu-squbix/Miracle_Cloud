import '../styles/Page.css';
import '../styles/Pricing.css';
import Plans from '../Data/Plans.json';

export default function Pricing() {
    return (
        <div className='Pricing'>
            <div className='AllPlans'>
                <div className='PriceHead'>Select the <span style={{ color: "#7774F0" }}>Best Plans</span> for You</div>
                <div className='BeforeTable'>
                    <div className='Module'>MODULES</div>
                    <div className='PlanNames'>
                        <div className='Plan'>
                            <div className='PName'>Silver</div>
                            <div className='PPrice'>Rs.500</div>
                            <div className='PText1'>user/month</div>
                            <div className='PText2'>( Paid Yearly )</div>
                            <div className='Select'><button className='SelectBtn'>Select</button></div>
                        </div>
                        <div className='Plan'>
                            <div className='PName'>Gold</div>
                            <div className='PPrice'>Rs.1000</div>
                            <div className='PText1'>user/month</div>
                            <div className='PText2'>( Paid Yearly )</div>
                            <div className='Select'><button className='SelectBtn'>Select</button></div>
                        </div>
                        <div className='Plan'>
                            <div className='PName'>Premium</div>
                            <div className='PPrice'>Rs.1000</div>
                            <div className='PText1'>user/month</div>
                            <div className='PText2'>( Paid Yearly )</div>
                            <div className='Select'><button className='SelectBtn'>Select</button></div>
                        </div>
                    </div>
                </div>

                <table className='PlanTable'>
                    {Plans.map((module) => (
                        <tr>
                            <td key={module.id} className='ModuleName'><div className='Name'>{module.module}</div></td>
                            <td key={module.id} className='plans'><div className='Service'>{module.silver === 1 ? <i class="fa-solid fa-check" style={{ color: "#1ABA00" }}></i> : <i class="fa-solid fa-xmark" style={{ color: "#FF3A3B" }}></i>}</div></td>
                            <td key={module.id} className='plans'><div className='Service'>{module.gold === 1 ? <i class="fa-solid fa-check" style={{ color: "#1ABA00" }}></i> : <i class="fa-solid fa-xmark" style={{ color: "#FF3A3B" }}></i>}</div></td>
                            <td key={module.id} className='plans'><div className='Service End'>{module.premium === 1 ? <i class="fa-solid fa-check" style={{ color: "#1ABA00" }}></i> : <i class="fa-solid fa-xmark" style={{ color: "#FF3A3B" }}></i>}</div></td>
                        </tr>
                    ))}
                    <tr className='SelectBelow'>
                        <td></td>
                        <td><button className='SelectBtn'>Select</button></td>
                        <td><button className='SelectBtn'>Select</button></td>
                        <td><button className='SelectBtn'>Select</button></td>
                    </tr>
                </table>

            </div>
        </div>
    );
}