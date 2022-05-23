import { Counter } from "./Counter";
import { useState } from "react";
import './App.css';
import './counter.css'




function App() {
  const [checkbox1,setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(true);

  return (
    <div className="App">
      
      <div class='blue'>
        <input type ='checkbox'  checked={checkbox1} onChange={()=>setCheckbox1(!checkbox1)}/>
       {checkbox1 && <Counter/>}
      </div>

      <div class='grey'>
        <input type ='checkbox' checked={checkbox2} onChange={()=>setCheckbox2(!checkbox2)}/>
       {checkbox2 && <Counter/>}
      </div>
     
    </div>
  );
}

export default App;
