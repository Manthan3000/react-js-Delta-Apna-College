function handForm() {
    console.log("Form Was Submited  ")
}

export default function formsreact() {
    return (
        <form>
            <input placeholder="Write Name"/>
            <button onClick={handForm}>Submit</button>
        </form>
    )
} 