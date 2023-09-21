import '../styles/Trending.css';


export default function Trending() {
    return(
        <>
        <div className='TrendHeading'><div>Currently <span style={{color:"#7774F0"}}>Trending</span></div><div className='ViewAll'>View All</div></div>
        <div className='Trending'>
            <div className='Trend'>
                {/* <div className='TrendImg'><img src={Trend1Img} alt='Trend1'></img></div> */}
                <div className='TrendName trend1'>Medical Kiosks</div>
                <div className='TrendDesc'>Teleconsultation has been proven to be a successful tool against the ongoing Coronavirus (Covid-19)</div>
            </div>
            <div className='Trend'>
                {/* <div className='TrendImg'><img src={Trend1Img} alt='Trend1'></img></div> */}
                <div className='TrendName trend2'>Medical Kiosks</div>
                <div className='TrendDesc'>Teleconsultation has been proven to be a successful tool against the ongoing Coronavirus (Covid-19)</div>
            </div>
            <div className='Trend'>
                <div className='TrendName trend3'>Medical Kiosks</div>
                <div className='TrendDesc'>Teleconsultation has been proven to be a successful tool against the ongoing Coronavirus (Covid-19)</div>
            </div>
        </div>
        </>
    );
}