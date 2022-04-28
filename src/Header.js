import React from "react";
import "./Header.css";
import logo from "./Assets/log.png";
import SearchIcon from "@material-ui/icons/Search";
import SearchgIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuth = ()=>{
    if(user){
      auth.signOut();
    }

  }
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchgIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header__option">
            <span className="header__oprionLineOne">Hello <span className="gel">{!user? 'Guest':user.email}</span></span>
            <span className="header__oprionLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to="/orders">

        <div className="header__option">
          <span className="header__oprionLineOne">Returns</span>
          <span className="header__oprionLineTwo">& Oders</span>
        </div>
        </Link>

        <div className="header__option">
          <span className="header__oprionLineOne">Your</span>
          <span className="header__oprionLineTwo">Shopile</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
