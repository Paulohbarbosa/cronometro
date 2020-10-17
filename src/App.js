import React from 'react';
import './App.css';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
 
import {Button} from 'react-bootstrap';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      milissegundos:60,
      segundos: 60,
      minutos: 1,
      horas: 1,
      stop: false,
      nameStop: "Start",
      name: "Temporizador", 
      parcial: ""
    };
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
          if(state.horas === 0 && state.minutos === 0 && state.segundos === 0){
            this.zerar()
          }else{
            
            if(state.minutos === 0 && state.segundos === 0){
              this.state.minutos = 59
              this.state.segundos = 59
              this.decrementarHora(state)
            }else if(state.segundos <= 0){
              this.decrementarMinuto(state)
              this.state.segundos = 59
            }else if(state.milissegundos <= 0){
              this.state.milissegundos = 100
              this.decrementarSegundo(state)
            }

          }
          
          return({ milissegundos: state.milissegundos -1, /*segundos: state.segundos*/})
         })
    }
  }

 decrementarSegundo (state) {
    this.setState(() => { 
      return {segundos: state.segundos -1}
    })
  };
    
  decrementarMinuto (state) {
    this.setState(() => { 
      return {minutos: state.minutos -1}
    })
  };

  decrementarHora (state) {
    this.setState(() => { 
      return {horas: state.horas -1}
    })
  };
  
  zerar () {
    this.setState({ 
      segundos: 0,
      minutos: 0,
      milissegundos: 0,
      horas:0
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
        <Contador horas = {this.state.horas} minutos= {this.state.minutos} segundos={this.state.segundos} milissegundos={this.state.milissegundos} />        
        <Button variant="primary"onClick={() => this.zerar()}>Zerar</Button>{' '}
        <Button variant="primary" onClick={() => this.pararTempo()}>{this.state.nameStop}</Button>{' '}
        <Button variant="primary"onClick={() => this.parcial()}>Parcial</Button>{' '}        
        <LabelRelogio name={this.state.parcial} /> 
          
      </div>
    );
  }
}

export default App;
