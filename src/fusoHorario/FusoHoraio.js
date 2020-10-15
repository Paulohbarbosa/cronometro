import React from 'react';
import Contador from '../componentes/Contador';
// import Botao from '../componentes/Botao';
import LabelRelogio from '../componentes/LabelRelogio';
import moment from 'moment';
var Moment = require('moment-timezone');

class FusoHoraio extends React.Component {

    constructor(props) {
        super(props);

        const lugar = ;
        const fuso = ;

        this.state = {
            //milissegundos: s,
            //segundos: m,
           // minutos: h,
            //stop: false,
            //nameStop: "Start",
            name: lugar,
            //parcial: ""
        };
    }

    // incrementar() {
    //     if (this.state.stop === false) {
    //         this.setState(
    //             function (state, props) {
    //                 if (state.milissegundos >= 60) {
    //                     this.incrementarSegundo(state)
    //                     this.zera();
    //                 }
    //                 if (state.segundos >= 60) {
    //                     this.zerar()
    //                     this.incrementarMinuto(state)
    //                 }
    //                 return ({ milissegundos: state.milissegundos + 1, segundos: state.segundos })
    //             })
    //     }
    // }
    // incrementarSegundo(state) {
    //     this.setState(() => {
    //         return { segundos: state.segundos + 1 }
    //     })
    // };

    // zera() {
    //     this.setState({
    //         milissegundos: 0
    //     })
    // }


    // incrementarMinuto(state) {
    //     this.setState(() => {
    //         return { minutos: state.minutos + 1 }
    //     })
    // };

    // zerar() {
    //     this.setState({
    //         segundos: 0
    //     })
    // }

    // componentDidMount() {
    //     this.timer = setInterval(
    //         () => this.incrementar(), 1000)
    // }

    FusoHorarios() {
        var moment = require('moment-timezone');
        var newYork = Moment.tz(fuso);
        return newYork.format('HH:mm:ss');
    }

    render() {
        return (
            <div>
                <LabelRelogio name={this.state.name} />
                <Contador> {this.FusoHorarios()} </Contador>
            </div>
        );
    }
}
export default FusoHorario;
