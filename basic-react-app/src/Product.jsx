//Importing css 

import "./Product.css"
//Set Default Value For Price 100
function Product({title,price = 100,features }) {
    
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{features}</p>
            
        </div>

    )
}

export default Product;