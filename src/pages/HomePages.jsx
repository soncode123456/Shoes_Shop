import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductFeature from '../components/ProductFeature';

const HomePage = () => (
  <div>
    <Header />
    <main>
      <section className="hero">
        <div>Product name</div>
        <button>Buy now</button>
      </section>
      <ProductFeature />
    </main>
    <Footer />
  </div>
);

export default HomePage;
