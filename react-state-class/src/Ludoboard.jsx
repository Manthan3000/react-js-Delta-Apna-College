import { useState } from "react";

// State Var Objects

export default function Ludoboard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
    let [arr, setArr] = useState(["No moves"]);

    let updateBlue = () => {
        console.log("Blue Moves = ",  moves.blue );
        setMoves((prevmoves) =>{
            return { ...moves, blue: moves.blue + 1 }
        });
    }
    
    let updateYellow = () => {
        console.log("Yellow Moves = ", moves.yellow);
        setMoves((prevmoves) => {
            return { ...moves, yellow: moves.yellow + 1 }
        });
    };
    let updateGreen = () => {
        console.log("Green Moves = ", moves.green);
        setMoves((prevmoves) => {
            return { ...moves, green: moves.green + 1 }
        });
    };
    let updateRed = () => {
        console.log("Red Moves = ", moves.red);
        setMoves((prevmoves) => {
            return { ...moves, red: moves.red + 1 }
        });
    };
    
    return (
        <div>
            <div class="board" >
                
                <p>Blue Moves = { moves.blue}</p>
                <button style={{ backgroundColor: "blue" } } onClick={updateBlue} > +1 </button>
                <p>Green Moves = { moves.green}</p>
                <button style={{ backgroundColor: "green" } } onClick={updateGreen}> +1 </button>
                <p>Yellow Moves = { moves.yellow}</p>
                <button style={{ backgroundColor: "yellow" } } onClick={updateYellow}> +1 </button>
                <p>Red Moves = {moves.red }</p>
                <button style={{ backgroundColor: "red" } } onClick={updateRed}> +1 </button>
            </div>
        </div>
    );
};