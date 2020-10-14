import React from 'react';
import Contador from './Contador';
import Botao from './Botao';
import LabelRelogio from './LabelRelogio';
import Locais from './Locais';
import './App.css';

import moment from 'moment';
var Moment = require('moment-timezone');



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      segundos: 0,
      minutos: 0,
      stop: false,
      nameStop: "Stop",
      name: "Relógio",
      parcial: ""
    };
  }
  zerarCronometro() {
    this.state.segundos = -1
    this.state.minutos = 0
    this.state.parcial = ""
  }

  parcial() {
    let p = this.state.minutos + ":" + this.state.segundos + "\n\n"
    this.state.parcial = this.state.parcial + p
  }

  pararTempo() {
    this.setState({
      stop: !this.state.stop
    })
    if (this.state.stop)
      this.state.nameStop = "Stop"
    else
      this.state.nameStop = "Start"
  }

  incrementar() {
    if (this.state.stop === false) {
      this.setState(
        function (state, props) {
          if (state.segundos >= 59) {
            this.zerar();
            this.incrementarMinuto(state);
          }
          return ({ segundos: state.segundos + 1 })
        })
    }
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

  selectLocais(){
    var LocaisSelect;
    const fuso = moment.tz.names();
    return(
      fetch(fuso)
      .then(res => res.json())
      .then(locais =>{
          for (const local of locais){
              LocaisSelect.innerHTML += '<option value="${local.nome}">${local.name}</option>';
          }
      })
      )
  }

  render() {
    return (
      <div>
        <Contador minutos={this.state.minutos} segundos={this.state.segundos} />
        <LabelRelogio name={this.state.name} />
        <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />
        <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
        <Botao onClick={() => this.parcial()} label={"Pacial"} />
        <LabelRelogio name={this.state.parcial} />
        <text>{moment().format('H:mm:ss')}</text>
        <p>
          <label>Los Angeles {moment().tz("America/Los_Angeles").format('H:mm:ss')}</label>
        </p>
        <p>
          {moment.tz.names()}
        </p>
        <Locais></Locais>
      </div>
    );
  }
}

export default App;
