import React from 'react';
import Locais from '../componentes/Locais';
import { Jumbotron, Button, Badge } from 'react-bootstrap';
import { formatDistance, subDays } from 'date-fns'
import moment from 'moment';
var Moment = require('moment-timezone');

class Relogio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
            markedDate: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        };
    }

    render() {
        return (

            <div>
                <text>{moment().format('H:mm:ss')}</text>
                <p>
                    <label>Los Angeles {moment().tz("America/Los_Angeles").format('H:mm:ss')}</label>
                </p>
                <Locais></Locais>
            </div>
        );
    }
}

export default Relogio;
