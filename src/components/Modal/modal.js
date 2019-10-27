import React, { Component } from 'react'

export default class Modal extends Component {
    onClose = x => {
        this.props.onClose && this.props.onClose(x);
    };

    render() {
        if(!this.props.show) {
            return null;
        }

        return (
            <div>
                <div>{this.props.children}</div>
                <div>
                    <button onClick={this.onClose}>Close</button>
                </div>
            </div>
        )
    }
}
