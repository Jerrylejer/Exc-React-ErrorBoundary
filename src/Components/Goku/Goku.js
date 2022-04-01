import React, { Component } from 'react';
import handleClicks from '../handleClicks/handleClicks';
import goku from './Goku.png';
import './goku.css';

class Goku extends Component {

    render() {

        const { clickHandler, backGround } = this.props;

        return (
            <div className={`col ${backGround}`}>
                <img
                    src={goku}
                    alt='Goku'
                    className='goku'
                    onClick={clickHandler}
                />
            </div>
        );
    }
}

export default handleClicks(Goku);
