import Product from "./Product";

//Default Arg for Price is 100

function ProductTab() {

    let options = ["hi-tech ", "Durable ", "Fast ", "Usefull "];

    // let option2 = {a: "Hi-tech",b:"Durable",c:"Fast",d:"Usefull"}
    
    return (
        <>
            <Product title="Laptop" price={90000} features = {options} />
            <Product title="Phone" price={35000} features = {["hi-tech ", "Durable ", "Fast ", "Usefull "]}/>
            <Product title="Charger"  features = {["hi-tech ", "Durable ", "Fast ", "Usefull "]}/>
            <Product title="Tab" price={45000}  features = {["hi-tech ", "Durable ", "Fast ", "Usefull "]} />
            
        </>
    )
}

export default ProductTab;