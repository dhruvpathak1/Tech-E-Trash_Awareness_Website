import React from "react"
import Layout from "../components/layout"
import aboutStyles from "../styles/about.module.scss"
import { Container, Col, Row } from "reactstrap";
import dhruv from "../images/2.jpg"
import shrey from "../images/3.png"
import shivi from "../images/1.jpeg"
import Caro from "../components/carousel"
import img11 from "../images/a10.jpg"
import { Helmet } from "react-helmet"

const AboutPage = () => {
    return(
        <Layout>
        <Helmet title="Tech-E | About Us" defer={false} />
    <div className={aboutStyles.title}></div>
        <Container fluid>
        <Row className={aboutStyles.aboutdiv}>
        <Col sm={12} md={8}>
        <p className={aboutStyles.aboutpara}>We at tech-e-trash are firm believers that E-waste is a growing concern which can be seen by the considerable amount of increase in health hazards because of discharging the toxic materials into the environment. Some goals of our vision at E-Waste are helping e-waste recycling providers in finding businesses and organizations in getting rid of obsolete electronics and safeguard the environment. Aims we would want to achieve with this website are developing appropriate environmental assessment, implementation and monitoring activities related to different waste collection methodologies and the respective benefits to improve current waste management practices.
        </p>
        </Col>
        <Col sm={12} md={4}>
            <img src={img11} alt="inline image" className={aboutStyles.inline} />
        </Col>
        </Row>
        <Row>
                <Col className={aboutStyles.we}>
                <h1 className={aboutStyles.wehead}>Our Missions for the E-Future</h1>
                <p className={aboutStyles.wepoint}> GREEN.</p>
                <p className={aboutStyles.wesubpoint}>Greener Earth is possible</p>
                <p className={aboutStyles.wepoint}> CLEAN.</p>
                <p className={aboutStyles.wesubpoint}>Cleaner environment is necessary</p>
                <p className={aboutStyles.wepoint}> HARMONY.</p>
                <p className={aboutStyles.wesubpoint}>being eurythmic</p>
                <p className={aboutStyles.wepoint}> AUTHENTICITY.</p>
                <p className={aboutStyles.wesubpoint}>Being genuine</p>
                <p className={aboutStyles.wepoint}> SIMPLICITY.</p>
                <p className={aboutStyles.wesubpoint}>Being balanced and subtle</p>
                <p className={aboutStyles.wepoint}> DRIVE.</p>
                <p className={aboutStyles.wesubpoint}> Do what we love</p>
                <p className={aboutStyles.wepoint}> APPRECIATION.</p>
                <p className={aboutStyles.wesubpoint}> Dwell on the good</p>
                </Col>
            </Row>
            <br />
            <br />
            <center>
            <h1 className={aboutStyles.teamhead}>Our Team</h1>
            </center>
            <Row>
                <Col xs={12} md={6}>
                    <center>
                    <img src={shivi} alt="shivi" className={aboutStyles.pplimg}/>
                    </center>
                </Col>
                <Col  xs={12} md={4}>
                    <h1 className={aboutStyles.pplhead}>Shivansh Sharma</h1>
                    <p className={aboutStyles.ppl}>- a inventive, energetic student and a cosmos admirer.</p>
                </Col>
                <Col sm={0} md={2}></Col>
            </Row>   
            <br />
            <hr  className={aboutStyles.hr} />
            <Row>


                <Col xs={12} md={6}>
                    <center>
                    <img src={shrey} alt="shrey" className={aboutStyles.pplimg}/>
                    </center>
                </Col>

                <Col  xs={12} md={4}>
                    <h1 className={aboutStyles.pplhead}>Shrey Thapar</h1>
                    <p className={aboutStyles.ppl}>- a goal-oriented, passionate student and a sports enthusiast.</p>
                </Col>
                <Col sm={0} md={2}></Col>
            </Row>  
            <hr  className={aboutStyles.hr}/>
            <Row>
                <Col xs={12} md={6}>
                    <center>
                    <img src={dhruv} alt="dhruv" className={aboutStyles.pplimg}/>
                    </center>
                </Col>
                <Col  xs={12} md={4}>
                    <h1 className={aboutStyles.pplhead}>Dhruv Pathak</h1>
                    <p className={aboutStyles.ppl}>- a creative,hardworking student and a tech geek.</p>
                </Col>
                <Col sm={0} md={2}></Col>
            </Row>   
             <br />

                <br />
                <div className={aboutStyles.team1}>
                    <h1 className={aboutStyles.teamhead}>Working for our E-FUTURE</h1>
                </div>
 
            </Container>
            
            <div className={aboutStyles.caro}>
                <h1 className={aboutStyles.poster}>Here are a few E-Waste Banners and Posters</h1>
                <Caro></Caro>
            </div>  

        </Layout>
    )
}
export default AboutPage