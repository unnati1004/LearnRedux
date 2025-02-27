import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, removeTodo } from "../features/todoList/ListSlice";

export const TodoList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.list.data);
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = () => {
        if (input.trim() !== "") {
            dispatch(addTodo(input));
            setInput(""); // Clear input after adding
        }
    };

    const handleRemove = (id) => {
        dispatch(removeTodo(id));
    };

    return (
        <>
            <div>
                <input 
                    type="text" 
                    value={input} 
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Add</button>
            </div>
            <div>
                {data.map((todo) => (
                    <div key={todo.id} style={{ border: "2px solid black",display:"flex",justifyContent: "space-around" }}>
                        <div>{todo.text}</div> 
                        <button onClick={() => handleRemove(todo.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    );
};
