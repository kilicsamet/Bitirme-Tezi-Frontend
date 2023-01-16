import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from "../../../config";
import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Card, CardBody, Modal, ModalBody, ModalHeader, Col, Container, FormFeedback, Input, Label, Nav, NavItem, Row, TabContent, TabPane, Button } from 'reactstrap';
import TableContainer from "../../../Components/TableContainer";
import FeatherIcon from 'feather-icons-react';
const Index = () => {
  const [modelX, setModelX] = useState([]);
  const [deleteMethod, setDeleteMethod] = useState(false);
  const [modelXDefault, setModelXDefault] = useState([]);
  const [search, setSearch] = useState('');
  const handlePageChange = async () => {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      }
    }
    const response = await axios.get(api.API_URL + "/api/araclar/",config);
    setModelX([])
    setModelXDefault([])
    response.data.map((item) => {
      if (item.AraclarModel === "Model X") {
        setModelX(modelX => [...modelX, item])
        setModelXDefault(modelXDefault => [...modelXDefault, item])
      }
    })
  }
  useEffect(() => {
    handlePageChange()
  }, [])
  const [modal_animationZoom, setmodal_animationZoom] = useState(false);
  const [arac, setArac] = useState([]);
  const tog_animationZoom = (arac) => {
    setmodal_animationZoom(!modal_animationZoom);
    setArac(arac)
  }
  const aracSil = async () => {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      }
    }
    setmodal_animationZoom(!modal_animationZoom);
    await axios.delete(api.API_URL + `/api/araclar/${arac.AraclarID}`,config)
    setDeleteMethod(deleteMethod + 1)
  }
  useEffect(() => {
    handlePageChange()
  }, [deleteMethod])
  useEffect(() => {
    const newFiltredData = modelXDefault.filter((item) => {
      return item.AraclarName.toLowerCase().includes(search.toLowerCase())
    })
    setModelX(newFiltredData)
  }, [search])
  const columns = [
    {
      Header: "Araba Adı",
      accessor: "AraclarName",
      filterable: false,
    },
    {
      Header: "Araba Modeli",
      accessor: "AraclarModel",
      filterable: false,
    },
    {
      Header: "Araba Model Yılı",
      accessor: "AraclarYil",
      filterable: false,
    },
    {
      Header: "Araba Fiyatı",
      accessor: "AraclarFiyat",
      filterable: false,
    },

    {
      Header: "Eylem",
      Cell: (cellProps) => {
        return (
          <div className="btn-group">
            <div className='hstack gap-2 justify-content-end'>
              <Link to={"/admin/model-x-update/" + cellProps.row.original.AraclarID} className="fw-medium link-primary"><FeatherIcon size={12} color={'success'} icon="eye" /></Link>
              <Button onClick={() => tog_animationZoom(cellProps.row.original)} className='btn btn-soft-danger btn-sm'><FeatherIcon size={12} icon="trash-2" /></Button>
            </div>
          </div>
        );
      },
    },
  ]
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
                        <Link to={"/admin/model-x"} >Arabalar</Link>
                      </li>
                      <li className="breadcrumb-item active">Model-x</li>
                    </ol>
                  </div>
                </div>
              </CardBody>
            </Col>
            <div className="col-xl-12 col-lg-12">
              <div>
                <div className="card">
                  <div className="card-header border-0">
                    <div className="row g-4">
                      <div className="col-sm">
                        <div className="d-flex justify-content-sm-start">
                          <div className="search-box ms-2">
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => setSearch(e.target.value.trim())}
                              placeholder="Araba Arama"
                            />
                            <i className="ri-search-line search-icon"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-auto">
                        <div>
                          <Link
                            to="/admin/model-x-add/"
                            className="btn btn-success"
                          >
                            <i className="ri-add-line align-bottom me-1"></i> Model-x Ekle
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="card-body">
                    <TabContent className="text-muted">
                      <TabPane>
                        <div
                          id="table-user-list-all"
                          className="table-card gridjs-border-none pb-2"
                        >
                          <div>
                            <TableContainer
                              columns={columns}
                              data={modelX}
                              isGlobalFilter={false}
                              isAddVatList={false}
                              customPageSize={50}
                              divClass="table-responsive mb-1"
                              tableClass="mb-0 align-middle table-borderless"
                              theadClass="table-light text-muted"
                            />
                            <div style={{ display: 'flex', justifyContent: 'right' }}>
                            </div>
                          </div>
                        </div>
                      </TabPane>
                    </TabContent>
                  </div>
                </div>
              </div>
            </div>


            <Modal id="flipModal" isOpen={modal_animationZoom} toggle={() => { tog_animationZoom(); }} modalClassName="zoomIn" centered >
              <ModalHeader className="modal-title" id="flipModalLabel" toggle={() => { tog_animationZoom(); }}>
                Araba Sil
              </ModalHeader>
              <ModalBody>
                <p className="text-muted">Bu veriyi silmek istediğinize emin misiniz?</p>
              </ModalBody>
              <div className="modal-footer">
                <Button color="light" onClick={() => { tog_animationZoom() }}>Hayır </Button>
                <Button color="primary" onClick={() => aracSil()} > Evet </Button>
              </div>
            </Modal>
          </Row>
        </Container>

      </div>
    </React.Fragment>
  )
}

export default Index