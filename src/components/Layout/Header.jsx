import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        {/* 2.1 */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* since we our using -dash, that's why we can't use .notation*/}
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Table of foods" />
        <h1>YOLO</h1>
      </div>
    </Fragment>
  );
}

export default Header;
