import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import ProductCard from './ProductCard';
import { NavLink } from 'react-router-dom';

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
                        <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                            <div className="card h-100">
                                <img src={product.image} className="card-img-top w-100" alt={product.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.price} $</p>
                                    <NavLink to={`/detail/${product.id}`} className="btn btn-primary">
                                        Buy Now
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </section>
    );
};

export default ProductFeature;
