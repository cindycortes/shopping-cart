import React, { Component } from 'react'

class TotalPrice extends Component {
    render() {
        return (
            <div>
                <h4>Total Price: {`$${Math.ceil(parseInt(this.props.totalPrice)) / 100}`}</h4>
            </div>
        )
    }
}

export default TotalPrice