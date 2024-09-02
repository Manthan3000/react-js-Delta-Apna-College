// Events in react

function doSome() {
    console.log("Hello !")
}

function printPara() {
    console.log("Console Hyy")
}

export default function Button() {
    return (
        < div >
            <button onClick={doSome}>Click Me !</button>
            <p onClick={printPara}>This is a Button </p>
        </div >
    )
}