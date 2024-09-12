import { useState } from "react";

export default function LikeBtn() {

    let [isLiked, setisLiked] = useState(false);
    let [isclick, isclickcount] = useState(0);

    let toggle = () => {
        setisLiked(!isLiked);
        isclickcount(isclick + 1);
    };

    return (
        <div>
            <p>Clicks = {isclick}</p>
            
        <button onClick={toggle}>{isLiked.toString()}  Clicked </button>
    </div>
    ); 
    
}   