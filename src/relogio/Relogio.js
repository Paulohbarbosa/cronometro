import React from 'react';
import Locais from '../componentes/Locais';
//import { Jumbotron, Button, Badge } from 'react-bootstrap';

import Contador from '../componentes/Contador';
import Botao from '../componentes/Botao';
import LabelRelogio from '../componentes/LabelRelogio';
import moment from 'moment';
var Moment = require('moment-timezone');

class Relogio extends React.Component {

    constructor(props) {
        super(props);

        const h = moment().hour();
        const m = moment().minute();
        const s = moment().second();

        this.state = {
            milissegundos: s,
            segundos: m,
            minutos: h,
            stop: false,
            //nameStop: "Start",
            name: "Relógio",
            parcial: ""
        };
    }

    parcial() {
        let p = this.state.minutos + ":" + this.state.segundos + ":" + this.state.milissegundos + "\n\n"
        this.state.parcial = this.state.parcial + p
    }

    incrementar() {
        if (this.state.stop === false) {
            this.setState(
                function (state, props) {
                    if (state.milissegundos >= 60) {
                        this.incrementarSegundo(state)
                        this.zera();
                    }
                    if (state.segundos >= 60) {
                        this.zerar()
                        this.incrementarMinuto(state)
                    }
                    return ({ milissegundos: state.milissegundos + 1, segundos: state.segundos })
                })
        }
    }


    incrementarSegundo(state) {
        this.setState(() => {
            return { segundos: state.segundos + 1 }
        })
    };

    zera() {
        this.setState({
            milissegundos: 0
        })
    }


    incrementarMinuto(state) {
        this.setState(() => {
            return { minutos: state.minutos + 1 }
        })
    };

    zerar() {
        this.setState({
            segundos: 0
        })
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.incrementar(), 1000)
    }

    FusoHorarios() {
        var moment = require('moment-timezone');
        var newYork = Moment.tz("America/New_York");
        return newYork.format('HH:mm:ss');
    }

    render() {
        return (
            <div>
                <LabelRelogio name={this.state.name} />
                <Contador minutos={this.state.minutos} segundos={this.state.segundos} milissegundos={this.state.milissegundos} />
                {/* <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} /> */}
                {/* <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} /> */}
                <Botao onClick={() => this.parcial()} label={"Novo Relógio"} />
                <LabelRelogio name={this.state.parcial} />
                <p>
                    <text>Fuso horairo de Nova York: {this.FusoHorarios()}</text>
                </p>
            </div>
        );
    }
}
export default Relogio;
