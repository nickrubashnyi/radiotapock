import React, {useState} from 'react';

import style from '../../assets/style/scss/contacts/contacts.module.css'
import WayBlock from "../way-block/way-block";

import img from '../../assets/images/RadioTapock.svg'
// import img from '../../assets/images/blackchip-logo.png'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Contacts = () => {
    const [open, setOpen] = useState(false);
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Text, setText] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className={style.main}>
            <WayBlock data={[
                {name: "Головна", url: "/home"},
                {name: "Зворотній зв'язок", url: "/contacts"}
            ]}/>
            <div className={style.main__gen}>
                <h3>Зворотній зв`язок</h3>
                <br/>
                <p><b>МИ ЗНАХОДИМОСЬ ЗА АДРЕСОЮ:</b></p>
            </div>

            <div className={style.main__gen__block}>
                <div>
                    <img src={img}/>
                </div>
                <div>
                    <h6>Інтернет-магазин RadioTapock</h6>
                    <p>м. Львів</p>
                </div>
                <div className={style.phone}>
                    <div>
                        <b>Телефон</b>
                        <p>(068)-463-24-36</p>
                    </div>
                    <div>
                        <b>Viber</b>
                        <p>(068)-463-24-36</p>
                    </div>
                </div>
                <div className={style.phone}>
                    <div>
                        <b>Режим роботи</b>
                        <p>З 9:00 до 18:00 В суботу та неділю вихідні дні</p>
                    </div>
                    <div>
                        <b>Додаткова інформація</b>
                        <p>Товар з магазину можна забрати після оформлення замовлення.</p>
                    </div>
                </div>

            </div>
            <div className={style.back_call}>
                <div>Зворотній зв`язок</div>
            </div>
            <div className={style.back_call__inf}>
                <div className={style.back_call__inf__item}>
                    <span className={style.back_call__inf__item__sp}>* Ваше ім`я: </span>
                    <span className={style.back_call__inf__item__in}><input type={'text'}
                                                                            value={Name}
                                                                            onChange={(e) => setName(e.target.value)}
                    /></span>
                </div>
                <div className={style.back_call__inf__item}>
                    <span className={style.back_call__inf__item__sp}>* E-Mail адреса: </span>
                    <span className={style.back_call__inf__item__in}><input type={'text'}
                                                                            value={Email}
                                                                            onChange={(e) => setEmail(e.target.value)}

                    /></span>
                </div>
                <div className={style.back_call__inf__item}>
                    <span className={style.back_call__inf__item__sp}>* Ваше повідомлення: </span>
                    <span className={style.back_call__inf__item__in}><textarea value={Text}
                                                                               onChange={e => setText(e.target.value)}
                    /></span>
                </div>

            </div>
            <div className={style.btn}>


                <div>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        Відправити
                    </Button>
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        onClick={() => {
                            setName('')
                            setEmail('')
                            setText('')
                        }}
                        keepMounted
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title">{"Дякуємо!"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Після обробки даного повідомлення, наш менеджер зв'яжеться з вами.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>

                            <Button onClick={handleClose} color="primary">
                                Гаразд
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>


            </div>



        </div>
    );
};

export default Contacts;