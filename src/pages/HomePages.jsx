import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProductFeature from '../components/ProductFeature';
import { fetchProducts } from '../redux/slices/productSlice';

const HomePages = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);

  // Gọi fetchProducts để lấy dữ liệu sản phẩm khi component được render
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading products...</p>;
  }

  if (status === 'failed') {
    return <p>Error loading products...</p>;
  }

  return (
    <div className="container">
      <div className="row product-showcase mt-5 justify-content-center align-items-center">
        {products.length > 0 && (
          <>
            <div className="col-6">
              <img
                src={products[0].image} // Hiển thị hình ảnh sản phẩm đầu tiên trong danh sách
                alt={products[0].name} // Hiển thị tên sản phẩm
                style={{ width: '400px', height: 'auto' }}
              />
            </div>
            <div className="col-6 text-lg-start">
              <h1 className="mt-3">{products[0].name}</h1> {/* Hiển thị tên sản phẩm */}
              <p>
                {products[0].description.split(' ').slice(0, 10).join(' ') + '...'} {/* Hiển thị 10 chữ đầu */}
              </p>
              <NavLink to={`/detail/${products[0].id}`} className="btn btn-primary mt-2">
                Buy Now
              </NavLink> {/* Điều hướng đến trang chi tiết sản phẩm với id tương ứng */}
            </div>
          </>
        )}
      </div>

      <ProductFeature />
    </div>
  );
};

export default HomePages;
