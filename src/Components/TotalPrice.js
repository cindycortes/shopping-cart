import React, { Component } from 'react'

class TotalPrice extends Component {
    render() {
        return (
            <div className="container">
                <h4>Total Price: {`$${parseInt(this.props.totalPrice) / 100}`}</h4>
            </div>
        )
    }
}

export default TotalPrice