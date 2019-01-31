import React from 'react';

class CartItem extends React.Component {
    render() {
        const { item } = this.props
        return (
            <div class="collection-item">
                <div class="row">
                    <div class="col-md-8">{item.product.name}</div>
                    <div class="col-md-2"> ${item.product.priceinCents / 100}</div>
                    <div class="col-md-2"> {item.quantity}</div>
                </div>
            </div>
        )

    }
}


export default CartItem;