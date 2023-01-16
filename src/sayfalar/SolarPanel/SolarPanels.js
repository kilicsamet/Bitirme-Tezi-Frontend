import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from "../../config";
import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Card, CardBody, Modal, ModalBody, ModalHeader, Col, Container, FormFeedback, Input, Label, Nav, NavItem, Row, TabContent, TabPane, Button } from 'reactstrap';
import TableContainer from "../../Components/TableContainer";
import FeatherIcon from 'feather-icons-react';
const Index = () => {
  const [solarPanel, setSolarPanel] = useState([]);
  const [deleteMethod, setDeleteMethod] = useState(false);
  const [solarPanelDefault, setSolarPanelDefault] = useState([]);
  const [search, setSearch] = useState('');
  
  const handlePageChange = async () => {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      }
    }
    const response = await axios.get(api.API_URL+"/api/Urunler/",config);
    setSolarPanel([])
    setSolarPanelDefault([])
    response.data.map((item)=>{
      if (item.UrunlerName==="Solar Panel") {
    setSolarPanel(solarPanel=>[...solarPanel,item])
    setSolarPanelDefault(solarPanelDefault=>[...solarPanelDefault,item])
      }
    })
  }
  useEffect(() => {
    handlePageChange()
  }, [])
  const [modal_animationZoom, setmodal_animationZoom] = useState(false);
  const [urun, setUrun] = useState([]);
  const tog_animationZoom = (urun) => {
    setmodal_animationZoom(!modal_animationZoom);
    setUrun(urun)
  }
  const urunSil = async () => {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      }
    }
    setmodal_animationZoom(!modal_animationZoom);
    await axios.delete(api.API_URL+`/api/urunler/${urun.UrunlerID}`,config)
    setDeleteMethod(deleteMethod + 1)
  }
  useEffect(() => {
    handlePageChange()
  }, [deleteMethod])
  useEffect(() => {
    const newFiltredData = solarPanelDefault.filter((item) => {
      return item.UrunlerName.toLowerCase().includes(search.toLowerCase())
    })
    setSolarPanel(newFiltredData)
  }, [search])
  const columns = [
    {
      Header: "Ürün Adı",
      accessor: "UrunlerName",
      filterable: false,
    },
    {
      Header: "Müşteri İsmi",
      accessor: "MusteriIsim",
      filterable: false,
    },
    {
      Header: "Müşteri Soyismi",
      accessor: "MusteriSoyisim",
      filterable: false,
    },
    {
      Header: "Fiyat",
      accessor: "Fiyat",
      filterable: false,
    },

    {
      Header: "Eylem",
      Cell: (cellProps) => {
        return (
          <div className="btn-group">
            <div className='hstack gap-2 justify-content-end'>
              <Link to={"/admin/solar-panel-update/" + cellProps.row.original.UrunlerID} className="fw-medium link-primary"><FeatherIcon size={12} color={'success'} icon="eye" /></Link>
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
                  <h4 className="mb-sm-0">SOLAR PANEL</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to={"/admin/solar-panel"} >Solar Panel</Link>
                      </li>
                      <li className="breadcrumb-item active">Solar Panel</li>
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
                            to="/admin/solar-panel-add/"
                            className="btn btn-success"
                          >
                            <i className="ri-add-line align-bottom me-1"></i> Solar Panel Ekle
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
                              data={solarPanel}
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
                <Button color="primary" onClick={() => urunSil()} > Evet </Button>
              </div>
            </Modal>
          </Row>
        </Container>

      </div>
    </React.Fragment>
  )
}

export default Index