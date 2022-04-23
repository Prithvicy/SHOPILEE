import React from 'react';
import './Header.css'
import logo from "./Assets/log.png"
import SearchIcon from '@material-ui/icons/Search';
import SearchgIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
      <div className="header">
          <Link to="/">
          <img className='header__logo' src={logo} alt="" />
          </Link>
          <div className="header__search">
              <input type="text"  className="header__searchInput" />
              <SearchgIcon className='header__searchIcon'/>
          </div>
          <div className="header__nav">
              <div className="header__option">
                    <span className="header__oprionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__oprionLineTwo">
                        Sign In
                    </span>
              </div>
              <div className="header__option">
              <span className="header__oprionLineOne">
                        Returns
                    </span>
                    <span className="header__oprionLineTwo">
                        & Oders
                    </span>
                  
              </div>
              <div className="header__option">
              <span className="header__oprionLineOne">
                        Your 
                    </span>
                    <span className="header__oprionLineTwo">
                        Shopile
                    </span>

              </div>
              <Link to="/checkout">
              <div className="header__optionBasket">
                  <ShoppingBasketIcon/>
                  <span  className='header__optionLineTwo header__basketCount'>
                      0
                  </span>

              </div>
              </Link>

          </div>
      </div>
    

  )
}

export default Header