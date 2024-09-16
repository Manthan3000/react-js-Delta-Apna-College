import { useState } from "react"

export default function Todolist() {

    let [todos, setTodo] = useState(["Sample Tasks"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewtask = () => {
        // console.log("we have to add Tasks in ToDo")
        setTodo([...todos, newTodo]);
    }
    let updateTodoValue = (event) => {
        // console.log(event.target.value)
        setNewTodo(event.target.value)
    }
    
    return (
        <div>
            
            <h3>Welcome my To-Do List App</h3>
            
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
            <br></br>
            <br></br>

            <button onClick={addNewtask}>Add Task</button>
            <br></br>
            <br></br> 
            <hr />

            <h4>Tasks Todo</h4>
            <ul>   
                {todos.map((todo) => {
                    return <li>{todo}</li>
                })
                }
            </ul>
        </div>
    )
}