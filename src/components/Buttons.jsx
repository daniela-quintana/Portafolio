import React, { Component } from 'react';
import './Buttons.css'


class Buttons extends Component {
    render() {
        return <button href={ this.props.href } className = { this.props.btnClass } > { this.props.name } </button>
    }
}

export default Buttons;