import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product.js'

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleItemChange(e) {
        this.setState({})
    }

    handleQuantityChange(e){

    }
    handleSubmit(e) {
        event.preventDefault();
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
                                    {products.map(product => {
                                        return (
                                            <Product product={product} key={product.id} />
                                        )
                                    })} 
                                </select>

                            </div>

                            <div className="form-group">
                                Quantity:
                                <input className="form-control" type="number" onChange={this.handleQuantityChange} />
                            </div>

                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        </form>

                    </div>
                </div>

            </div>
        )
    }
}

// AddItem.propTypes = {
//     products: PropTypes.array,
//     addItemToCart: PropTypes.func.isRequired
// }

export default AddItem