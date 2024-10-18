import React, { Component } from 'react';
import PortalDemo from './PortalDemo';

class ParentPortal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            click: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            click: prevState.click + 1
        }));
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }} onClick={this.handleClick}>
                <p>You have clicked {this.state.click} times</p>
                <PortalDemo />
            </div>
        );
    }
}

export default ParentPortal;
