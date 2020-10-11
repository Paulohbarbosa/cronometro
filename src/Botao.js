import React from 'react';
import './App.css';

const Botao = (props) => (
    <button class="my-Button" onClick={props.onClick}>{props.label}</button>
)

export default Botao