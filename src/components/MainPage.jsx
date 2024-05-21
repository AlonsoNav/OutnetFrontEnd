
import "./MainPage.css";
import Shopping from "../assets/shopping.png";
import QA from "../assets/QA.png";
import Correo from "../assets/correo.png";
import {useNavigate} from "react-router-dom";
import { useState,useEffect } from 'react';
import Numero from "../assets/numero.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { InputGroup, FormControl,Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const MainPage = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    console.log("Producto seleccionado:", search);
    localStorage.setItem('search', JSON.stringify(search));
    // Redireccionar a la vista del producto
    navigate("/products")
  };

  return (
    <Container className="align-items-center justify-content-start" style={{ paddingLeft: '0', marginTop: "100px" }}>
    <Row className="align-items-center" style={{ margin: '0' }}>
      <Col className='md-3'>
        <div className="main-container" style={{ backgroundColor: '#99BA57', borderRadius: '50px', width: '100%', height: "630px" }}>
          <div className="row justify-content-center">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="me-auto">
              <img src={Shopping} alt="" className="img-fluid" />
            </div>
          </div>
            <div className="col-md-6">
            <div className='Texto p-4 m-4' style={{textAlign: 'center' }}>
              <h1 className="display-8"><p className="poppins-regular" style={{ color: "#FFFF" }} htmlFor="nombre">¿Qué necesitas hoy?</p></h1>
              <div className="d-flex justify-content-center align-items-center mb-2">
                <InputGroup >
                    <Button style={{ backgroundColor: "#ffffff", borderColor: "#ffffff" }} aria-label="Buscar productos" onClick={handleClick}>
                        <FaSearch style={{ color: "#99BA57" }} />
                    </Button>
                    <FormControl 
                        placeholder="Busca un producto..." aria-label="Busca un producto..." 
                        aria-describedby="basic-addon2" 
                        value={search}
                        onChange={handleChange}
                    />
                </InputGroup>
              </div>
            </div>
          </div>
          </div>
        </div>
      </Col>
    </Row>
    <Row style={{ marginTop: "35px" }}>
      <Col>
        <div className='InfoContacto me-auto poppins-regular md'>
          <h2>Información de contacto<br />
            <img src={Correo} alt="Descripción de la imagen" style={{ marginRight: '50px' }} />gethelp@outnet.cr<br />
            <img src={Numero} alt="Descripción de la imagen" style={{ marginRight: '50px' }} />(506) 2574-6217
          </h2>
        </div>
      </Col>
      <Col>
        <div className='BotonAyuda lg'>
          <Button className='BotAyuda' style={{borderColor: '#99BA57', backgroundColor: '#99BA57', borderRadius: "20px" }}>
            <div className="row">
              <div className="BtnImagen col">
                <img src={QA} alt="Descripción de la imagen" style={{ marginRight: '50px' }} />
              </div>
              <div className="BtnTxt col poppins-regular" style={{ fontSize: '23px', marginTop: '10px', marginRight: '40px' }}>
                ¿Necesitas ayuda? <br /> Haz click aquí
              </div>
          </div>
          </Button>
          </div>
            
          </Col>
        </Row>
      </Container>

  )
}

export default MainPage