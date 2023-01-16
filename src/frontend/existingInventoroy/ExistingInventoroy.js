import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from "../../config";
import { Card, Col, Row, } from 'reactstrap';
import { Link,useNavigate} from 'react-router-dom';
import logo from "../../assets/images/img/tesla-logo-png-20.png"
import modelss from "../../assets/images/img/modelss.jpg"
import modelxx from "../../assets/images/img/modelxx.jpg"
import model33 from "../../assets/images/img/model33.jpg"
import modelyy from "../../assets/images/img/modelyy.jpg"
import './style.css';
const ExistingInventoroy = () => {
    let navigate = useNavigate();
    const username = "Onursimsek"
    const password = "Abc123456!"
    const [model3, setModel3] = useState([]);
    const [modelX, setModelX] = useState([]);
    const [modelY, setModelY] = useState([]);
    const [modelS, setModelS] = useState([]);
    const [data, setData] = useState([]);
    const [radioButton, setRadioButton] = useState("models");
    const [radioButtonDurum, setRadioButtonDurum] = useState("sifir");
    const [selected, setSelected] = useState(false);
// const deneme="admin.png"
// console.log(deneme.split(".")[0]+"."+deneme.split(".")[1].toUpperCase())
    const handlePageCar = async () => {

        return await axios.post("https://webapi20224657.azurewebsites.net/api/Auth/login", { username, password })
            .then(async user => {
                if (user.data.token) {
                    const { token } = user.data;
                    let config = {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    }
                    const response = await axios.get(api.API_URL + "/api/araclar/", config);
                    setModel3([])
                    setModelX([])
                    setModelY([])
                    setModelS([])
                    setData([])
                    response.data.map((item) => {
                        if (item.AraclarModel === "Model 3") {
                            setModel3(model3 => [...model3, item])
                        }
                        else if (item.AraclarModel === "Model X") {
                            setModelX(modelX => [...modelX, item])
                        }
                        else if (item.AraclarModel === "Model Y") {
                            setModelY(modelY => [...modelY, item])
                        }
                        else if (item.AraclarModel === "Model S") {
                            setModelS(modelS => [...modelS, item])
                            if (item.AraclarDurum == "Sıfır") {
                                setData(data => [...data, item])
                            }
                        }
                    })
                }
                return user.data;
            })
            .catch(err => console.log(err));
    }
    useEffect(() => {
        handlePageCar()
    }, [])
    const filterData = async () => {
        if (radioButton === "models") {
            setData([])
            if (radioButtonDurum === "sifir") {
                const filtered = modelS.filter(model => {
                    return model.AraclarDurum === 'Sıfır';
                });
                setData(filtered)
            }
            else {
                const filtered = modelS.filter(model => {
                    return model.AraclarDurum === 'İkinci El';
                });
                setData(filtered)
            }

        }
        else if (radioButton === "model3") {
            setData([])
            if (radioButtonDurum === "sifir") {
                const filtered = model3.filter(model => {
                    return model.AraclarDurum === 'Sıfır';
                });
                setData(filtered)
            }
            else {
                const filtered = model3.filter(model => {
                    return model.AraclarDurum === 'İkinci El';
                });
                setData(filtered)
            }

        }
        else if (radioButton === "modelx") {
            setData([])
            if (radioButtonDurum === "sifir") {
                const filtered = modelX.filter(model => {
                    return model.AraclarDurum === 'Sıfır';
                });
                setData(filtered)
            }
            else {
                const filtered = modelX.filter(model => {
                    return model.AraclarDurum === 'İkinci El';
                });
                setData(filtered)
            }

        }
        else if (radioButton === "modely") {
            setData([])
            if (radioButtonDurum === "sifir") {
                const filtered = modelY.filter(model => {
                    return model.AraclarDurum === 'Sıfır';
                });
                setData(filtered)
            }
            else {
                const filtered = modelY.filter(model => {
                    return model.AraclarDurum === 'İkinci El';
                });
                setData(filtered)
            }

        }
    }
    useEffect(() => {
        filterData()
    }, [radioButton, radioButtonDurum])


    return (
        <>
            <header className="headers" style={{ top: '20px' }}>
                <Link className="header__left" to={"/"} >
                    <img className="header__logo" src={logo} alt="" />
                </Link>
                <ul className="header__middle">
                    <li className="header__middle_li">
                        <li className="header__middle_li"> <Link to={"/Models-car"} className="header__nav__btn">Model S</Link></li>
                        <li className="header__middle_li"><Link to={"/Model3-car"} className="header__nav__btn">Model 3</Link></li>
                        <li className="header__middle_li"><Link to={"/Modelx-car"} className="header__nav__btn">Model X</Link></li>
                        <li className="header__middle_li"><Link to={"/Modely-car"} className="header__nav__btn">Model Y</Link></li>
                        <li className="header__middle_li"><Link to={"/Solarroof"} className="header__nav__btn">solar roof</Link></li>
                        <li className="header__middle_li"><Link to={"/Solarpanel"} className="header__nav__btn">solar panels</Link></li>
                    </li>
                </ul>

                <div className="header__right">
                    <a className="header__nav__btn" href="#">shop</a>
                    <a className="header__nav__btn" href="#">account</a>
                    <a className="header__nav__btn menu__btn" onClick={()=>{navigate('/login')}}>Giriş Yap</a>
                </div>

            </header>
            <Row style={{ paddingTop: "100px" }}>
                <Col lg={4} className="pt-5 fs-12">
                    <Row>
                        <Col lg={4}>
                            <label htmlFor="">Modeller</label>
                            <div className="form-check m-2">
                                <input className="form-check-input" type="radio" name="model" id="models" checked={radioButton === "models" ? true : false} onChange={() => setRadioButton("models")} />
                                <label className="form-check-label" htmlFor="models">
                                    Model S
                                </label>
                            </div>
                            <div className="form-check m-2">
                                <input className="form-check-input" type="radio" name="model" id="model3" onChange={() => setRadioButton("model3")} />
                                <label className="form-check-label" htmlFor="model3">
                                    Model 3
                                </label>
                            </div>
                            <div className="form-check m-2">
                                <input className="form-check-input" type="radio" name="model" id="modelx" onChange={() => setRadioButton("modelx")} />
                                <label className="form-check-label" htmlFor="modelx">
                                    Model X
                                </label>
                            </div>
                            <div className="form-check m-2">
                                <input className="form-check-input" type="radio" name="model" id="modely" onChange={() => setRadioButton("modely")} />
                                <label className="form-check-label" htmlFor="modely">
                                    Model Y
                                </label>
                            </div>
                        </Col>
                        <Col lg={4} >
                            <label htmlFor="">Durumu</label>
                            <div className="form-check m-2">
                                <input className="form-check-input" type="radio" name="durum" id="sifir" checked={radioButtonDurum === "sifir" ? true : false} onChange={() => setRadioButtonDurum("sifir")} />
                                <label className="form-check-label" htmlFor="sifir">
                                    Sıfır
                                </label>
                            </div>
                            <div className="form-check m-2">
                                <input className="form-check-input" type="radio" name="durum" id="ikinciel" onChange={() => setRadioButtonDurum("ikinciel")} />
                                <label className="form-check-label" htmlFor="ikinciel">
                                    İkinci El
                                </label>
                            </div>
                        </Col>  </Row>

                </Col>
                <Col lg={8} className="pt-5 fs-12">
                    <Row>
                        {data?.map((model, key) => (
                            <Col key={key} lg={6}>
                                <Card>
                                    <div style={{ fontWeight: "bold", display: "flex", justifyContent: "space-between", paddingTop: "5px", paddingLeft: "20px", paddingRight: "20px" }}>
                                        <p> {model.AraclarName}</p>
                                        <p> ${model.AraclarFiyat}</p>
                                    </div>
                                    <div style={{ fontWeight: "normal", display: "flex", justifyContent: "space-between", paddingTop: "5px", paddingLeft: "20px", paddingRight: "20px" }}>
                                        <p> {model.AraclarModel}</p>
                                        <p> $2,118 /mo</p>
                                    </div>
                                    <div style={{ fontWeight: "normal", display: "flex", justifyContent: "space-between", paddingTop: "5px", paddingLeft: "20px", paddingRight: "20px" }}>
                                        <p> {model.AraclarHiz + " mile odometer Available for local delivery in Atlanta"}</p>
                                    </div>
                                    {(() => {
                                        switch (model.AraclarModel) {
                                            case 'Model S':
                                                return <img src={model.AraclarURL?"https://photoswebapi.blob.core.windows.net/pics/"+model.AraclarURL:modelss} alt="" />
                                            case 'Model X':
                                                return <img src={model.AraclarURL?"https://photoswebapi.blob.core.windows.net/pics/"+model.AraclarURL:modelxx}alt="" />
                                            case 'Model Y':
                                                return <img src={model.AraclarURL?"https://photoswebapi.blob.core.windows.net/pics/"+model.AraclarURL:modelyy} alt="" />
                                            case 'Model 3':
                                                return <img src={model.AraclarURL?"https://photoswebapi.blob.core.windows.net/pics/"+model.AraclarURL:model3} alt="" />
                                            default:
                                                return null
                                        }
                                    })()}
                                    
                                    <div style={{ fontWeight: "bold", paddingTop: "5px", paddingLeft: "20px", paddingRight: "20px" }}>
                                        <ul style={{ display: "flex" }}>
                                            <li>
                                                333 mi
                                                Range (est.)
                                            </li>
                                            <li>
                                                333 mi
                                                Range (est.)
                                            </li>
                                            <li>
                                                333 mi
                                                Range (est.)
                                            </li>
                                        </ul>
                                    </div>
                                    <div style={{ fontWeight: "normal", paddingTop: "5px", paddingLeft: "20px", paddingRight: "20px" }}>
                                        <ul >
                                            <li>
                                                Solid Black
                                            </li>
                                            <li>
                                                20'' Cyberstream Wheels
                                            </li>
                                            <li>
                                                All Black Premium Interior with Carbon Fiber Décor
                                            </li>
                                        </ul>
                                    </div>
                                </Card>
                            </Col>


                        ))}

                    </Row>

                </Col>
            </Row>

        </>
    )
}

export default ExistingInventoroy