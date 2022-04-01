import React, { Component } from 'react';
import frieza from './frieza.png';
import './frieza.css';

class Frieza extends Component {

    state = {
        bg: ''
    }

    handleClick = () => {
        this.setState({
            bg: 'bg-danger'
        })
    }

    render() {
     
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
