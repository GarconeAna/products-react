import './Product.css';

const Product = ({name, price}) => {
    return <>
        <div className='product-container'>
            <div className='product-border'>
                <h3>{name}</h3>
                <span>${price}</span>
            </div>  
        </div>
        
    </>
} 

export default Product;