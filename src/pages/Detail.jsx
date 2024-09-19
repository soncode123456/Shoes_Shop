import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { fetchProductDetail } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/cartSlice'; // Import addToCart action

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { prodId } = useParams();
  const { productDetail, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductDetail(prodId));
  }, [dispatch, prodId]);

  if (status === 'loading') {
    return <p>Loading product detail...</p>;
  }

  if (status === 'failed') {
    return <p>Error loading product detail: {error}</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(productDetail)); // Thêm sản phẩm vào giỏ hàng
    navigate('/cart'); // Điều hướng người dùng đến trang giỏ hàng
  };

  const shortDescription = productDetail.description
    ? productDetail.description.split(' ').slice(0, 20).join(' ') + '...'
    : 'No description available.';

  return (
    <div className="container">
      <div className='row justify-content-between align-items-center'>
        <div className="col-6">
          <img src={productDetail.image} alt={productDetail.name} className="img-fluid w-75" />
        </div>
        <div className="col-6">
          <h2>Product Description</h2>
          <p>{shortDescription}</p>
          <h4>Available Size</h4>
          <div>
            {productDetail.size && productDetail.size.map((size, index) => (
              <span key={index} className="size-tag" style={{ margin: '0 5px', cursor: 'pointer' }}>
                {size}
              </span>
            ))}
          </div>
          <p className='text-danger fw-bold fs-3'>{productDetail.price} $</p>
          <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button> {/* Thêm sự kiện cho nút */}
        </div>
      </div>

      {/* Phần sản phẩm liên quan */}
      <h2 className="mt-5 text-center">Related Products</h2>
      <div className="row">
        {productDetail.relatedProducts && productDetail.relatedProducts.map((relatedProduct) => (
          <div className="col-md-4 col-sm-4 mb-4" key={relatedProduct.id}>
            <div className="card h-100">
              <img src={relatedProduct.image} className="card-img-top w-100" alt={relatedProduct.name} />
              <div className="card-body">
                <h5 className="card-title mb-4">{relatedProduct.name}</h5>
                <div className="d-flex justify-content-around align-items-center">
                  <NavLink to={`/detail/${relatedProduct.id}`} className="btn btn-primary">Buy Now</NavLink>
                  <p className="card-text fw-bold">{relatedProduct.price} $</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
