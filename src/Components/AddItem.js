import React from 'react';


class AddItem extends React.Component {
    state = {
        quantity: 0,
        productId: 40,
        counterId: 4
    }

    handleChange = e => {
        let {name, value} = e.target
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

    render() { // still working on this section
        const { products } = this.props

        return (
            <form>
                <p>
                    New Todo:
                    <input 
                        type="text" 
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </p>
            </form>
        )
    }
}

export default AddItem;