import React, {useState, useEffect} from "react";

function App() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])

  // useEffect(() => {
  //   console.log('render')
  // })
  const [pos, setPos] = useState({
    x: 0, y: 0
  })

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    //console.log('ComponentDidMount')
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => setData(json))

    return () => {
      console.log('delete type')
    }
  }, [type])


  return (
    <div>
      <h1>Ресурс: {type}</h1>
      <pre>{JSON.stringify(pos, null, 2)}</pre> 
      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Посты</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
     
    </div>
  )
}



export default App