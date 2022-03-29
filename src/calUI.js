import { Container, Row, Col, Card, Button, Form, Accordion } from 'react-bootstrap';
import { GrClose } from 'react-icons/gr';
import { FaDotCircle } from 'react-icons/fa';
import { BsSliders } from 'react-icons/bs';
import {HiOutlinePencil} from 'react-icons/hi'
import './calculator.css'

function calculator() {
  return (
    <div>

      <Container>
        <Row style={{ marginTop: '30px' }}>
          <Col></Col>
          <Col xs={6} >

            <Card style={{borderRadius:'17px'}}>
            <Container fluid style= {{marginTop : '25px'}}>
                <Row>
                  <Col><h1 className='heading'>Calculator</h1> </Col>
                  <Col></Col>
                  <Col><span className='icon'><GrClose /></span></Col>
                </Row>
              </Container>
              <Row>

                <Col><p className='cake'>
                  <span > <FaDotCircle /> </span>
                  CAKE
                  <span style={{ marginLeft: '5px' }}> <BsSliders /></span>
                  USD </p> </Col>

              </Row>

              <Container fluid style= {{marginTop : '25px'}}>
                <Row>
                  <Form>
                    <Form.Control type="text" className='input' style={{backgroundColor:'#ECECEC'}}/>
                  </Form>
                </Row>
              </Container>

              <Container fluid style={{ marginTop: '20px', MozMarginEnd: '20px' }}>
                <Row>
                  <Col> <Button style={{ backgroundColor: '#FFF9AA', fontSize: '10px', fontFamily: 'Poppins', color: 'black' }} className='yellow txt'>USE BALANCE</Button></Col>
                  <Col><Button className="light" variant="light">$1000</Button></Col>
                  <Col><Button className="light" variant="light">$100</Button></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                </Row>

              </Container>
              <Container fluid style= {{marginTop : '25px'}}>
                <Row>
                  <span className='time'>TimeFrame</span>
                </Row>
              </Container>


              <Container fluid style= {{marginTop : '25px'}}>
                <Row>
                  <Col> <Button style={{ backgroundColor: '#FFF9AA',borderRadius:'17px', fontSize: '10px', fontFamily: 'Poppins', color: 'black' }} className='yellow txt'>1 Days</Button></Col>
                  <Col><Button  style={{borderRadius:'17px'}} className="light" variant="light">7 Days</Button></Col>
                  <Col><Button  style={{borderRadius:'17px'}} className="light" variant="light">30 Days</Button></Col>
                  <Col><Button  style={{borderRadius:'17px'}} className="light" variant="light">1 Year</Button></Col>
                  <Col><Button  style={{borderRadius:'17px'}} className="light" variant="light">5 Years</Button></Col>
                  <Col></Col>
                </Row>
              </Container>




              <Container fluid style= {{marginTop : '25px'}}>
                <Row>
                  <span className='time'>Enable Accelerated APY</span>
                </Row>
              </Container>
              <Container fluid style= {{marginTop : '25px'}}>
                <Row>
                  <span className='time' style={{color:'#A8A8A8'}}> Select Tier</span>
                </Row>
              </Container>


              <Container fluid style= {{marginTop : '25px'}}>
                <Row>
                  <Col> <Button style={{borderRadius:'17px'}} className="light" variant="light">Tier 1</Button></Col>
                  <Col><Button  style={{borderRadius:'17px'}} className="light" variant="light">Tier 2</Button></Col>
                  <Col><Button  style={{borderRadius:'17px'}} className="light" variant="light">Tier 3</Button></Col>
                  <Col><Button  style={{borderRadius:'17px' ,backgroundColor: '#FFF9AA'}} className="light" variant="light">Tier 4</Button></Col>
                  <Col><Button  style={{borderRadius:'17px'}} className="light" variant="light">Tier 5</Button></Col>

                </Row>
              </Container>

              <Container fluid style={{marginTop:'25px'}}>
                <Row>
                  <p style={{ textAlign: 'right' ,color:' #A3A3A3'}}>ROI at current rates</p>
                </Row>
              </Container>


              <Container fluid style= {{marginTop : '5px'}}>
                <Row style={{backgroundColor:'#ECECEC',borderRadius:'30px',height:'60px'}} >
                  {/* <Form>
                    <Form.Control type="text" className='input' style={{backgroundColor:'#ECECEC'}} />
                  </Form> */}
                  <Col ><HiOutlinePencil style={{height:'40px'}} /> </Col>
                  <Col></Col>
                  <Col></Col>
                  <Col><h4 style={{fontSize:'20px',fontFamily:'Poppins',fontWeight:'700', paddingTop: '18px'}}>100.0 USD</h4></Col>
                  <Col></Col>

                </Row>
              </Container>

              <Container fluid style= {{marginTop : '14px'}}>
                <Row>
                  <p style={{ textAlign: 'right' }}> -3CAkE + 10 DON</p>
                </Row>
              </Container>


              <Container fluid style= {{marginTop : '14px'}}>
                <Row>
                  <Col>

                    <div className="d-grid gap-2">
                      <Button variant="dark" size="lg">
                        Apply
                      </Button>
                    </div>

                  </Col>

                  <Col>
                    <div className="d-grid gap-2">
                      <Button variant="outline-secondary" size="lg">
                        Cancel
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>

              <Container fluid style= {{marginTop : '25px'}}>

                <Row>
                  <Col>

                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header > < p style={{ textAlign: 'center' }}>Show Details</p></Accordion.Header>
                        <Accordion.Body>
                         <ul>
                           <li>Calculated Based on current list</li>
                           <li>All figures are estimated provided for your convenience</li>
                         </ul>

                        </Accordion.Body>
                      </Accordion.Item>

                    </Accordion>
                  </Col>
                </Row>

              </Container>




            </Card>

          </Col>
          <Col></Col>
        </Row>

      </Container>

    </div>
  );
}


export default calculator;