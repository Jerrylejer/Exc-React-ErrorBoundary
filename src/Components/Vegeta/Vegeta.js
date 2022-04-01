import React, { Component } from 'react';
import handleClicks from '../handleClicks/handleClicks';
import vegeta from './vegeta.png';
import './vegeta.css';

class Vegeta extends Component {

    render() {

        const { clickHandler, backGround } = this.props;

        return (
            <div className={`col ${backGround}`}>
                <img
                    src={vegeta}
                    alt='Vegeta'
                    className='vegeta'
                    onClick={clickHandler}
                />
            </div>
        );
    }
}

export default handleClicks(Vegeta);
