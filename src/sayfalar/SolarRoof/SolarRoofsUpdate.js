import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from "../../config";
import { ListGroup } from 'reactstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, FormFeedback, Input, Label, Nav, NavItem, Row, TabContent, TabPane, Button } from 'reactstrap';
const SolarRoofsUpdate = () => {
    let { id } = useParams();

    const [solarRoofsDetails, setSolarRoofsDetails] = useState([]);
    const fetchSolarRoofs = async () => {
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
          }
        const response = await axios.get(api.API_URL + "/api/urunler/" + id + "/",config)
        setSolarRoofsDetails(response.data)
    }
    useEffect(() => {
        fetchSolarRoofs();
    }, [])
    let navigate = useNavigate();
    async function handleUpdate(e) {
        const url = api.API_URL + "/api/urunler/" + id
        const formData = new FormData(e.target);
        const config = {
            headers: {
                "content-encoding": "gzip ",
                "content-type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        axios.put(url, formData, config).then(
            navigate('/admin/solar-roof')
        )
    }
    function handleCancel() {
        navigate('/admin/solar-roof')
    }
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <CardBody className="p-4">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0">SOLAR ROOF</h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item">
                                                <Link to={"/admin/solar-roof"} >Solar Roof</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Solar Roof Düzenle</li>
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
                                        handleUpdate(e);

                                    }}>
                                        <Row>

                                            <div className="mb-3">
                                            <Label htmlFor="phonenumberInput" className="form-label">Ürün Adı</Label>
                                                <Input name="UrunlerName" type="select" className="form-control"
                                                    id="UrunlerName"
                                                >
                                                    <option value="Solar Roof">Solar Roof</option>
                                                </Input>
                                            </div>
                                            <div className="mb-3">
                                            <Label htmlFor="name" className="form-label">Müşteri İsmi</Label>
                                                <Input type="text" name="MusteriIsim" className="form-control" id="MusteriIsim"
                                                    placeholder="" defaultValue={solarRoofsDetails[0]?.MusteriIsim}
                                                />

                                            </div>
                                            <div className="mb-3">
                                            <Label htmlFor="name" className="form-label">Müşteri Soyismi</Label>
                                                <Input type="text" name="MusteriSoyisim" className="form-control" id="MusteriSoyisim"
                                                    placeholder="" defaultValue={solarRoofsDetails[0]?.MusteriSoyisim}
                                                />
                                            </div>
                                            <div className="mb-3">
                                            <Label htmlFor="phonenumberInput" className="form-label">Müşteri Adresi</Label>
                                                <Input type="text" name="MusteriAdres" className="form-control" id="MusteriAdres"
                                                    defaultValue={solarRoofsDetails[0]?.MusteriAdres}

                                                />
                                            </div>
                                            <div className="mb-3">
                                            <Label htmlFor="phonenumberInput" className="form-label">Panel Metrekare</Label>
                                                <Input type="text" name="PanelMetrekare" className="form-control" id="PanelMetrekare"
                                                    defaultValue={solarRoofsDetails[0]?.PanelMetrekare}

                                                />
                                            </div>
                                            <div className="mb-3">
                                            <Label htmlFor="phonenumberInput" className="form-label">Fiyat</Label>
                                                <Input type="text" name="Fiyat" className="form-control" id="Fiyat"
                                                    defaultValue={solarRoofsDetails[0]?.Fiyat}

                                                />
                                            </div>
                                            <div className="hstack gap-2 justify-content-end">
                                                <button type="submit" className="btn btn-primary">Düzenle</button>
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

export default SolarRoofsUpdate