import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';
import User from '../screens/User';
import ProductDetails from '../screens/ProductDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
