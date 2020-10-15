import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      milissegundos:60,
      segundos: 60,
      minutos: 2,
      stop: false,
      nameStop: "Start",
      name: "Temporizador", 
      parcial: ""
    };
  }
  zerarCronometro() {
     this.state.milissegundos = 0
      this.state.segundos = 0
      this.state.minutos = 0
      this.state.parcial = ""
   }
  
  parcial(){
    let p = this.state.minutos+ ":"+ this.state.segundos+ ":"+ this.state.milissegundos + "\n\n"
    this.state.parcial = this.state.parcial + p
  }
  
  pararTempo(){
    this.setState({ 
        stop: !this.state.stop 
      })
    if (this.state.stop)
      this.state.nameStop = "Start"
    else
      this.state.nameStop = "Stop"
  }

  incrementar () {
    if (this.state.stop === true){
      this.setState(
         function (state, props) {
          if (state.milissegundos <= 0) {
            state.milissegundos = 60;
            this.incrementarSegundo(state)                       
          }
          if (state.segundos <= 0) {
            this.incrementarMinuto(state)
            state.segundos = 60;
                       
          }  
          if (state.minutos <= 0) {
            this.zerado()
          }
          return({ milissegundos: state.milissegundos -1, /*segundos: state.segundos*/})
         })
    }
  }

 incrementarSegundo (state) {
    this.setState(() => { 
      return {segundos: state.segundos -1}
    })
  };
  zera () {
    this.setState({ 
      milissegundos: 0 
    })
  }

  
  incrementarMinuto (state) {
    this.setState(() => { 
      return {minutos: state.minutos -1}
    })
  };
  
  zerar () {
    this.setState({ 
      segundos: 0 
    })
  }

  zerado () {
    this.setState({ 
      minutos: 0 
    })
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.incrementar(), 1)
  }
  

  render(){

    return (
      <div>
        
        <LabelRelogio name={this.state.name} />
        <Contador minutos={this.state.minutos} segundos={this.state.segundos} milissegundos={this.state.milissegundos} />        
        <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />
        <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
        <Botao onClick={() => this.parcial()} label={"Pacial"} />
        <LabelRelogio name={this.state.parcial} />
      </div>
    );
  }
}

export default App;
