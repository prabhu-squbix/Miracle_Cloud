import '../styles/Overview.css';
import Products from '../Data/Overview.json';
import { useState } from 'react';

export default function Overview () {
    const [overviewActive, setOverviewActive] = useState(0);
    function handleProductOverview(id){
        setOverviewActive(id);
    }
    return (
        <div>
            <div className='OverviewHeading'>Overview of <span style={{color:"#5E1A89"}}>Our Products</span></div>
            <div className='ProductRow'>
                {Products.map((product) =>(
                    <div key={product.id} className='ProductCard' onMouseOver={()=>handleProductOverview(product.id)}
                     onMouseLeave={()=>handleProductOverview(0)}
                     style={overviewActive===product.id?{backgroundColor:"#EFE8F3" , filter:"none"}:{}}>
                        <div><img src={product.img} alt='ProductImg'></img> </div>
                        <div className='ProductName'>{product.productName}</div>
                        <div className='ProductDesc'>{product.productDesc}</div>
                    </div>
                ))}
            </div>
            <div></div>
            <div></div>
        </div>
    );
}