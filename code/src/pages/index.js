import React from "react"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import indexStyles from "../styles/index.module.scss"
import Cards from "../components/card"
import { Container, Col, Row } from "reactstrap";
import logo from "../images/logo.png"
import vid from "../images/ewaste_intro2.mp4"
import c1 from "../images/c1.png"
import c2 from "../images/c2.png"
import c3 from "../images/c3.png"
import { Helmet } from "react-helmet"


const IndexPage = () => (
<Layout>
          <Helmet title="Tech-E | Home" defer={false} />
  <div className={indexStyles.body}>
    <script src="//code.tidio.co/whyxv4noznqerfshwpri9o4bqr6qwwhx.js" async></script>
    <div className={indexStyles.title}>       
    </div>
      <br />
      <br />

    <Container fluid>
      <Row>
        <Col xs={0} md={3}></Col>
        <Col className={indexStyles.col1}>
        <img src={logo} width="60" height="60" alt="logo" />
        <h1 className={indexStyles.intro} data-sal="zoom-in" data-sal-delay="800" data-sal-easing="ease">Welcome to Tech-E Trash</h1>
        <h3 className={indexStyles.intro} data-sal="zoom-in" data-sal-delay="800" data-sal-easing="ease">Understand your E-Waste.</h3>
        <p  className={indexStyles.intropara} data-sal="zoom-in" data-sal-delay="800" data-sal-easing="ease">An e-Waste management venture providing solutions that maximize the value recovery for clients. While also promoting e-waste awareness among businesses and general public and conserving the nature with its tech-based e-waste recycling solutions.</p>
        </Col>
        <Col xs={0} md={3}></Col>
      </Row>
      <Row >
        <Col className={indexStyles.col1}>
            <video className={indexStyles.vid} src={vid} controls/>
        </Col>

      </Row>

      <br />
      <Row className={indexStyles.cards}>

        <Col sm={12} md={4}>
            <Cards src={c1} title="Quick Fundraise" message="Your contribution used locally to help charitable causes and support the organization, Support."/>
        </Col>
        <Col sm={12} md={4}>
            <Cards src={c2} title="Safe and Sustainable" message="Guaranteed that all of your universal waste management is performed safely and responsibly."/>       
        </Col>
        <Col sm={12} md={4}>
            <Cards src={c3} title="Events" message="We work with non-profits, businesses, and other organizations to host community e-waste events."/>        
        </Col>
      </Row>

      <br />
      <Row>
        <Col className={indexStyles.col2}>
            <iframe className={indexStyles.livecount} src='https://www.theworldcounts.com/embed/challenges/18?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14' height='100' width='50%' />
        </Col>
      </Row>

            <Row>
        <Col xs={0} md={3}></Col>
          <Col className={indexStyles.col1}>
          <img src={logo} width="60" height="60" alt="logo" />
          <h1 className={indexStyles.intro} data-sal="fade-in" data-sal-delay="800" data-sal-easing="ease">What is E-Waste?</h1>
          <p  className={indexStyles.intropara} data-sal="zoom-in" data-sal-delay="800" data-sal-easing="ease">E-waste is any electrical or electronic equipment that's been discarded. This includes working and broken items that are thrown in the garbage or donated to a charity reseller like Goodwill. Often, if the item goes unsold in the store, it will be thrown away.
          </p>
        </Col>
        <Col xs={0} md={3}></Col>
      </Row>

      <Row>
        <Col className={indexStyles.wallpaper}>
            <h1 className={indexStyles.quote}>“I only feel angry when I see waste. When I see people throwing away things we could use.”</h1>
             <h1 className={indexStyles.quote1}>– Mother Teresa</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={0} md={3}></Col>
          <Col className={indexStyles.col1}>
          <img src={logo} width="60" height="60" alt="logo" />
          <h1 className={indexStyles.intro} data-sal="fade-in" data-sal-delay="800" data-sal-easing="ease">The Global Challege</h1>
          <p  className={indexStyles.intropara} data-sal="zoom-in" data-sal-delay="800" data-sal-easing="ease">The e-waste problem is of global concern because of the nature of production and disposal of waste in a globalized world. It is difficult to quantify global e-waste amounts, but it is known that large volumes end up in places where proper recycling facilities are not yet established and rudimentary methods are used to recover valuable components while hazardous components are disposed of in often uncontrolled landfills.</p>
        </Col>
        <Col xs={0} md={3}></Col>
      </Row>


    </Container>
    </div>
</Layout>
)

export default IndexPage
