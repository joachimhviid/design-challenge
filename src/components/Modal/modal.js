import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                    <button className="modal-close" onClick={this.onClose}></button>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};