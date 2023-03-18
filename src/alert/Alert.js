import React, {useContext} from "react";
import { AlertContext } from "../App";


export default function Alert() {
    const alert = useContext(AlertContext)

    if (!alert) return null // если alert = false то ничего не выводи
    
    return (
        <div className={'alert alert-danger'}>

            <p>Это очень и очень важное сообщение</p>
        </div>
    )
}