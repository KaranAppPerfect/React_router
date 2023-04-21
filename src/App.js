import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
// import About from "./components/About";
import OrderDetails from "./components/OrderDetails";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import Featured from "./components/Featured";
import New from "./components/New";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";

const LazyAbout =  React.lazy(() => import('./components/About'))

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={
          <React.Suspense fallback="loading...." >
            <LazyAbout />
          </React.Suspense>
        } />
        <Route path="order-placed" element={<OrderDetails />} />

        <Route path="products" element={<Products/>} >
          <Route index element={<Featured/>} />
          <Route path="featured" element={<Featured/>} />
          <Route path="new" element={<New/>} />
        </Route>

        <Route path="users" element={<Users/>} />
        <Route path="users/:userId" element={<UserDetails/> }/>
        <Route path="users/Admin" element={<Admin/>} />

        <Route path='*' element={<NoMatch/>} />
      </Routes>
    </>
  );
}

export default App;
