import React, { useState } from "react";
import Main from "./Main";
import Alert from "./alert/Alert"


export const AlertContext = React.createContext() // создали контекст

function App() {

  const [alert, setAlert] = useState(false)

  const toggleAlert = () => setAlert(setPrev => ! setPrev)

  return (
    <AlertContext.Provider value={alert}>
        <div className={'container pt-3'}>
        
        <Alert />

        <Main toggle={toggleAlert} />
        </div>
    </AlertContext.Provider>
  )
}

export default App