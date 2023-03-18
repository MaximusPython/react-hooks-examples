import React, {useCallback, useState} from "react";
import ItemsList from "./directory/items";


function App() {
 
  const [count, setCount] = useState(1)

  const [colored, setColored] = useState(false) // создали хук useState c булливым значением



  const styles = { 
    color: colored ? 'darkred' : 'black'
  }


  const generateItemsFromAPI = useCallback(() => { // функция позволяющая на основе count генерировать кол-во элементов
    // которые впоследствии мы хотим вывести в другой элемент
    return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
  }, [count])


  return (
    <div>
     
    <h1 style ={styles}> Количество элементов: {count} </h1>    
    <button className="btn btn-success" onClick={() => setCount(setPrev => setPrev + 1)}>Добавить</button>
    <button className="btn btn-danger" onClick={() => setColored(setPrev => !setPrev)}>Изменить</button>
    
    <ItemsList getItems={generateItemsFromAPI} />
    </div>
  )
}

export default App