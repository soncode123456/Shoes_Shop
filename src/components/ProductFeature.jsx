import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import ProductCard from './ProductCard';

const ProductFeature = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items) || [];
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    return (
        <section className="container mt-5">
            <h2>Product Feature</h2>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            <div className="row">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </section>
    );
};

export default ProductFeature;
