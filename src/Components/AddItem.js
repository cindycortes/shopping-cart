import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Product from './Product.js'

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
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">

                                Select a product:
                                <select className='form-control' onChange={this.handleItemChange} placeholder=''>
                                    {products.map((product => {
                                        return <option value={product.id} key={product.id}>{product.name} ({product.priceInCents / 100})</option>
                                    }))}
                                </select>

                            </div>

                            <div className="form-group">
                                Quantity:
                                <input className="form-control" type="number" onChange={this.handleChange} />
                            </div>

                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        </form>

                    </div>
                </div>

            </div>
        )
    }
}

AddItem.propTypes = {
    products: PropTypes.array,
    addItemToCart: PropTypes.func.isRequired
}

export default AddItem