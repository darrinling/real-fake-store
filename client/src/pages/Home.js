import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

import StarfieldAnimation from 'react-starfield-animation';

const Home = () => {
  return (
    <div className="container">
      <StarfieldAnimation
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: '-1',
        pointerEvent: 'none'
      }}
     />
      <CategoryMenu />
      <ProductList 
      style={{
        position: 'absolute',
        zIndex: '100'
      }}
      />
      <Cart />
    </div>
  );
};


export default Home;
