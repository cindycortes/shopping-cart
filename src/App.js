import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CartItems from './Components/CartItems';


class App extends Component {
  render() {

    return (
      <body>
        <Header />
        <CartItems />
        
        
        
        
        <Footer copyright="2019"/>
      </body>
    )


  }
}

export default App
