import React from "react";

export default function Main({toggle}) {
    return (
        <>
        <h1>Привет в примере с Contex</h1>
        <button onClick={toggle} className="btn btn success">Показать alert</button>
        </>
    )
}