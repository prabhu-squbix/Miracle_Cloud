import '../styles/Product.css';
import Products from '../Data/Products.json';

export default function Product() {
    return (
        <>
        <div className='Product'>
            {Products.map((product)=> (
                <div key={product.id} className='EachProduct'>
                    <img src={product.ProdImg} alt="Product" className="ProductImg" style={product.id===2?{position: "relative",bottom:"0px",top:"100px",width: "449px",
                        height: "360px"}:{}}></img>
                    <div className='ProdDetails'>
                        <div className='Intro'>Introducing</div>
                        <div className='ProdName'style={product.id===2?{width:"600px"}:{}}>{product.ProdName}</div>
                        <div className='ProdDesc'>{product.ProdDesc}</div>
                        <div className='KeyFeatures'>Key Features:</div>
                        {product.Features.map((feature) =>(
                            <ul key={feature.FeatureName} className='FeatureList'>
                                <li><span className='FeatureHead'>{feature.FeatureName}:</span> {feature.FeatureDesc} </li>
                            </ul>
                        ))}
                        <div className='ProdExtro'>{product.ProdExtro}</div>
                        <div className='ProdBtns'>
                            <button className='Btn1'>{product.ProdBtn1}</button>
                            <button className='Btn2'>{product.ProdBtn2}</button>
                        </div>
                    </div>
                    
                </div>
        ))}</div>
        </>
    );
}