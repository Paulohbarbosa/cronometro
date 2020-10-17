import React from 'react';
import Contador from '../componentes/Contador';
import Botao from '../componentes/Botao';
import LabelRelogio from '../componentes/LabelRelogio';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        milissegundos:0,
        segundos: 0,
        minutos: 0,
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
            if (state.milissegundos >= 99) {
              this.incrementarSegundo(state)
              this.zera();            
            }
            if (state.segundos >= 60) {
              this.zerar()
              this.incrementarMinuto(state)                 
              }  
            return({ milissegundos: state.milissegundos +1, segundos: state.segundos})
           })
      }
    }
  
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
        () => this.incrementar(), 10)
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