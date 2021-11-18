import React, {useEffect} from 'react';

import style from '../../../assets/style/scss/header/header-logo-input/header-logo-input.module.css'
import logo from '../../../assets/images/blackchip-logo.png';
import logo_1 from '../../../assets/images/RadioTapock.svg';
import {NavLink} from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Button } from '@material-ui/core';

const HeaderLogoInput = (props) => {

    const sum = props.data.reduce(function (sum, {all_price}){
        return sum + all_price
    },0)
    return (
        <div className={style.HeaderLogoInput_main}>
            <div className={style.HeaderLogoInput_main__content}>
                <NavLink to={'/home'}><img src={logo_1} alt={'logo'}/></NavLink>
                <div className={style.input_and_phone}>
                    <div className={style.input_and_phone__contact}><p><CallIcon fontSize={"small"}/>(068)463-24-36 | 9:00 до 18:00 крім Сб та Нд</p></div>
                </div>
                <div className={style.HeaderLogoInput_main__content__basket}>
                    <span><NavLink to={'/basket'}><ShoppingBasketIcon fontSize={'large'}/> <span>Товарів: {props.data.length} ({sum} грн)</span></NavLink></span>
                </div>
            </div>
        </div>
    );
};

export default HeaderLogoInput;