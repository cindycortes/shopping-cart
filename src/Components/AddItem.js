import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product.js'

class AddItem extends Component {
    state = {
        quantity: 0,
        productId: 40,
        counterId: 4

    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        let newProduct = {
            product: this.props.products.filter(product => product.id == this.state.productId)[0],
            quantity: parseInt(this.state.quantity)
        }
        this.props.addItemToCart(newProduct)
        this.setState({
            counterId: this.state.counterId + 1
        })
    }

    render() {
        const { products } = this.props

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="align-center">
                    <div className="form-group">
                        <label htmlFor="Quantity">Quantity:</label>
                        <input onChange={this.handleChange} className="form-control" id="Quantity" type="number" name="quantity" />
                    </div>

                    <div className="form-group">
                        <label>
                            Product:
                    <select onChange={this.handleChange} className="form-control" name="productId">
                                {products.map(product => {
                                    return (
                                        <Product product={product} key={product.id} />

                                    )
                                })}
                            </select>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>

            </div>
        )
    }
}

AddItem.propTypes = {
    products: PropTypes.array,
    addItemToCart: PropTypes.func.isRequired
}

export default AddItem