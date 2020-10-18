import React from 'react';
import '../App.css';

const Botao = (props) => (
    <button className="mr-3 col-3" variant="primary" onClick={props.onClick}>{props.label}</button>
)

export default Botao