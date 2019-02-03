import React from 'react';
import CartItem from './CartItem';


class CartItems extends React.Component {

    render() {
        const { cartItemList } = this.props
        const itemsListed = cartItemList.map(item => <CartItem key={item.id} item={item} />)
        

        return (
            <div className="container">
                <h1> Cart Items</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        
                        <div className="row">
                           
                            <div className="col-md-8"><h4>Products</h4></div>
                            <div className="col-md-2"><h4>Price</h4></div>
                            <div className="col-md-2"><h4>Quantity</h4></div>
                        </div>
                    </div>
                    
                    {itemsListed}
                    
                </div>
               
            </div>
        )
    }
}


export default CartItems;