import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Relogio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
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
            <Row className="justify-content-md-center">
                <Col>
                    <h1>Relógio</h1>
                    <h1>{this.state.date.toLocaleTimeString()}</h1>
                </Col>
            </Row>
        );
    }
}
export default Relogio;