import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

//Styles
import style from '../../assets/style/scss/app/app.module.css';
//Components
import Header from "../header/header";
import Homepage from "../homepage/homepage";
import Catalog from "../catalog/catalog";
import Resistors from "../resistors/resistors";
import ResistorInfoPage from "../resistors/resistor-info-page/resistor-info-page";
import Busket from "../basket/busket";
import Condensators from "../condensators/condensators";
import CondensatorsInfoPage from "../condensators/condensators-info-page/condensators-info-page";
import Transistors from "../transistors/transistors";
import TransistorsInfoPage from "../transistors/transistors-info-page/transistors-info-page";
import Rele from "../rele/rele";
import ReleInfoPage from "../rele/rele-info-page/rele-info-page";
import Modems from "../modems/modems";
import ModemInfoPage from "../modems/modem-info-page/modem-info-page";
import Termistors from "../termistors/termistors";
import TermistorInfoPage from "../termistors/termistor-info-page/termistor-info-page";
import Stabilitrons from "../stabilitron/stabilitrons";
import StabilitronInfoPage from "../stabilitron/stabilitron-info-page/stabilitron-info-page";
import Diods from "../diods/diods";
import DiodInfoPage from "../diods/diod-info-page/diod-info-page";
import Droseli from "../droseli/droseli";
import DroseliInfoPage from "../droseli/droseli-info-page/droseli-info-page";
import Datchyki from "../datchyki/datchyki";
import DatchykyInfoPage from "../datchyki/datchyky-info-page/datchyky-info-page";
import Footer from "../footer/footer";
import Rules from "../rules/rules";
import Contacts from "../contacts/contacts";
import Dostavka from "../dostavka/dostavka";
import Checkout from "../delivery_pay_component/Checkout";
import Vidgyky from "../vidguky/vidgyky";

const App = () => {

    const [resID, setResID] = useState(0)

    const data_res   = require('../../data/resistors.json')
    const data_cond  = require('../../data/condensators.json')
    const data_tran  = require('../../data/transistors.json')
    const data_rele  = require('../../data/rele.json')
    const data_modem = require('../../data/modems.json')
    const data_term  = require('../../data/termistors.json')
    const data_stab  = require('../../data/stabilitrons.json')
    const data_diod  = require('../../data/diods.json')
    const data_dros  = require('../../data/droseli.json')

    const [arr,setArr] = useState([])


    return (

        <div>
            <BrowserRouter>
                <Header data={arr}/>
                <Route path='/' exact render={() => <Homepage/>}/>
                <Route path='/home' render={() => <Homepage/>}/>
                <Route path='/basket' render={() => <Busket data={arr}/>}/>
                <Route path='/catalog' exact render={() => <Catalog/>}/>
                <Route path='/rules' exact render={() => <Rules/>}/>
                <Route path='/contacts' exact render={() => <Contacts/>}/>
                <Route path='/delivery' exact render={() => <Dostavka/>}/>
                <Route path='/responds' exact render={() => <Vidgyky/>}/>

                <Route path='/delivery_information' exact render={() => <Checkout data={arr}/>}/>

                <Route path='/catalog/resistors'  exact render={() => <Resistors setResID={setResID}/>}/>
                <Route path='/catalog/resistors/:id' render={() => <ResistorInfoPage data={data_res[resID]}
                                                                                     arr={arr}
                                                                                     setArr={setArr}
                />}  />

                <Route path='/catalog/condensators'  exact render={() => <Condensators setResID={setResID}/>}/>
                <Route path='/catalog/condensators/:id' render={() => <CondensatorsInfoPage data={data_cond[resID]}
                                                                                            arr={arr}
                                                                                            setArr={setArr}
                />}  />

                <Route path='/catalog/transistors'  exact render={() => <Transistors setResID={setResID}/>}/>
                <Route path='/catalog/transistors/:id' render={() => <TransistorsInfoPage  data={data_tran[resID]}
                                                                                            arr={arr}
                                                                                            setArr={setArr}
                />}  />

                <Route path='/catalog/rele'  exact render={() => <Rele setResID={setResID}/>}/>
                <Route path='/catalog/rele/:id' render={() => <ReleInfoPage  data={data_rele[resID]}
                                                                             arr={arr}
                                                                             setArr={setArr}
                />}  />

                <Route path='/catalog/modems'  exact render={() => <Modems setResID={setResID}/>}/>
                <Route path='/catalog/modems/:id' render={() => <ModemInfoPage  data={data_modem[resID]}
                                                                                arr={arr}
                                                                                setArr={setArr}
                />}  />

                <Route path='/catalog/termistors'  exact render={() => <Termistors setResID={setResID}/>}/>
                <Route path='/catalog/termistors/:id' render={() => <TermistorInfoPage  data={data_term[resID]}
                                                                                        arr={arr}
                                                                                        setArr={setArr}
                />}  />

                <Route path='/catalog/stabilitrons'  exact render={() => <Stabilitrons setResID={setResID}/>}/>
                <Route path='/catalog/stabilitrons/:id' render={() => <StabilitronInfoPage  data={data_stab[resID]}
                                                                                            arr={arr}
                                                                                            setArr={setArr}
                />}  />

                <Route path='/catalog/diods'  exact render={() => <Diods setResID={setResID}/>}/>
                <Route path='/catalog/diods/:id' render={() => <DiodInfoPage  data={data_diod[resID]}
                                                                              arr={arr}
                                                                              setArr={setArr}
                />}  />

                <Route path='/catalog/drosseli'  exact render={() => <Droseli setResID={setResID}/>}/>
                <Route path='/catalog/drosseli/:id' render={() => <DroseliInfoPage  data={data_dros[resID]}
                                                                                    arr={arr}
                                                                                    setArr={setArr}
                />}  />

                <Route path='/catalog/datchik'  exact render={() => <Datchyki setResID={setResID}/>}/>
                <Route path='/catalog/datchik/:id' render={() => <DatchykyInfoPage  data={data_dros[resID]}
                                                                                    arr={arr}
                                                                                    setArr={setArr}
                />}  />

            </BrowserRouter>
            <Footer/>

        </div>
    )
}

export default App