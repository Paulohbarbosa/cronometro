import React from 'react';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import Temporizador from '../temporizador/Temporizador';
import Relogio from '../relogio/Relogio';
import Cronometro from '../cronometro/Cronometro';
import { Alarm, Clock, Stopwatch } from 'react-bootstrap-icons';
//import '../App.css';
//import Clock  from 'react-bootstrap-icons';

const Interface = (props) => (
    
    <Container>
        <Row className="justify-content-md-center">
            <Col md="auto">
                <Tabs defaultActiveKey="Relógio" id="uncontrolled-tab-example">
                    <Tab eventKey="Relógio" title={<Clock color="royalblue" size={50}/>}>
                        <Relogio/>
                    </Tab>
                    <Tab eventKey="Temporizador" title={<Alarm color="royalblue" size={50}/>}>
                        <Temporizador/>
                    </Tab>
                    <Tab eventKey="Cronometro" title={<Stopwatch color="royalblue" size={50}/>}>
                        <Cronometro />
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Container>


)
export default Interface;