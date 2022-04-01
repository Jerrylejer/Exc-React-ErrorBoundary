import React, { Component } from 'react';
import handleClicks from '../handleClicks/handleClicks';
import frieza from './frieza.png';
import './frieza.css';

class Frieza extends Component {

    render() {

        const { clickHandler, backGround } = this.props;

        return (
            <div className={`col ${backGround}`}>
                <img
                    src={frieza}
                    alt='frieza'
                    className='frieza'
                    onClick={clickHandler}
                />
            </div>
        );
    }
}

export default handleClicks(Frieza);
