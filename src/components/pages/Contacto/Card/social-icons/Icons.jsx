import React from 'react'
import { Container } from 'react-bootstrap'
import './index.css'

const Icons = ({face, tw, ig, github, linkedin}) => {
    return (
        <Container>
            <ul className="wrapper ">
                <a className="icon facebook" href={face} target="_blank">
                    <span className="tooltip">Facebook</span>
                    <span>
                        <i className="fab fa-facebook-f" />
                    </span>
                </a>
                <a className="icon twitter" href={tw} target="_blank">
                    <span className="tooltip">Twitter</span>
                    <span>
                        <i className="fab fa-twitter" />
                    </span>
                </a>
                <a className="icon instagram" href={ig} target="_blank">
                    <span className="tooltip">Instagram</span>
                    <span>
                        <i className="fab fa-instagram" />
                    </span>
                </a>
                <a className="icon github" href={github} target="_blank">
                    <span className="tooltip">Github</span>
                    <span>
                        <i className="fab fa-github" />
                    </span>
                </a>
                <a className="icon linkedin" href={linkedin} target="_blank">
                    <span className="tooltip">Linkedin</span>
                    <span>
                        <i className="fab fa-linkedin" />
                    </span>
                </a>
            </ul>
        </Container>
    )
}

export default Icons
