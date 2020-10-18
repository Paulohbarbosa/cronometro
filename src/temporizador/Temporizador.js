import React from 'react';
import Botao from '../componentes/Botao'
import LabelRelogio from '../componentes/LabelRelogio'
import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horas: 0,
      segundos: 0,
      minutos: 0,
      milissegundo: 100,
      stop: false,
      nameStop: "Iniciar",
      name: "Temporizador",
      parcial: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  parcial() {
    let p = this.state.horas + ":" + this.state.minutos + ":" + this.state.segundos + ':' + this.state.milissegundo + "\n\n"
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
            } else if (state.milissegundo <= 0) {
              this.state.milissegundo = 100
              this.decrementarSegundo(state)
            }
          }
          return ({ milissegundo: state.milissegundo - 1 })
        })
    }
  }

  decrementarSegundo(state) {
    this.setState(() => {
      return { segundos: state.segundos - 1 }
    })
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
  };

  zerar() {
    this.setState({
      segundos: 0,
      minutos: 0,
      milissegundo: 0,
      horas: 0
    })
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.decrementar(), 10)
  }

  setTempo(){
    if(this.refs.horas.value < 0 || this.refs.minutos.value < 0 || this.refs.segundos.value < 0){
      this.state.horas = 0
      this.state.minutos = 0
      this.state.segundos = 0
    }else if(this.refs.minutos.value > 59 || this.refs.segundos.value > 59){
      this.state.horas = this.refs.horas.value || 0
      this.state.minutos = this.refs.horas.value || 59
      this.state.segundos = this.refs.horas.value || 59
    }else{
         let horas = this.refs.horas.value || 0;
         let minutos = this.refs.minutos.value || 0;
         let segundos = this.refs.segundos.value || 0;
         console.log(horas, minutos, segundos);
         this.setState({
           horas,
           minutos,
           segundos
         })
  }
}

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
       
      <div>
        <LabelRelogio name={this.state.name} />
         <div className="relogio">
          <form ref="form" onSubmit={this.handleSubmit} className="countdown-form">
            <input type="number" min="0" max="8.760" ref="horas" />
            <input type="number" min="0" max="59" ref="minutos" />
            <input type="number" min="0" max="59" ref="segundos" />
            <Button className="mr-3 ml-1 col-3" variant="primary" onClick={() => this.setTempo()}> Adicionar</Button>
          </form>
          <h1 class="my-title" > {this.state.horas}:{this.state.minutos}:{this.state.segundos}</h1>
                       
        <Button className="mr-3 col-3" variant="primary"onClick={() => this.zerar()}>Zerar</Button>
        <Button className="mr-3 col-3" variant="primary" onClick={() => this.pararTempo()}>{this.state.nameStop}</Button>
        <Button className="mr-3 col-3" variant="primary"onClick={() => this.parcial()}>Parcial</Button>                
         </div>   
        </div>    
      );
  }
}
export default App;