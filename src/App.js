import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ProductList from './components/ProductList';
import Cart from './components/Cart'
import WithHeader from './components/WithHeader';
import NoMatch from './components/NoMatch';
import { useState } from 'react'

const data = [{
  id: 101,
  title: 'ADIDAS', shortDescription: 'Awesome Shoes in Store', imageUrl: '', unitPrice: 12, currencyCode: "$"
}, {
  id: 102,
  title: 'ADIDAS', shortDescription: 'Awesome Shoes in Store', imageUrl: '', unitPrice: 12, currencyCode: "$"
}, {
  id: 103,
  title: 'ADIDAS', shortDescription: 'Awesome Shoes in Store', imageUrl: '', unitPrice: 12, currencyCode: "$"
}, {
  id: 104,
  title: 'ADIDAS', shortDescription: 'Awesome Shoes in Store', imageUrl: '', unitPrice: 12, currencyCode: "$"
},]



const App = () => {
  const [cartData, setcartData] = useState([])
  const handleAddToCart = (id) => {
    let found = cartData.find(prod => prod.cart_item_id == id)
    if (found) {
      found.qty++
      cartData[cartData.indexOf(found)] = found
      setcartData(cartData)
    } else {
      setcartData([...cartData, { cart_item_id: id, qty: 1 }])
    }
  }

  const handleRemoveFromCart = (id) => {
    let found = cartData.find(prod => prod.cart_item_id == id)
    if (found) {
      if (found.qty == 1) {
        setcartData([...cartData.slice(0, cartData.indexOf(found)), ...cartData.slice(cartData.indexOf(found) + 1)])
        return
      }
      else {
        found.qty--
        cartData[cartData.indexOf(found)] = found
        setcartData(cartData)
      }
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route path="/products">
          <WithHeader cartQuantity={cartData.length}>
            <ProductList products={data} cartItems={cartData} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
          </WithHeader>
        </Route>
        <Route path="/cart">
          <WithHeader cartQuantity={cartData.length}>
            <Cart cartItems={cartData} />
          </WithHeader>
        </Route>
        <Route>
          <WithHeader cartQuantity={cartData.length}>
            <NoMatch />
          </WithHeader>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
