import '../styles/Akhil.css';
import AkhilCard1 from '../assets/AkhilCard1.svg';

export default function Akhil() {
    return(
        <>
        <div className='AkhilHeading'>Explore <span style={{color:"#7774F0"}}>Akhil</span></div>
        <div className='AkhilSubHeading'>Digital Health Ecosystem</div>
        <div className='AkhilCards'>
            <div className='eachCard'>
                <img src={AkhilCard1} alt="product" className='ProductI'></img>
                <div className='ProductN'>MOC Products</div>
                <div className='ProductDesc'>Tactical services through market web services</div>
            </div>
            <div className='eachCard'>
                <img src={AkhilCard1} alt="product" className='ProductI'></img>
                <div className='ProductN'>MOC Products</div>
                <div className='ProductDesc'>Tactical services through market web services</div>
            </div>
            <div className='eachCard'>
                <img src={AkhilCard1} alt="product" className='ProductI'></img>
                <div className='ProductN'>MOC Products</div>
                <div className='ProductDesc'>Tactical services through market web services</div>
            </div>
            <div className='eachCard'>
                <img src={AkhilCard1} alt="product" className='ProductI'></img>
                <div className='ProductN'>MOC Products</div>
                <div className='ProductDesc'>Tactical services through market web services</div>
            </div>
            <div className='eachCard'>
                <img src={AkhilCard1} alt="product" className='ProductI'></img>
                <div className='ProductN'>MOC Products</div>
                <div className='ProductDesc'>Tactical services through market web services</div>
            </div>
        </div>
        </>
    );
}