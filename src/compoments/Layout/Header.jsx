import Image from 'next/image';
import React from 'react';

function Header(props) {
  return (
    <>
        <header>
      <div className="menu">
        <table>
          <tbody><tr>
              <td><h1 className='text-white'>COSMETIC</h1></td>
              <td>
                <input type="text" className="search" name="search" placeholder="Search" /><button type="submit"><i className="fa fa-search" /></button>
              </td>
              <td>
                <span>
                  <div className="navbar">
                    <div className="dropdown">
                      <button className="dropbtn">Account 
                        <i className="fa fa-caret-down" />
                      </button>
                      <div className="dropdown-content">
                        <a href="#">Profile</a>
                        <a href="#">Orders</a>
                        <a href="#">Wishlist</a>
                        <a href="#">LogIn/LogOut</a>
                      </div>
                    </div> 
                    <div className="dropdown">
                      <button className="dropbtn cart"><i className="fa fa-shopping-cart" /> <span className="value">2</span>
                      </button>
                    </div> 
                  </div>
                </span>
              </td>
            </tr>
          </tbody></table>
      </div>
      <div className="topnav" id="myTopnav">
        <div className="dropdown">
          <button className="dropbtn">Photography 
            <i className="fa fa-caret-down" />
          </button>
        </div> 
        <div className="dropdown">
          <button className="dropbtn">Crafts 
            <i className="fa fa-caret-down" />
          </button>
        </div> 
        <div className="dropdown">
          <button className="dropbtn">Art 
            <i className="fa fa-caret-down" />
          </button>
        </div> 
        <div className="dropdown">
          <button className="dropbtn">Film and Perfoming Arts
            <i className="fa fa-caret-down" />
          </button>
        </div> 
        <div className="dropdown">
          <button className="dropbtn">Kids Store 
            <i className="fa fa-caret-down" />
          </button>
        </div> 
        <div className="dropdown">
          <button className="dropbtn">More 
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <a href="#">Notifications</a>
            <a href="#">Customer Care</a>
            <a href="#">Download App</a>
          </div>
        </div> 
        <div className="dropdown responsive">
          <button className="dropbtn">Account 
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Orders</a>
            <a href="#">Wishlist</a>
            <a href="#">Login</a>
          </div>
        </div> 
        <div className="dropdown responsive">
          <button className="dropbtn"><i className="fa fa-shopping-cart" /><span className="value">2</span>
          </button>
         
        </div> 
        <a href="javascript:void(0);" style={{fontSize: 15}} className="icon" onclick="myFunction()">☰</a>
      </div>
    </header>

    </>
  );
}

export default Header;
