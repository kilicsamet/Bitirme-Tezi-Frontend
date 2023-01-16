import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from "../../config";
import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, FormFeedback, Input, Label, Nav, NavItem, Row, TabContent, TabPane, Button } from 'reactstrap';
const Index = () => {
  const [deneme, setDeneme] = useState([]);
  const handlePageChange = async () => {
    const response = await axios.get("https://webapi20224657.azurewebsites.net/api/subeler/");
    setDeneme(response)
  }
  useEffect(() => {
    handlePageChange()
  }, [])
  async function handleAdd(e) {
    const url = "https://webapi20224657.azurewebsites.net/api/subeler/"
    const formData = new FormData(e.target);
    const degerler = [...formData.entries()];
    console.log(degerler);
    const config = {
      headers: {
        "content-encoding": "gzip ",
        "content-type": "application/json; charset=utf-8 "
      }
    }

    axios.post(url, formData, config)
    axios.delete(`https://webapi20224657.azurewebsites.net/api/subeler/${6}`)
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
                        <Link to={"/model-s"} >model-x</Link>
                      </li>
                      <li className="breadcrumb-item active">Model-x Ekle</li>
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
                        <Label htmlFor="name" className="form-label">Şube Adı</Label>
                        <Input type="text" name="SubelerName" className="form-control" id="SubelerName"
                          placeholder=""
                        />
                      </div>
                      <div className="mb-3">
                        <Label htmlFor="phonenumberInput" className="form-label">Şube İli</Label>
                        <Input name="SubelerIl" type="text" className="form-control"
                          id="SubelerIl"
                        />
                      </div>
                      <div className="mb-3">
                        <Label htmlFor="name" className="form-label">Şube Adresi</Label>
                        <Input type="text" name="SubelerAdres" className="form-control" id="SubelerAdres"
                          placeholder=""
                        />
                      </div>
                      <div className="mb-3">
                        <Label htmlFor="phonenumberInput" className="form-label">Şube Telefonu</Label>
                        <Input name="SubelerTelefon" type="text" className="form-control"
                          id="SubelerTelefon"
                        />
                      </div>
                      <div className="mb-3">
                        <Label htmlFor="phonenumberInput" className="form-label">Şube Resim</Label>

                        <Input type="text" name="SubelerImageURL" className="form-control" id="SubelerImageURL"
                        />
                      </div>
                      <div className="hstack gap-2 justify-content-end">
                        <button type="submit" className="btn btn-primary">Ekle</button>
                        <Button type="button" color='danger' className="btn">İptal</Button>
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

export default Index