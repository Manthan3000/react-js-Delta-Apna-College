import Product from "./Product";

//Default Arg for Price is 100

function ProductTab() {
    //  Send array in Form of List Methode 1 :
    let options = ["hi-tech ","Durable " ,"Fast "];

    //  Send array in form of List Methode 2 :
    //  MOST IMP map() Function methode
    //map methode ===

    // const list = features.map((el) => <li>{el}</li>);


    //Send Objects
    // let option2 = {a: "Hi-tech",b:"Durable",c:"Fast",d:"Usefull"}
    
    return (
        <>
            <Product title="Laptop" price={90000} features = {options} />
            <Product title="Phone" price={23000} features = {["hi-tech ", "Durable ", "Fast ", "Usefull "]}/>
            <Product title="Charger" features = {options}/>
            <Product title="Tab" price={35000}  features = {options} />
            
        </>
    )
}

export default ProductTab;