import React, { Component } from 'react';
import goku from './Goku.png';
import './goku.css';

class Goku extends Component {

    state = {
        bg: ''
    }

    handleClick = () => {
        this.setState({
            bg: 'bg-success'
        })
    }

    render() {

        if (this.state.bg !== 'bg-success' &&  this.state.bg !== '') {
            throw new Error();
        }

        return (
            <div className={`col ${this.state.bg}`}>
                <img
                    src={goku}
                    alt='Goku'
                    className='goku'
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default Goku;
