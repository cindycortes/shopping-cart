import React, { Component } from 'react'

class Product extends Component {
    render () {
        return (
            <option value={this.props.product.id}>
                {this.props.product.name}
            </option>
        )
    }
}

export default Product