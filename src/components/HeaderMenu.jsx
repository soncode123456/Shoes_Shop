import { NavLink } from 'react-router-dom';

const HeaderMenu = () => {
    return (
      //    <div className="container">
      //    <div className="top d-flex p-3 justify-between align-items-center ">
      //         <div className="left">
      //             <NavLink to="/">
      //                 <h1>Logo</h1>
      //             </NavLink>

      //         </div>
      //         <div className="right">
      //             <NavLink to="/search">Search</NavLink>
      //             <NavLink to="/cart">Cart</NavLink>
      //             <NavLink to="/login">Login</NavLink>
      //             <NavLink to="/register"></NavLink>
      //         </div>

      //     </div>
      //     <nav className='bot'>
      //         <NavLink to="/">Home</NavLink>
      //         <NavLink to="/Men">Men</NavLink>
      //         <NavLink to="/Men">Men</NavLink>
      //         <NavLink to="/Men">Kid</NavLink>
      //         <NavLink to="/Men">Sport</NavLink>

      //     </nav>
      //     </div>

    <>
      <div className="top d-flex p-3 justify-content-between align-items-center bg-dark text-white ">
        <div className="left d-flex mx-md-4">
          <NavLink to="/" className="nav-link me-2">
            <h1>Logo</h1>
          </NavLink>
        </div>
        <div className="right d-flex mx-md-5">
          <NavLink to="/search" className="nav-link me-2">Search</NavLink>
          <NavLink to="/cart" className="nav-link me-2">Cart</NavLink>
          <NavLink to="/login" className="nav-link me-2">Login</NavLink>
          <NavLink to="/register" className="nav-link me-2">Register</NavLink>
        </div>
      </div>
      <nav className='top d-flex p-3  px-5 bg-danger text-white'>
        <NavLink to="/" className="nav-link me-5">Home</NavLink>
        <NavLink to="/Men" className="nav-link me-5">Men</NavLink>
        <NavLink to="/Men" className="nav-link me-5">Men</NavLink>
        <NavLink to="/Men" className="nav-link me-5">Kid</NavLink>
        <NavLink to="/Men" className="nav-link me-5">Sport</NavLink>
      </nav>
    
    </>
    
    
    );
};

export default HeaderMenu;
