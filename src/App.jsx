import { useState } from 'react'
import './App.css'

function App() {
const [color, setcolor] = useState(null);  

const handleClick = (color) => {
 setcolor(color)
}

  return (
    <>
     <div id='semaforo'>
        <div className={"circle red " + ((color === "red") ? "turn-on" : "" )} onClick={()=> handleClick("red")}></div>
        <div className={"circle orange " + ((color === "orange") ? "turn-on" : "" ) } onClick={()=> handleClick("orange")}></div>
        <div className={"circle green " + ((color === "green") ? "turn-on" : "" )} onClick={()=> handleClick("green")}></div>
     </div>
    </>
  )
}

export default App
