// Events in react

function doclick() {
    console.log("Hello !")
}

function onMouse() {
    console.log("Console Hyy")
}

export default function Button() {
    return (
        < div >
            <button onClick={doclick}>Click Me !</button>
            <p onMouseOver={onMouse}>This is a Button </p>
            <button onDoubleClick={onMouse}> Double Click </button>
            
        </div >
    )
} 
 