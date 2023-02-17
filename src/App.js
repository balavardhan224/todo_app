import React,{useState} from 'react';
import List from './List';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]);
  const changeHandler=(e)=>{
    setTask(e.target.value)
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(task)
    const newTodo=[...todos,task]
    setTodo(newTodo);
    setTask("");
  }
  const deleteHandler=(indexValue)=>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodo(newTodos);
  }
  
  return (
    <div>
    <center>
      <div className='card'>
        <div className='card-body'>
          <div className='card-title'>
            <h1>Todo application</h1>
            <form onSubmit={submitHandler}>
              <input type='text' placeholder='Enter your todo' value={task} onChange={changeHandler}/> &nbsp; &nbsp;
              <button type='submit'>Add</button>
            </form>
            <List todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
        
      </div>
    </center>
    </div>
  );
}

export default App;
