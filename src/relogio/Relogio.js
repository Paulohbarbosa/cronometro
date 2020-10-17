import React from 'react';
import LabelRelogio from '../componentes/LabelRelogio';

class Relogio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
        return (
            <div>
                <LabelRelogio name={this.state.date.toLocaleTimeString()} />
            </div>
        );
    }
}
export default Relogio;