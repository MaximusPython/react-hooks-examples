import React, {useState, useEffect, useRef} from "react";


function App() {
  //const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')

  const renderCount = useRef(1) 
  const inputRef = useRef(null)
  const prevValue = useRef("")


  useEffect(() => {
    prevValue.current = value
  }, [value]) // следим за состоянием value


  useEffect(() => {
    renderCount.current++

    console.log(inputRef.current.value) // выводим в консоль значение DOM элемента - input
  })


  const Focusing = () => inputRef.current.focus()


  return (
    <div>
     
    <h1>Количество рендеров: {renderCount.current} </h1>
    <h2>Прошлое состояние: {prevValue.current} </h2>

    <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value}></input>
    
    <button className="btn btn-success" onClick={Focusing}>FOCUS</button>
    </div>
  )
}



export default App