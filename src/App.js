import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ProductList from './components/ProductList';
import Cart from './components/Cart'
import WithHeader from './components/WithHeader';
import NoMatch from './components/NoMatch';
import {useState} from 'react'

const data = [{ id: 101,
  title: 'ADIDAS', shortDescription: 'Awesome Shoes in Store', imageUrl: '', unitPrice: 12, currencyCode: "$"
}, {id: 102,
  title: 'ADIDAS', shortDescription: 'Awesome Shoes in Store', imageUrl: '', unitPrice: 12, currencyCode: "$"
},{id: 103,
  title: 'ADIDAS', shortDescription: 'Awesome Shoes in Store', imageUrl: '', unitPrice: 12, currencyCode: "$"
},{id: 104,
  title: 'ADIDAS', shortDescription: 'Awesome Shoes in Store', imageUrl: '', unitPrice: 12, currencyCode: "$"
},]



const App = () => {
  const [cartData, setcartData] = useState([])
  const handleAddToCart = (id) => {
    setcartData([...cartData, data.find(prod => prod.id == id)])
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route path="/products">
          <WithHeader cartQuantity={cartData.length}>
            <ProductList products={data} handleAddToCart={handleAddToCart}/>
          </WithHeader>
        </Route>
        <Route path="/cart">
          <WithHeader cartQuantity={cartData.length}>
            <Cart />
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
