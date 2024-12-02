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
        <Col md={{span: 8, offset: 2}} xs={12} className='app-wrapper d-flex flex-column align-items-center'>
          <App />
          <img src="/skibidi chill guy.png" alt="chill guy wearing skibidi rizz bomb tshirt. Only £1!" className='skibidi-img' />
        </Col>
        <Col md={{span: 2, offset: 10}} xs={12} className='d-none d-md-block subway-img-wrapper '>
          <img src="https://i.makeagif.com/media/7-02-2023/4DRkyD.gif" alt="subway surfer content" className='subway-img sir mx-auto'></img>
        </Col>
      </Row>
    </React.StrictMode>,
    document.getElementById('root')
);