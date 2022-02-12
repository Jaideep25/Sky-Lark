import React from 'react'
import { Modal } from 'react-bootstrap'
import icon from './assets/icons/favicon.png'
import { FaGithub } from "react-icons/fa"

export default function about(props) {
        return (
            <Modal className="about-modal" {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered >
                <div className="modal-box">
                    <Modal.Header className="modal-head" closeButton></Modal.Header>
                    <Modal.Body className="modal-body">
                        <img alt="SkyLark icon" src={icon} width="100%" height="100%" />
                        <h4>SkyLark</h4>
                        <p>Watch the weather in your city and received hourly forecast, including data of wind, cloudiness, pressure, humidity, time of sunrise and sunset, geo coords on SkyLark React PWA App</p>
                        <div className="social-icons">
                            <a href="https://github.com/Jaideep25" className="icon" target="blank"><FaGithub className="social-icon"/></a>
                        </div>
                        <br/>
                        <h6>Copyright &copy; 2022 | <a href="https://www.github.com/Jaideep25">Jaideep25</a></h6>
                    </Modal.Body>
                </div>
            </Modal>
        );
}
