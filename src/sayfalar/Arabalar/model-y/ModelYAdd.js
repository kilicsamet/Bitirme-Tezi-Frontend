import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from "../../../config";
import { ListGroup } from 'reactstrap';
import { Link,useNavigate } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, FormFeedback, Input, Label, Nav, NavItem, Row, TabContent, TabPane, Button } from 'reactstrap';
const ModelYAdd = () => {
    let navigate = useNavigate();
    async function handleAdd(e) {
        const url = api.API_URL + "/api/araclar/"
        const formData = new FormData(e.target);
        const config = {
            headers: {
                "content-encoding": "gzip ",
                "content-type": "multipart/formdata",
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")

            }
        }
        axios.post(url, formData, config).then(
            navigate('/admin/model-y'))
    }
    function handleCancel() {
        navigate('/admin/model-y')
    }
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <CardBody className="p-4">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0">ARABALAR</h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item">
                                                <Link to={"/admin/model-y"} >model-y</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Model-y Ekle</li>
                                        </ol>
                                    </div>
                                </div>
                            </CardBody>
                        </Col>
                        <Col lg={12}>
                            <Card className="mt-xxl">
                                <CardBody className="p-4">
                                    <form action='' className='needs-validation' name='tenantDetails' onSubmit={(e) => {
                                        e.preventDefault()
                                        handleAdd(e);

                                    }}>
                                        <Row>

                                            <div className="mb-3">
                                                <Label htmlFor="name" className="form-label">Araç Adı</Label>
                                                <Input type="text" name="AraclarName" className="form-control" id="AraclarName"
                                                    placeholder=""
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="phonenumberInput" className="form-label">Araç Model</Label>
                                                <Input name="AraclarModel" type="select" className="form-control"
                                                    id="AraclarModel"
                                                >
                                                    <option value="Model Y">Model Y</option>
                                                </Input>
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="name" className="form-label">Model Yılı</Label>
                                                <Input type="text" name="AraclarYil" className="form-control" id="AraclarYil"
                                                    placeholder=""
                                                />
                                                
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="name" className="form-label">Fiyatı</Label>
                                                <Input type="text" name="AraclarFiyat" className="form-control" id="AraclarFiyat"
                                                    placeholder=""
                                                />
                                                
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="phonenumberInput" className="form-label">Marka</Label>
                                                <Input name="AraclarSeri" type="select" className="form-control"
                                                    id="AraclarSeri"
                                                >
                                                    <option value="Tesla">Tesla</option>
                                                </Input>
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="phonenumberInput" className="form-label">Araç Rengi</Label>
                                                <Input type="text" name="AraclarRenk" className="form-control" id="AraclarRenk"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="phonenumberInput" className="form-label">Araç Durumu</Label>
                                                <Input name="AraclarDurum" type="select" className="form-control"
                                                    id="AraclarDurum"
                                                >
                                                    <option value="Sıfır">Sıfır</option>
                                                    <option value="İkinci El">İkinci El</option>
                                                </Input>
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="phonenumberInput" className="form-label">Araç Hızı</Label>
                                                <Input type="text" name="AraclarHiz" className="form-control" id="AraclarHiz"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="phonenumberInput" className="form-label">Araç Yakıt Türü</Label>
                                                <Input name="AraclarYakit" type="select" className="form-control"
                                                    id="AraclarYakit"
                                                >
                                                    <option value="Elektrik">Elektrikli Araç</option>
                                                </Input>
                                            </div>
                                            <div className="mb-3">
                                                <Label htmlFor="phonenumberInput" className="form-label">Araç Resim</Label>
                                                <Input name="files" type="file" multiple={true} className="form-control"
                                                    id="files"
                                                >
                                                </Input>
                                            </div>
                                            <div className="hstack gap-2 justify-content-end">
                                                <button type="submit" className="btn btn-primary">Ekle</button>
                                                <Button type="button" onClick={handleCancel} color='danger' className="btn">İptal</Button>
                                            </div>


                                        </Row>
                                    </form>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </Container>

            </div>
        </React.Fragment>
    )
}

export default ModelYAdd