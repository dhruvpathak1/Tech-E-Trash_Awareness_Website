import React from "react"
import footerStyles from "./footer.module.scss"
import { Container, Row, Col } from "reactstrap"
import logo from "../images/logo_dark.png"
import { FaLinkedin,FaGithub,FaRecycle,FaLeaf, FaGlobeAsia } from 'react-icons/fa';
import NavCard from "./navCards"
const Footer = props => {
  return <div>
  <div>
    <Container fluid>
        <Row className={footerStyles.nav}>
      <Col xs={1}></Col>
      <Col sm={6} md={2}>
        <NavCard title="Home" page="/" />
      </Col>
      <Col sm={6} md={2}>
        <NavCard title="Know your Waste" page="/waste" />
      </Col>
      <Col sm={6} md={2}>
        <NavCard title="Journey of a Device" page="/journey" />
      </Col>      
      <Col sm={6} md={2}>
        <NavCard title="Impact of E-Waste" page="/impact" />
      </Col>
      <Col sm={6} md={2}>
        <NavCard title="About Us" page="/about" />
      </Col> 
      <Col xs={1}></Col>
    </Row>

    </Container>
  </div>

  <Container fluid className={footerStyles.body}>

    <Row >
      <Col sm={12} md={4}>

      <h2 className={footerStyles.headers}>Tech <span ><img src={logo} width="50" height="50"/></span> Trash</h2>
      <FaRecycle className={footerStyles.logo}/>
      <FaLeaf className={footerStyles.logo}/>
      <FaGlobeAsia className={footerStyles.logo}/>
      <br />
      <br />
      <p className={footerStyles.para}>Tech-E Trash is a medium to promote and spread awareness about the rising environmental issues caused by the rise in electronic waste.</p><br />

      </Col>
      <Col sm={12} md={4}>
        <h2 className={footerStyles.headers}>Contact Us</h2>
        <form action="https://formspree.io/f/xeqpgdbo" method="POST">
          <input className={footerStyles.form} type="text" name="name" placeholder="David Attenborough" required/><br />
          <input className={footerStyles.form} type="email" name="email" placeholder="example@example.com" required/><br />
          <textarea name="message" rows="3" cols="21" wrap="hard" required placeholder="Message"></textarea><br />
          <input className={footerStyles.submit} type="submit" name="Submit" />
        </form>
      </Col>

      <Col sm={12} md={4}>
        <h2 className={footerStyles.headers}>Project Creators :</h2>
        <ol className={footerStyles.list}>

          <h4 className={footerStyles.h4link}><a target="_blank" className={footerStyles.link} href="https://shivanshsharma.herokuapp.com">Shivansh Sharma </a></h4>

          <a target="_blank" className={footerStyles.logolink} href="https://github.com/shivansh818"><FaGithub className={footerStyles.logo}/></a>
          <a target="_blank" className={footerStyles.logolink} href="https://www.linkedin.com/in/shivansh-sharma-76221a1a9/"><FaLinkedin className={footerStyles.logo}/></a>
      

          <h4 className={footerStyles.h4link}><a target="_blank" className={footerStyles.link} href="https://shreythapar.herokuapp.com">Shrey Thapar</a></h4> 

          <a target="_blank" className={footerStyles.logolink} href="https://github.com/shreythapar"><FaGithub className={footerStyles.logo}/></a>
          <a target="_blank" className={footerStyles.logolink} href="https://www.linkedin.com/in/shrey-thapar-2993051a0/"><FaLinkedin className={footerStyles.logo}/></a>

          <h4 className={footerStyles.h4link}><a target="_blank" className={footerStyles.link} href="https://pathakdhruv.herokuapp.com">Dhruv Pathak</a></h4>  

          <a target="_blank" className={footerStyles.logolink} href="https://github.com/dhruvpathak1"><FaGithub className={footerStyles.logo}/></a>
          <a target="_blank" className={footerStyles.logolink} href="https://www.linkedin.com/in/dhruv-pathak-6ab0a916a/"><FaLinkedin className={footerStyles.logo}/></a>

        </ol>
      </Col>

    </Row>
    <hr className={footerStyles.horz}/>
    <Row>
      <Col className={footerStyles.end}>
        Copyright &copy; 2020, Designed by S.S.D
      </Col>
    </Row>
  </Container>
  </div>
}

export default Footer
