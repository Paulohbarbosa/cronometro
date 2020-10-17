import React, { Component } from 'react';
import Label from '../componentes/LabelRelogio';
//import FusoHorarios from '../fusoHorario/FusoHoraio';
import moment from 'moment';
var Moment = require('moment-timezone');

class Locais extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    fusoHorarios(fuso, local) {
        var moment = require('moment-timezone');
        var city = Moment.tz(fuso).format('HH:mm:ss');
        return <text>Fuso horário de {local}: {city}</text>
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);

        //const p = this.fusoHorarios(this.state.value);
        var select = document.getElementById('timeCity');
        var option = select.option[select.selectedIndex];

        var valor = document.getElementById('value').value = option.value;
        var texto = document.getElementById('text').value = option.text;
        console.log(valor);

        //let p = Object.create(this.fusoHorarios(valor,texto));

        this.state.handleSubmit = this.state.handleSubmit
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <select id="timeCity" onChange={this.handleChange}>
                            <option value="">Escolha uma cidade</option>
                            <option value="Africa/Luanda">Luanda</option>
                            <option value="Asia/Dubai">Dubai</option>
                            <option value="America/Argentina/Buenos_Aires">Buenos Aires</option>
                        </select>
                    </label>
                    <input type="submit" value="Novo relógio" />
                </form>
                <Label name={this.state.handleSubmit} />
            </div>
        );
    }
}
export default Locais