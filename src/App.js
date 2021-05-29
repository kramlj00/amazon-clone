import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import { db } from "./firebase";
import Login from "./Login";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  const getCartItems = () => {
    // onSnapshot - creates a live connection between app and db
    db.collection("cartItems").onSnapshot((snapshot) => {
      let tempItems = [];
      tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log("User", user);

  return (
    <Router>
      {/* if there is no user show Login, else show everything else*/}
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div className="App">
          <Header cartItems={cartItems} user={user} />

          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}

export default App;
