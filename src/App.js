import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ProductList from './components/ProductList';
import Cart from './components/Cart'
import WithHeader from './components/WithHeader';
import NoMatch from './components/NoMatch';
import { useState, useEffect } from 'react';
import firebaseLibrary from './services/firebaseUtils'

const firebase = window.firebase

const App = () => {
  const [data, setData] = useState([])
  const [cartData, setcartData] = useState([])

  useEffect(() => {
    const initializeFirebase = async () => {
      // Initialize Firebase
      await firebaseLibrary.initialize(firebase)
      const result = await firebaseLibrary.getProducts(firebase)
      firebaseLibrary.listen(firebase)
      setData([...result])
    };

   try {
    initializeFirebase();
   } catch (error) {
     setData([])
   }

  }, [])

  const handleAddToCart = (id) => {
    let found = cartData.find(prod => prod.id == id)
    if (found) {
      found.qty++
      cartData[cartData.indexOf(found)] = found
      setcartData([...cartData])
    } else {
      setcartData([...cartData, { ...data.find(item=>item.id == id), qty: 1 }])
    }
  }

  const handleRemoveFromCart = (id) => {
    let found = cartData.find(prod => prod.id == id)
    if (found) {
      if (found.qty == 1) {
        setcartData([...cartData.slice(0, cartData.indexOf(found)), ...cartData.slice(cartData.indexOf(found) + 1)])
      }
      else {
        found.qty--
        cartData[cartData.indexOf(found)] = found
        setcartData([...cartData])
      }
    } else {
        setcartData([])
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
            <Cart cartItems={cartData} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} data={data}/>
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
