import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import headerStyles from "./header.module.scss"
import ModalButton from "../components/modal";
import { Container, Row, Col } from "reactstrap";
import logo from "../images/logo_dark.png"

const Header = () => {
  return <div className={headerStyles.body}>

    <Container fluid>

        <Row>

            <Col xs={8} md={11}>
              <img src={logo} height="40" width="50" alt="logo" />
            </Col>
            
            <Col xs={4} md={1} className={headerStyles.buttonCol}> 
            
              <ModalButton buttonLabel="User" className={headerStyles.button} entryMessage="Cancel">

                  <div className={headerStyles.div2}>
                  
                    <ModalButton buttonLabel="Sign Up" entryMessage="Sign Up"  className={headerStyles.button}>
                    <form className={headerStyles.mainform} action="http://localhost/login/signup.php" method="post">  

                      <input className={headerStyles.form} type="text" placeholder="Username" name="username" required />
                      <br />
                      <input className={headerStyles.form} type="email" placeholder="example@example.com" name="email" required />
                      <br />
                      <input className={headerStyles.form} type="number" placeholder="Contact No." name="contact" required />
                      <br />
                      <input className={headerStyles.form} type="name" placeholder="Age" name="age" required />
                      <br />
                      <input className={headerStyles.form} type="password" placeholder="Password" name="passwd" required />
                      <br />
                      <input className={headerStyles.form} type="password" placeholder="Re-enter Password" name="cnfpasswd" required />
                      <br />
                      <br />
                      <hr />

                      <input type="submit" name="signup" className={headerStyles.button1}></input>

                    </form>
                    </ModalButton>

                </div> 


                <div className={headerStyles.div1}>
                
                   <ModalButton buttonLabel="Log In" className={headerStyles.button} entryMessage="Log In">

                    <form className={headerStyles.mainform} action="http://localhost/login/signin.php" method="post">  
                      <input className={headerStyles.form} type="text" placeholder="Username" name="username" required />
                      <br />
                      <input className={headerStyles.form} type="password" placeholder="Password" name="passwd" required />
                      <br />
                      <br />
                      <hr />

                      <input type="submit" name="signin" className={headerStyles.button1}></input>
                    </form>

                    </ModalButton>

                </div>              

              </ModalButton>
            </Col>
          
        </Row>

    </Container>

  </div>
}

export default Header
