import React, {useState} from 'react';
import style from "../../../assets/style/scss/resistors/resistors-item/resistor-item.module.css";
import {Button, Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const ModemItem = (props) => {

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <div className={style.main}>
                <Card style={{ width: '16rem', height: "460px"}}>
                    <Card.Img variant="top" src={props.data.url} style={{width: '70%', height:"170px", margin:"0 auto"}} />
                    <Card.Body>
                        <Card.Title>Модем: {props.data.model}</Card.Title>
                        <Card.Text>
                            Частота: {props.data.chastota} МГц
                        </Card.Text>
                        <Card.Text>
                            Інтерфейс: {props.data.interface}
                        </Card.Text>
                        <Card.Text>
                            <span className={style.price}><p>Ціна:  </p> <span><h5>{props.data.price} грн</h5></span></span>
                        </Card.Text>
                        <NavLink to={`/catalog/modems/${props.data.id}`}><Button variant="danger"
                                                                               className={style.btn}
                                                                               onClick={() => {
                                                                                   setVisible(!visible)
                                                                                   props.setResID(props.data.id)
                                                                               }}

                        >
                            Купити <ShoppingCartIcon fontSize={'small'}/>
                        </Button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default ModemItem;