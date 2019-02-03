import React from 'react';

class CartItem extends React.Component {
   
    render() {
        let { item } = this.props
        return (
            <div className="collection-item">
                <div className="row">
                    <div className="col-md-8">{item.product.name}</div>
                    <div clasNames="col-md-2"> {`$${parseInt(item.product.priceinCents) / 100}`}</div>
                    <div className="col-md-2"> {item.quantity}</div>
                </div>
            </div>
        )

    }
}


export default CartItem;