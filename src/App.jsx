import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import HomePages from './pages/HomePages';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Search from './pages/Search';
import { store } from './redux/store';
import LayoutPageMaster from './pageMaster/LayoutPageMaster';
import {Provider} from 'react-redux'
const App = () => {
  return (
    <Provider store={store}>
         <BrowserRouter>
              <Routes>
                <Route path='' element={<LayoutPageMaster></LayoutPageMaster>}>
                  <Route path="/" element={<HomePages></HomePages>}></Route>
                  <Route path="login" element={<Login />}  ></Route>
                  <Route path="register" element={<Register ></Register>}> </Route>
                  <Route path="profile" element={<Profile></Profile>}></Route>
                  <Route path="cart" element={<Cart></Cart>}></Route>
                  <Route path="search" element={<Search></Search>}></Route>
                  <Route path="detail/:prodId" element={<Detail></Detail>} ></Route>     
                </Route>
              </Routes>
          </BrowserRouter>
    </Provider>
   
  );
};

export default App;
