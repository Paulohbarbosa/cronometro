import React, { Component } from 'react';
import Label from '../componentes/LabelRelogio';
import moment from 'moment';
var Moment = require('moment-timezone');

class Locais extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'coconut'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    fusoHorarios(fuso) {
        var moment = require('moment-timezone');
        var newYork = Moment.tz(fuso);
        return newYork.format('HH:mm:ss');
    }

    handleSubmit(event) {
        //alert('Your favorite flavor is: ' + this.state.);

        let p = this.fusoHorarios(this.state.value);

        this.state.handleSubmit = this.state.handleSubmit + p

        event.preventDefault();

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                            <option value="">Escolha uma cidade</option>
                            <option value="Africa/Luanda">Luanda</option>
                            <option value="Asia/Dubai">Dubai</option>
                            <option value="America/Argentina/Buenos_Aires">Buenos Aires</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Label name={this.state.handleSubmit} />
            </div>
        );
    }
}
export default Locais