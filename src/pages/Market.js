import Data from '../Data/Market.json';
import '../styles/Market.css';

export default function Market() {
    return (
        <>
            <div className='MarketHeading'>Explore the <span style={{ color: "#5E1A88" }}>Miracle Digital Health Ecosystem</span></div>
            <div className='MarketSubHeading'>Select your desired service(s) offered by us</div>
            <div className='ProduList'>
                {Data.map((produ) => (
                    <div className='EachProdu'>
                        <div className='ProduIcon'><img src={produ.icon} alt='ProduIcon'></img></div>
                        <div className='ProduName'>{produ.produuct}</div>
                        <div><input type="checkbox" id={produ.id}></input></div>
                    </div>
                ))}
            </div>
        </>
    );
}