import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    gender: true, // mặc định là nam
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? (value === 'true') : value, // Chỉ cần cập nhật nếu là radio
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('https://shop.cyberlearn.vn/api/Users/signup', {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        gender: formData.gender,
        phone: formData.phone,
      });

      if (response.data.statusCode === 200) {
        setSuccessMessage('Đăng ký tài khoản thành công!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      setErrorMessage('Đăng ký không thành công, vui lòng kiểm tra lại thông tin.');
    }
  };

  return (
    <div className="container">
      <div>
        <h2 className='my-4'>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* Cột 1: Email, Password, Password Confirm */}
            <div className="col-md-6 ">
              <input type="hidden" id="id" defaultValue={0} />
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="passwordConfirm">Password Confirm</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordConfirm"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            {/* Cột 2: Name, Phone, Gender, Submit */}
            <div className="col-md-6 ">
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3 ">
                <label htmlFor="gender">Gender</label>
                <div>
                  <label className="ms-3 me-3">
                    <input
                      type="radio"
                      name="gender"
                      value="true"
                      checked={formData.gender === true}
                      onChange={handleChange}
                    /> Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="false"
                      checked={formData.gender === false}
                      onChange={handleChange}
                    /> Female
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          {successMessage && <p className="text-success">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
