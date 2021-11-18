import React, {useEffect, useState} from 'react';
import style from "../../../assets/style/scss/resistors/resistors-info/resistors-info.module.css";
import CategoryBar from "../../homepage/category-bar/category-bar";
import StarIcon from "@material-ui/icons/Star";
import {Button} from "react-bootstrap";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const DroseliInfoPage = (props) => {
    const [count, setCount] = useState(1)
    const [allprice, setAllPrice] = useState(props.data.price)

    useEffect(() => {
        setAllPrice((count*props.data.price).toFixed(2))
    },[count])

    return (
        <div className={style.main}>
            <div className={style.main__leftbar}>
                <CategoryBar/>
            </div>
            <div className={style.main__content}>


                <div className={style.info}>
                    <div className={style.info__title}><h5>Дроссель {props.data.model} {props.data.inductivity} {props.data.strum}</h5></div>
                    <div className={style.info__photo_desc}>
                        <div className={style.info__photo}>
                            <img src={props.data.url}/>
                        </div>
                        <div className={style.info__desc}>
                            <div className={style.info__desc__star}>
                                <StarIcon fontSize={'small'}/>
                                <StarIcon fontSize={'small'}/>
                                <StarIcon fontSize={'small'}/>
                                <StarIcon fontSize={'small'}/>
                                <StarIcon fontSize={'small'}/>
                                &nbsp;&nbsp;&nbsp;
                                Відгуків: 0 / Написати відгук

                            </div>
                            <div className={style.info__desc__inmarket_articul} >
                                <h6>Наявність: {props.data.in_market}</h6>
                                <h6>Артикул: {props.data.articul}</h6>
                            </div>
                            <div className={style.info__desc__price}>
                                <h5>{allprice} грн.</h5>
                            </div>
                            <div className={style.info__desc__btns}>
                                <span className={style.main_span}>
                                    <span>
                                    <Button variant="danger" size={'sm'}
                                            onClick={() => {
                                                if(count === null){
                                                    setCount(0)
                                                    setCount(count+1)
                                                } else {
                                                    setCount(count+1)
                                                }
                                            }}
                                    ><ArrowDropUpIcon/></Button>
                                    <input type={'number'}
                                           min={'0'}
                                           value={count}
                                           onChange={(e) => {
                                               if(isNaN(e.target.value)){
                                                   setCount(0)
                                               } else {
                                                   setCount(parseInt(e.target.value))
                                               }
                                           }}
                                    />
                                    </span>
                                    <span className={style.sht}><Button variant="danger" size={'sm'}
                                                                        onClick={() => {
                                                                            if(count > 1){
                                                                                setCount(count - 1)
                                                                            } else {
                                                                                setCount(1)
                                                                            }
                                                                        }}
                                    ><ArrowDropDownIcon/></Button> <h3>/шт</h3></span>

                                </span>
                                <div>
                                    <Button variant="danger"
                                            className={style.btn}
                                            onClick={() => {
                                                props.setArr( [...props.arr, {
                                                    img: props.data.url,
                                                    name: `Дроссель: ${props.data.model}`,
                                                    count_item: count,
                                                    price: props.data.price,
                                                    all_price: parseInt(allprice)
                                                }])
                                            }}
                                    >
                                        Купити <ShoppingCartIcon fontSize={'small'}/>
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={style.two_block}>
                        <div className={style.two_block__item}><p>Опис</p></div>
                        <div className={style.two_block__item}><p>Відгуки</p></div>
                    </div>
                    <div className={style.full_desc}>
                        <div className={style.full_desc__title}>
                            <p>
                                {props.data.info}
                            </p>
                            <p>Технічні характеристики:</p>
                            <ul>
                                <li>Індуктивність: {props.data.inductivity}</li>
                                <li>Максимальний струм: {props.data.strum} А</li>
                                <li>Розміри: {props.data.size} </li>
                                <li>Допуск: {props.data.dopusk}</li>
                                <li>Робоча температура: {props.data.temp} º С</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default DroseliInfoPage;