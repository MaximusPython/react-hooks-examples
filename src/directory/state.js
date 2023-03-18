import React, {useState} from "react";

function computerInitialCounter() { // наше состояние будет результатом этой функции
  console.log("some text")
  return Math.trunc(Math.random() * 20)
}


function App() {
 const [counter, setCounter] = useState(computerInitialCounter)

//  const [counter, setCounter] = useState(() => {
//   return computerInitialCounter() 
//  })




  function increment() {
    // setCounter(counter + 1)
    // setCounter(counter + 1) так изменить состояние не получится так как оно не оновывается на предыдущим состоянии
    // Если мы хотим чтобы не было багов и состояние изменялось на 2, то делаем код ниже


    setCounter((prevCounter) => { // тут функция setCounter может по другому принмать в себя изменения state, например не просто значение а
      // call back функцию, она принмает в себя предыдущие состояние (prevCounter) и возращает его на 1 больше. т е мы тут основываемся не 
      // на state Conter а на предыдущим состоянии prevCounter. Результат будет таким же.   
      return prevCounter + 1
    })
    setCounter(prevCounter => prevCounter + 1) // тут мы также еще раз обращаемся к предыдущиму состоянию изменяя его еще на 1
  }


  function decrement() {
    setCounter(counter - 1)
  }


  const [state, setState] = useState( { // создали новое состояние в формате обьекта (массива)
    title: 'Счетчик',
    date: Date.now()
  })

  function updateText() { // вывели функцию из обработчика события в новую функцию (а там вызываем)
    setState(prevState => {
      return {
        ...prevState, title: 'Новая запись'
      }
    })
  }

  return (
    <div className="App">
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success">Добавить</button>
      <button onClick={decrement} className="btn btn-danger">Удалить</button>

      <button onClick={updateText} className="btn btn-default">Изменить</button>

      <pre>{JSON.stringify(state, null, 2)}</pre> 
    </div>
  );
}

export default App;
