import React from "react";
import Logo from ".././images/logo.svg"

function Header(props) {
    return (
        <header className="header">
        <img src={ Logo } alt="логотип" className="header__logo" />
        {props.children}
      </header>
    );
}

export default Header;