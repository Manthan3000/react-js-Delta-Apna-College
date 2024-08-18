export default function price({oldPrices, newPrices}) {
    let oldsty = {
        textDecoration: "line-through",
        color : "brown"
    }
    
    let newsty = {
        fontWeight: "bold",
        textDecoration: "bold",
        color : "red"
    }
    
    let bg = {
        backgroundColor: "yellow",
        height: " 25px",
        borderRadius: "15px",
        alignitems : "center"
    }
    return (
        <div style={bg}>

            <span style={oldsty} >{oldPrices}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newsty}>{newPrices}</span>
            
        </div>
    )
}