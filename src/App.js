import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { useState } from 'react';

function App() {
  const [inputValue, setinputValue] = useState('');
  const initialData = useSelector((state)=>state.initialState);
  const dispatch = useDispatch()
  const handleSubmit= (e) => {
    e.preventDefault();
    dispatch({type:'ADD',payLoad:[...initialData,inputValue]})
  }
  console.log(initialData);
  return (
    <div className="App">
      <h2>My Shopping List</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setinputValue(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      {initialData.map(item=><li>{item}</li>)}
    </div>
  );
}

export default App;
