import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Lấy danh sách sản phẩm trong giỏ hàng

  // Tính tổng giá trị đơn hàng
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); // Xóa sản phẩm khỏi giỏ hàng
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity })); // Cập nhật số lượng sản phẩm
  };

  return (
    <div className="container">
      <h1 className="mt-5">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          <div className="col-12 col-md-8">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.name} width="50" height="50" /> {item.name}
                    </td>
                    <td>{item.price} $</td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleUpdateQuantity(item.id, +e.target.value)}
                        min="1"
                        className="form-control"
                        style={{ width: '70px' }}
                      />
                    </td>
                    <td>{item.price * item.quantity} $</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-12 col-md-4">
            <h2>Cart Summary</h2>
            <p>Total Price: <strong>{totalPrice} $</strong></p>
            <button className="btn btn-primary btn-block mt-3">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
