import React from 'react';
import CartItem from './CartItem';

class CartItems extends React.Component {

    render() {
        const { cartItemList } = this.props
        const itemList = cartItemList.map(item => <CartItem item={item} key={item.id} />)
        // const prices = items.map((item) => {
        //     return item.product.priceInCents * item.quantity
        // })
        // const totalPrice = prices.reduce((total, n) => total + n) / 100

        return (
            <div className="container">
                <h1> Cart Items</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-8">Product</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Quantity</div>
                        </div>
                    </div>
                    {itemList}
                </div>
                {/* Total Price: {totalPrice} */}
            </div>
        )
    }
}


export default CartItems;