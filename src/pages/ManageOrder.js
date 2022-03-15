import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import Helmets from '../components/Helmets'
import NavbarHome from '../components/NavbarHome'
import coffee from '../assets/images/coffee.png'
import Button from '../components/Button'
import{ AiOutlineArrowUp, AiFillBank} from 'react-icons/ai'
import { FaRegCreditCard } from 'react-icons/fa'
import {GrDeliver} from 'react-icons/gr'

const ManageOrder = () => {
  return (
    <>
        <Helmets children={"Manage Order"} />
        <NavbarHome />
        <div className='bg-order py-5 shadow'>
            <Container>
                <h3 style={{ fontSize: "36px", fontFamily: "Rubik", fontWeight:"700" }} className="title-order mx-4 mt-3">Finish your customer order now.</h3>
                <Row>
                    <Col xl={6} className="g-5 mt-5">
                        <Card className='d-flex flex column  position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom px-5 mx-3 radius'>
                          <div className='py-4 text-center'>
                            <div style={{ fontSize: "24px", fontFamily: "Poppins", fontWeight:"700" }}>Delivery Order</div>
                            <div style={{ fontSize: "16px", fontFamily: "Poppins", fontWeight:"400" }}>for Zulaikha</div>
                          </div>
                          <div className='d-flex flex-row justify-content-between'>
                            <Image src={coffee} alt="product-image" className='img-fluid radius' style={{ width: '5em' }}></Image>
                            <div style={{ fontSize: "16px", fontFamily: "Poppins", fontWeight:"400" }} className='d-flex flex-column text-center'>
                              <p>Hazelnut Latte</p>
                              <p>x 1</p>
                              <p>Regular</p>
                            </div>
                            <div className='mt-5 text-center'>IDR 24.000</div>
                          </div>
                          <div className='d-flex flex-row justify-content-between mt-3'>
                            <Image src={coffee} alt="product-image" className='img-fluid radius' style={{ width: '5em' }}></Image>
                            <div style={{ fontSize: "16px", fontFamily: "Poppins", fontWeight:"400" }} className='d-flex flex-column text-center'>
                              <p>Chicken Fire Wings</p>
                              <p>x 2</p>
                              <p>Spicy</p>
                            </div>
                            <div className='mt-5 text-center'>IDR 24.000</div>
                          </div>
                          <hr/>
                          <div className='d-flex flex-row justify-content-between py-1'>                            
                            <div style={{ fontSize: "16px", fontFamily: "Poppins", fontWeight:"400" }}>SUBTOTAL</div>
                            <div style={{ fontSize: "16px", fontFamily: "Poppins", fontWeight:"400" }}>IDR 24.000</div>
                          </div>
                          <div className='d-flex flex-row justify-content-between py-1'>                            
                            <div style={{ fontSize: "16px", fontFamily: "Poppins", fontWeight:"400" }}>TAX AND FEES</div>
                            <div style={{ fontSize: "16px", fontFamily: "Poppins", fontWeight:"400" }}>IDR 24.000</div>
                          </div>
                          <div className='d-flex flex-row justify-content-between py-1'>                            
                            <div style={{ fontSize: "16px", fontFamily: "Poppins", fontWeight:"400" }}>SHIPPING</div>
                            <div style={{ fontSize: "16px", fontFamily: "Poppins", fontWeight:"400" }}>IDR 24.000</div>
                          </div>
                          <div className='d-flex flex-row justify-content-between py-3'>                            
                            <div style={{ fontSize: "24px", fontFamily: "Poppins", fontWeight:"700" }}>TOTAL</div>
                            <div style={{ fontSize: "24px", fontFamily: "Poppins", fontWeight:"700" }}>IDR 24.000</div>
                          </div>
                        </Card>
                        <div className='text-center'>
                          <Button variant='pallet-2 mt-5 text-center'>Swipe up to see upcoming orders <AiOutlineArrowUp /></Button>
                        </div>                        
                    </Col>                    
                    <Col xl={6} className="g-5 mt-3">
                      <div className='d-flex flex-row justify-content-between mt-3 mx-5 px-2 title-order'>
                        <p style={{ fontSize: "24px", fontFamily: "Poppins", fontWeight:"700" }}>Address details</p>
                        <p>edit</p>
                      </div>                      
                      <Card className='position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom py-2 px-5 mx-5 mt-3 radius'>
                        <div style={{ fontSize: "18px", fontFamily: "Poppins", fontWeight:"700" }} className='py-3'>Delivery to Iskandar Street</div>
                        <hr />
                        <div style={{ fontSize: "18px", fontFamily: "Poppins", fontWeight:"400" }} className='py-3'>Km 5 refinery road oppsite republic road, effurun, Jakarta</div>
                        <hr />
                        <div style={{ fontSize: "18px", fontFamily: "Poppins", fontWeight:"400" }} className='py-3'>+62 81348287878</div>
                      </Card>
                      <div className='d-flex flex-row justify-content-between mt-3 mx-5 px-2 title-order'>
                        <p style={{ fontSize: "24px", fontFamily: "Poppins", fontWeight:"700" }}>Payment Method</p>
                      </div>
                      <Card className='position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom py-2 px-5 mx-5 mt-2 radius'>
                        <div className='d-flex flex-row'>
                          <div className="form-check mt-2">
                            <input className="form-check-input text-pallet-1 " defaultChecked={true} size={30} type="radio" name="gender" id="flexRadioDefault1" />
                            <label className="form-check-label d-flex px-3" for="flexRadioDefault1"><div style={{ backgroundColor:"#DED0C1" }} className='px-3 radius'><FaRegCreditCard /></div> 
                              <p style={{ fontSize: "16px", fontFamily: "Poppins", fontWeight:"400" }} className='px-3'>Card</p>
                            </label>
                          </div>
                        </div>
                        <hr />
                        <div className='d-flex flex-row'>
                          <div class="form-check">
                            <input class="form-check-input text-pallet-1 " defaultChecked={true} size={30} type="radio" name="gender" id="flexRadioDefault1" />                            
                            <label class="form-check-label d-flex px-3" for="flexRadioDefault1"><div style={{ backgroundColor:"#DED0C1" }} className='px-3 radius'><AiFillBank /></div>
                              <p style={{ fontSize: "16px", fontFamily: "Poppins", fontWeight:"400" }} className='px-3'>Bank Account</p>
                            </label>
                          </div>
                        </div>
                        <hr />
                        <div className='d-flex flex-row'>
                          <div class="form-check">
                            <input class="form-check-input text-pallet-1 " defaultChecked={true} size={30} type="radio" name="gender" id="flexRadioDefault1" />
                            <label class="form-check-label d-flex px-3" for="flexRadioDefault1"><div style={{ backgroundColor:"#DED0C1" }} className='px-3 radius'><GrDeliver /></div>
                              <p style={{ fontSize: "16px", fontFamily: "Poppins", fontWeight:"400" }} className='px-3'>Cash on Delivery</p>
                            </label>
                          </div>
                        </div>
                      </Card>
                      <div className='text-center mt-4'>
                        <Button variant='pallet-3'>Mark as done</Button>
                      </div>
                      
                    </Col>
                </Row>
            </Container>
        </div>

    </>
  )
}

export default ManageOrder