import {useDispatch, useSelector,  } from "react-redux";

// import './App.css'
import { decrement, increment, incrementByAmount, reset } from "./features/counter/counterSlice";
import { useState } from "react";
import { fetchData } from "./features/todo(createAsyncThunk)/todoSlice";
import { TodoList } from "./components/todoList";

function App() {
  const [amount,setAmount] = useState(0);
  let count = useSelector((state)=>state.counter.value);
  // console.log(count);
  
  let dispatch = useDispatch();
  const handleIncrement = ()=>{
    
     dispatch(increment());
  }

  const handleDecrement = ()=>{
    dispatch(decrement());
  }

  const handleReset = ()=>{
    dispatch(reset());
  }

  function handleAmount(){
    dispatch(incrementByAmount(amount))
  }
  
  function handleFetchTodo(){
    dispatch(fetchData())
  }

  return (
    <div style={{border:"2px solid green",display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center",margin:"auto" }} >
    <div style={{border:"2px solid red",display:"flex",gap: "10px",margin:"auto"}}>
      <div>Count: {count}</div>
      <input type="Number" onChange={(e)=>setAmount(e.target.value)} />
      <button onClick={handleIncrement} >+</button>
      <button onClick={handleDecrement} >-</button>
      <button onClick={handleReset} >Reset</button>
      <button onClick={handleAmount} >Inc by Amount</button>
      <button onClick={handleFetchTodo} >FetchTodo</button>
      
    </div>
    <div>
      <TodoList/>
    </div>
    </div>
  )
}

export default App
