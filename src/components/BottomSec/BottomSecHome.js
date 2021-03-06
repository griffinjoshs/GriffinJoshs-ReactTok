import React from "react";
import { Jumbotron, Button, Container, Col, Row } from 'react-bootstrap';
import "./styles/BottomSec.css";
// import BottomSecImage from "../BottomSec/BottomSecImage";
import { BiRightArrowCircle } from "react-icons/bi";
import Video from '../Video/Video'
import ButtonComp from '../Button/Button'


// By importing the Header.css file, it is added to the DOM whenever this component loads

function BottomSecHome() {
    return (
        <Container fluid id="bottomSecPic" >
            <Row className="secHeader">
                <Col sm={12} lg={1}></Col>
                <Col sm={12} lg={5} id="secImgCol">
                    <Video/>
                </Col>
                <Col lg={.5}></Col>
                <Col sm={12} lg={5} id="jumbtronColumn">
                    <Jumbotron>
                        <h2>Become an OG!</h2>
                        <br></br>
                        <p>
                            Make sure to Subscribe to my Email List so you can keep up to date of merch drops as well as podcasts, Youtube videos, online courses etc. Get special discounts and deals periodically!
                        </p>
                        <br></br>
                        <p>
                        <ButtonComp>Subscribe <BiRightArrowCircle /></ButtonComp>
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default BottomSecHome;
