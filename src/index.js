import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Col, Row } from 'react-bootstrap';

ReactDOM.render(
    <React.StrictMode>
      <Row>
        <Col md={2} xs={12} className='d-none d-md-block subway-img-wrapper'>
          <img src="https://i.giphy.com/dkUtjuBEdICST5zG7p.webp" alt="subway surfer content" className='subway-img sil mx-auto'></img>
        </Col>
        <Col md={8} xs={12} className='app-wrapper d-flex align-items-center'>
          <App />
        </Col>
        <Col md={2} xs={12} className='d-none d-md-block subway-img-wrapper'>
          <img src="https://i.makeagif.com/media/7-02-2023/4DRkyD.gif" alt="subway surfer content" className='subway-img sir mx-auto'></img>
        </Col>
      </Row>
    </React.StrictMode>,
    document.getElementById('root')
);