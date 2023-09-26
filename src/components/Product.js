import '../styles/Product.css';
import Products from '../Data/Products.json';

export default function Product( {prodID} ) {
    
    return (
        <>
            <div className='Product'>
                {Products.map((product) => (
                    <div key={product.id} className='EachProduct' style={product.id===prodID?{}:{display:"none"}}>
                        <img src={product.ProdImg} alt="Product" className="ProductImg"></img>
                        <div className='ProdDetails'>
                            <div className='Intro'>Introducing</div>
                            <div className='ProdName'>{product.ProdName}<span style={{fontWeight:"400"}}>{product.ProdCat}</span></div>
                            <div className='ProdDesc'>{product.ProdDesc}</div>
                            <div className='KeyFeatures'>Key Features:</div>
                            {product.Features.map((feature) => (
                                <ul key={feature.FeatureName} className='FeatureList'>
                                    <li><span style={{fontWeight:"700"}}>{feature.FeatureID}.</span> <span className='FeatureHead'>{feature.FeatureName} <span style={feature.FeatureDesc?{}:{display:"none"}}>:</span></span> {feature.FeatureDesc} </li>
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