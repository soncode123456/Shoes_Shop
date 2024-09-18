import React from 'react';
import ProductFeature from '../components/ProductFeature';

const HomePages = () => {
  return (
    <div className="container">
      <div className="row product-showcase mt-5 justify-content-center align-items-center">
        <div className='col-6'>
          <img
            src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
            alt="Product Name"
            style={{ width: '500px', height: 'auto' }}
          />
        </div>
        <div className='col-6'>
          <h1 className="mt-3">Product Name</h1>
          <button className="btn btn-primary mt-2">Buy Now</button>
        </div>
      </div>

      <ProductFeature />
    </div>
  );
};

export default HomePages;
