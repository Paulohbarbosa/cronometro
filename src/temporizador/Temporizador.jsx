import React from 'react';
import Botao from '../componentes/Botao'
import LabelRelogio from '../componentes/LabelRelogio'

class Cronometro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horas: 0,
            minutos: 0,
            segundos: 0,
            centesimo: 100,
            stop: false,
            nameStop: "Iniciar",
            name: "Temporizador",
            parcial: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    parcial() {
        let p = this.state.horas + ":" + this.state.minutos + ":" + this.state.segundos + ':' + this.state.centesimo + "\n\n"
        this.state.parcial = this.state.parcial + p
    }

    pararTempo() {
        this.setState({
            stop: !this.state.stop
        })
        if (this.state.stop)
            this.state.nameStop = "Iniciar"
        else
            this.state.nameStop = "Parar"
    }

    decrementar() {
        if (this.state.stop === true) {
            this.setState(
                function (state, props) {

                    if (state.horas === 0 && state.minutos === 0 && state.segundos === 0) {
                        this.zerar()
                    } else {
                        if (state.minutos === 0 && state.segundos === 0) {
                            this.state.minutos = 59
                            this.state.segundos = 59
                            this.decrementarHoras(state)
                        } else if (state.segundos <= 0) {
                            this.decrementarMinuto(state)
                            this.state.segundos = 59
                        } else if (state.centesimo <= 0) {
                            this.state.centesimo = 100
                            this.decrementarSegundo(state)
                        }
                    }
                    return ({ centesimo: state.centesimo - 1 })
                })
        }
    }
   

    decrementarMinuto(state) {
        this.setState(() => {
            return { minutos: state.minutos - 1 }
        })
    }

    decrementarHoras(state) {
        this.setState(() => {
            return { horas: state.horas - 1 }
        })
    }
    decrementarSegundo(state) {
        this.setState(() => {
            return { segundos: state.segundos - 1 }
        })
    }

    zerar() {
        this.setState({
            segundos: 0,
            minutos: 0,
            centesimo: 0,
            horas: 0
        })
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.decrementar(), 10)
    }

    setTempo() {
        this.setState({
            horas: this.refs.horas.value,
            minutos: this.refs.minutos.value,
            segundos: this.refs.segundos.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="relogio">
                    <form ref="form" onSubmit={this.handleSubmit} className="countdown-form">
                        <input type="number" min="0" max="8.760" ref="horas" />
                        <input type="number" min="0" max="59" ref="minutos" />
                        <input type="number" min="0" max="59" ref="segundos" />
                        <Botao onClick={() => this.setTempo()} label="Iniciar" />
                    </form>
                    <h1 class="my-title" > {this.state.horas}:{this.state.minutos}:{this.state.segundos}</h1>
                    <LabelRelogio name={this.state.name} />
                    <Botao onClick={() => this.zerar()} label={"Zerar"} />
                    <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
                    <Botao onClick={() => this.parcial()} label={"Pacial"} />
                    <LabelRelogio name={this.state.parcial} />
                </div>
            </div>
        );
    }
}
export default Cronometro;