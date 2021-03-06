import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CartItems from './Components/CartItems';
import AddItem from './Components/AddItem';
import TotalPrice from './Components/TotalPrice';


class App extends Component {

  state = {

    products : [

      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],

    cartItemsList : [

      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }
    ]
  }
 
  totalPrice = () => this.state.cartItemsList.reduce((accu, item) => {
    return item.product.priceInCents * item.quantity + accu
  }, 0)

  addItemToCart = newItem=> {
    this.setState(prevState => {
      return {
        cartItemsList : [...prevState.cartItemsList, newItem]  
      }
    })
  }

  render() {


    return (
      <div>
        <Header />
        
        <CartItems cartItemList={this.state.cartItemsList}/>
        
        <AddItem products={this.state.products} addItemToCart={this.addItemToCart} />
        
        <TotalPrice totalPrice={this.totalPrice()} /> 

        <Footer copyright="2019" />
      </div>
    )

  }
}

export default App
