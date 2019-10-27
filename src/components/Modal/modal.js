import React, { Component } from 'react';
import './modal.css';

export default class Modal extends Component {
    onClose = x => {
        this.props.onClose && this.props.onClose(x);
    };

    render() {
        if(!this.props.show) {
            return null;
        }

        return (
            <div className="modal-wrapper">
                <h2 className="modal-header">{this.props.title}</h2>
                <div>{this.props.children}</div>
                <div>
                    <button onClick={this.onClose}>Close</button>
                </div>
            </div>
        )
    }
}
