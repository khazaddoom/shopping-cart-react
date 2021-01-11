// import './App.css';
// import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import ProductList from './components/ProductList';
// import Cart from './components/Cart'
// import WithHeader from './components/WithHeader';
// import NoMatch from './components/NoMatch';
// import { useState, useEffect } from 'react';
// import firebaseLibrary from './services/firebaseUtils'

// const firebase = window.firebase

// export const ShoppingCartContext = React.createContext({})

// const App = () => {
//   const [data, setData] = useState([])
//   const [cartData, setcartData] = useState([])
//   useEffect(() => {
//     const initializeFirebase = async () => {
//       // Initialize Firebase
//       await firebaseLibrary.initialize(firebase)
//       // await firebaseLibrary.dataLoad(firebase)
//       firebaseLibrary.listen(firebase, setData)
//     };

//    try {
//     initializeFirebase();
//    } catch (error) {
//      setData([])
//    }

//   }, [])

//   const handleAddToCart = (id) => {
//     let found = cartData.find(prod => prod.id == id)
//     if (found) {
//       found.qty++
//       cartData[cartData.indexOf(found)] = found
//       setcartData([...cartData])
//     } else {
//       setcartData([...cartData, { ...data.find(item=>item.id == id), qty: 1 }])
//     }
//   }

//   const handleRemoveFromCart = (id) => {
//     let found = cartData.find(prod => prod.id == id)
//     if (found) {
//       if (found.qty == 1) {
//         setcartData([...cartData.slice(0, cartData.indexOf(found)), ...cartData.slice(cartData.indexOf(found) + 1)])
//       }
//       else {
//         found.qty--
//         cartData[cartData.indexOf(found)] = found
//         setcartData([...cartData])
//       }
//     } else {
//         setcartData([])
//       }
//   }

//   return (
//     <ShoppingCartContext.Provider value={{
//       handleAddToCart: handleAddToCart,
//       handleRemoveFromCart: handleRemoveFromCart
//     }}>
//       <Router>
//         <Switch>
//           <Route exact path="/">
//             <Redirect to="/products" />
//           </Route>
//           <Route path="/products">
//             <WithHeader cartQuantity={cartData.length}>
//               <ProductList products={data} cartItems={cartData} />
//             </WithHeader>
//           </Route>
//           <Route path="/cart">
//             <WithHeader cartQuantity={cartData.length}>
//               <Cart cartItems={cartData} data={data}/>
//             </WithHeader>
//           </Route>
//           <Route>
//             <WithHeader cartQuantity={cartData.length}>
//               <NoMatch />
//             </WithHeader>
//           </Route>
//         </Switch>
//       </Router>
//     </ShoppingCartContext.Provider>
    
//   );
// }

let states = []
let callCount = -1

const useState = (initialValue) => {
  const id = ++callCount;

  if(states[id]) return states[id]
  
  const setValue = (newValue) => {
    console.log(newValue, id)
    states[id][0] = newValue
    callCount = -1
  }
  
  let tuple = [initialValue, setValue]
  states.push(tuple)
  return tuple;
}

const App = () => {

  const [count, setCount] = useState(0)
  
  return <>
    <button onClick={() => {
      setCount(count + 1)
    }}>Update</button>
    {count}
  </>
}

export default App;
