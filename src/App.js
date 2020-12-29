import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ProductList from './components/ProductList';
import Cart from './components/Cart'
import WithHeader from './components/WithHeader';
import NoMatch from './components/NoMatch';

const data = [{
  title: 'ADIDAS', shortDescription: 'Awesome Shoes in Store', imageUrl: '', unitPrice: 12, currencyCode: "$"
}, {
  title: 'ADIDAS', shortDescription: 'Awesome Shoes in Store', imageUrl: '', unitPrice: 12, currencyCode: "$"
},{
  title: 'ADIDAS', shortDescription: 'Awesome Shoes in Store', imageUrl: '', unitPrice: 12, currencyCode: "$"
},{
  title: 'ADIDAS', shortDescription: 'Awesome Shoes in Store', imageUrl: '', unitPrice: 12, currencyCode: "$"
},]

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route path="/products">
          <WithHeader>
            <ProductList products={data}/>
          </WithHeader>
        </Route>
        <Route path="/cart">
          <WithHeader>
            <Cart />
          </WithHeader>
        </Route>
        <Route>
          <WithHeader>
            <NoMatch />
          </WithHeader>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
