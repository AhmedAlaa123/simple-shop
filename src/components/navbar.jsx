import React from 'react';
import {NavLink,Link} from 'react-router-dom'
const Navbar = (props) => {
    return ( 
       
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <Link className="navbar-brand" to='/simple-shop'>Navbar</Link>
          
            <ul className='navbar-nav '>
              <li className="nav-item ">
                  <NavLink className="nav-link" exact to='/simple-shop'>Menu </NavLink>
              </li>
              <li className="nav-item ">
                  <NavLink className="nav-link" to='/cart'>Shopping Cart </NavLink>
              </li>
              <li className="nav-item ">
                  <NavLink className="nav-link" to='/add-product'>Add Product </NavLink>
              </li>
            </ul>
          
        </nav>
        );  
}
 
export default Navbar;