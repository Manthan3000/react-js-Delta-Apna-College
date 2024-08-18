//Importing css 

import "./Product.css"
import Price from "./price";
//Set Default Value For Price 100
// function Product({title,price = 100,features }) {

//     //map methode
//     // const list = features.map((el) => <li>{el}</li>);

//     //Condition on price :

//     //1 st Methode

//     // if (price > 40000) {
//     //     return (
//     //         <div className="Product">
//     //             <h3>{title}</h3>
//     //             <p>{price}$</p>
//     //             <p>Discount 5%  </p>

//     //             {/* <p>{list}</p> */}
//     //             {/* <p>{features.map((el) => <li>{el}</li>) }</p> */}
            
//     //         </div>
//     //     )
//     // } else {
//     //     return (
//     //         <div className="Product">
//     //             <h3>{title}</h3>
//     //             <p>{price}$</p>

//     //             {/* <p>{list}</p> */}
//     //             {/* <p>{features.map((el) => <li>{el}</li>) }</p> */}
//     //         </div>

//     //     )
//     // }
    
//     // Methode 2
//     // let isDiscount = price > 30000 ? "5% Off" : "";
        
//     //Dynamic Styles
//     let isDiscount = price > 30000;
//     let styles = {  backgroundColor: isDiscount ? "green" : "" };


//         return (
//         <div className="Product" style={styles}>
//             <h3>{title}</h3>
//             <p>{price}</p>
                
//             {/* <p>{isDiscount }</p> */}
//             {price > 30000 ? <p> 5% Off </p> : null}
                
//             {/* <p>{list}</p> */}
//             {/* <p>{features.map((el) => <li>{el}</li>) }</p> */}
//         </div>

//     )
// }

function Product({ title ,idx}) {
    let oldPrices = ["499", "1099", "650", "950"];
    let newPrices = ["299", "999", "500", "750"];

    let Description = ["Value for money", "Smooth", "Trusted", "48Hr Long"];
    return (
        <div className="Product">
            
            <h4>{title}</h4>
            
            <p>{Description[idx]}</p> 
            <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>
    </div>
        
    )
}

export default Product;