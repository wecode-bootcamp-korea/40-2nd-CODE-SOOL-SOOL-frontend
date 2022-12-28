import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Loading from './pages/Signin/Loading';
import Search from './pages/Search/Search';
import SubscribeInfo from './pages/Subscribe/Sub_Info/SubscribeInfo';
import Subscribe from './pages/Subscribe/Subscribe';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductList/Detail/ProductInfo';
import Cart from './pages/Cart/Cart';
import Receipt from './pages/Receipt/Receipt';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/oauth/callback/kakao" element={<Loading />} />
        <Route path="/search" element={<Search />} />
        <Route path="/subscribeinfo" element={<SubscribeInfo />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productlist/:id" element={<ProductList />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/productlist/:value/:id" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
