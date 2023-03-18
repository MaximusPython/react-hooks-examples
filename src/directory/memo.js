import React, {useState, useMemo, useEffect} from "react";


function complexComputer(num) {
  console.log("complexComputer") // вывод для просмотра ренднинга
  
  let i = 0
  while (i < 100000000) i++
  return num * 2
}

function App() {
 
  const [number, setNumber] = useState(0)


  const [colored, setColored] = useState(false) // создали хук useState c булливым значением



  const styles = useMemo(() => ({ // закэшировали чтобы не было ошибок из за useEffect
    color: colored ? 'darkred' : 'black'
  }), [colored])


  
  const computed = useMemo(() => { // функция которая каждый раз запускается при повторном
    // рендинге, чтобы этого небыло  мы ее обернули в хук useMemo (закэшировали)

    return complexComputer(number)
  }, [number])

  

  useEffect(() => {
    console.log('styles changed')
  }, [styles])

  

  return (
    <div>
     
    <h1 style ={styles}> Вычисленное свойство: {computed} </h1>    
    <button className="btn btn-success" onClick={() => setNumber(setPrev => setPrev + 1)}>Добавить</button>
    <button className="btn btn-danger" onClick={() => setNumber(setPrev => setPrev - 1)}>Убрать</button>

    <button className="btn btn-warning" onClick={() => setColored(setPrev => !setPrev)}>Кнопка</button> 

    </div>
  )
}

export default App