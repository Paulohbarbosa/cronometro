import React from 'react';
import Contador from '../componentes/Contador';
import Botao from '../componentes/Botao';
import LabelRelogio from '../componentes/LabelRelogio';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        milissegundos:0,
        segundos: 0,
        minutos: 0,
        horas:0,
        stop: false,
        nameStop: "Start",
        name: "Cronômetro", 
        parcial: ""
      };
    }
    zerarCronometro() {
        this.state.milissegundos = -1
        this.state.segundos = 0
        this.state.minutos = 0
        this.state.horas = 0
        this.state.parcial = ""
     }
    
    parcial(){
      let p = this.state.horas+ ":"+ this.state.minutos+ ":"+ this.state.segundos+ ":"+ this.state.milissegundos + "\n\n"
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
            if(state.minutos >= 59){
           
              this.state.minutos = 0
              this.incrementarHora(state);
              
             } 
            
            if (state.segundos >= 59){
              this.state.segundos = 0
              this.incrementarMinuto(state);
            }
  
            if (state.milissegundos >= 100){
              this.state.milissegundos = 0
              this.incrementarSegundo(state);
            }
            return({ milissegundos: state.milissegundos +1, /*segundos: state.segundos*/})
           })
      }
  }
     
    incrementarHora (state) {
      this.setState(() => { 
        return {horas: state.horas +1}
      })
  }; 
  
   incrementarSegundo (state) {
      this.setState(() => { 
        return {segundos: state.segundos +1}
      })
    };

    zera () {
      this.setState({ 
        milissegundos: 0 
      })
    }
  
    
    incrementarMinuto (state) {
      this.setState(() => { 
        return {minutos: state.minutos +1}
      })
    };
    
    zerar () {
      this.setState({ 
        segundos: 0 
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
          <Contador horas={this.state.horas} minutos={this.state.minutos} segundos={this.state.segundos} milissegundos={this.state.milissegundos} />        
          <Button className="mr-3 col-3" variant="primary"onClick={() => this.zerarCronometro()}>Zerar</Button>
         <Button className="mr-3 col-3" variant="primary" onClick={() => this.pararTempo()}>{this.state.nameStop}</Button>
          <Button className="mr-3 col-3" variant="primary"onClick={() => this.parcial()}>Parcial</Button>                
          <LabelRelogio name={this.state.parcial} />
        </div>
      );
    }
  }
  
  export default App;