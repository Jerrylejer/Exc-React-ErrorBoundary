import React, { Component } from 'react';
import frieza from './frieza.png';
import './frieza.css';

class Frieza extends Component {
    state = {
        bg: '',
    };

    handleClick = () => {
        this.setState({
            bg: 'bg-danger',
        });
    };

    render() {
        if (this.state.bg !== 'bg-success' &&  this.state.bg !== '') {
            throw new Error();
        }

        return (
            <div className={`col ${this.state.bg}`}>
                <img
                    src={frieza}
                    alt='frieza'
                    className='frieza'
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default Frieza;
