import React from 'react';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import Temporizador from '../temporizador/Temporizador';
import Relogio from '../relogio/Relogio';
import Cronometro from '../cronometro/Cronometro';
import '../App.css';
//import Clock  from 'react-bootstrap-icons';

const Interface = (props) => (
    
    <Container>
        <Row classeName="justify-content-center">
            <Col md="auto">
                <Tabs defaultActiveKey="Relógio" id="uncontrolled-tab-example">
                    <Tab eventKey="Relógio" title="Relógio">
                        <Relogio/>
                    </Tab>
                    <Tab eventKey="Temporizador" title="Temporizador">
                        <Temporizador/>
                    </Tab>
                    <Tab eventKey="Cronometro" title="Cronômetro">
                        <Cronometro />
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Container>


)
export default Interface;