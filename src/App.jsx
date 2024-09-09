import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import HomePages from './pages/HomePages';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Search from './pages/Search';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="search" element={<Search />} />
        <Route path="detail/:prodId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
