import React, { useEffect, useRef, useState } from 'react'
import CoffeeLogo from "../assets/images/CoffeeLogo.png"
import { Card, Container, Row, Col, Image, Form } from 'react-bootstrap'
import Button from '../components/Button'
import InputUnderline from '../components/InputUnderline'
// import coffee from '../assets/images/coffee.png'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import NumberFormat from 'react-number-format'
import SizeCard from '../components/SizeCard'
import EmptyInputImage from "../assets/images/empty-input-image.png"
import { addPromo } from '../redux/actions/promo'
import Input from '../components/Input'
import { Navigate } from 'react-router-dom'
import Modals from '../components/ModalsNewPromo'
import http from '../helpers/http'
import { getSize } from '../redux/actions/size'
import Helmets from '../components/Helmets'

const NewPromo = () => {
  const auth = useSelector(state => state.auth)
  const size = useSelector(state => state.size)
  const promo  = useSelector(state => state.promo)
  const tokens = useSelector(state => state.auth)
  const hiddenFileInput = useRef(null)
  const [hourStart, setHourStart] = useState([])
  const [hourEnd, setHourEnd] = useState([])
  const [data, setData] = useState({})
  const [homeDelivery, setHomeDelivery] = useState(false)
  const [dineIn, setDineIn] = useState(false)
  const [takeAway, setTakeAway] = useState(false)
  const [stock, setStock] = useState([])
  const dispatch = useDispatch()
  const [sizeValue, setSizeValue] = useState([]) 
  const navigate = useNavigate() 
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    dispatch(getSize())
    setHourEnd([
      '2022-03-21',
      '2022-03-22',
      '2022-03-23',
      '2022-03-24',
      '2022-03-25',
      '2022-03-26',
    ])
    setHourStart([
      '2022-03-15',
      '2022-03-16',
      '2022-03-17',
      '2022-03-18',
      '2022-03-19',
      '2022-03-20',
    ])
    setStock([10,15,20,25,30,40,50,70,90,100])
    
  }, [])

  const Back = () => {
    navigate(`/product-admin`)
  }

  const handleSizeValueChange = (e) => {
    const elementValue = e.target.previousElementSibling.value
    const tempArray = sizeValue
    if (elementValue) {
      if (sizeValue.indexOf(elementValue) >= 0) {
        tempArray.splice(sizeValue.indexOf(elementValue), 1)
        setSizeValue(tempArray)
      } else {
        setSizeValue([...sizeValue, elementValue])
      }
    }
  }

  const fileInputHandler = (e) => {
    const reader = new FileReader();
    const image = e.target.files[0];

    const productImage = document.querySelector('#product-image');
    reader.readAsDataURL(image);

    reader.onload = (e) => {
      productImage.src = e.target.result;
      productImage.className += ' rounded-circle'
    };

    setData({
        image: e.target.files[0]
      });
    };


    const uploadFile = (e) => {
        e.preventDefault()
        hiddenFileInput.current.click()
      }
      
      const addPromoData = async (e) =>{
        e.preventDefault()
        const inputData = {}
        inputData.name = e.target.elements['name'].value
        inputData.normalPrice = e.target.elements['normalPrice'].value
        inputData.description = e.target.elements['description'].value
        inputData.promoCode = e.target.elements['promoCode'].value
        inputData.dateStart = e.target.elements['dateStart'].value
        inputData.dateEnd = e.target.elements['dateEnd'].value
        inputData.discountValue = e.target.elements['discountValue'].value
        inputData.image = data.image
        dispatch(addPromo(auth.token, inputData))
        // const formData = new FormData()
        // for (const key in inputData) {
        //   formData.append(key, inputData[key]);
        // }
        // const addPromo = await http(auth.token, true).post('/promo', formData) //add promo data    
        
        console.log(addPromo)
        if (addPromo.status === 200) {
          const insertedPromo = addPromo.data.result 
          console.log(insertedPromo.id)     

          // check if sizeValue
          if (sizeValue.length > 0) {
            sizeValue.forEach(async (obj) => {
              const params = new URLSearchParams()
              params.append('idPromo', insertedPromo.id)
              params.append('idSize', obj)
              await http(auth.token).post('/promo_size', params) //add product_size data
            })

            if (homeDelivery) {
              const params = new URLSearchParams()
              params.append('id_promo', insertedPromo.id)
              params.append('id_delivery_type', homeDelivery.id)
              await http(auth.token).post('/promo_delivery_type', params) //add product_delivery_type data
            }
            if (dineIn) {
              const params = new URLSearchParams()
              params.append('id_promo', insertedPromo.id)
              params.append('id_delivery_type', dineIn.id)
              await http(auth.token).post('/promo_delivery_type', params) //add product_delivery_type data
            }
            if (takeAway) {
              const params = new URLSearchParams()
              params.append('id_promo', insertedPromo.id)
              params.append('id_delivery_type', takeAway.id)
              await http(auth.token).post('/promo_delivery_type', params) //add product_delivery_type data
            }
          }
        }
        window.scrollTo(0, 0)
      }
  return (
    <>  
        <Helmets children={"New Promo"} />
        {auth?.id_role === 3 && <Navigate to='/' />}
        {tokens == null && <Navigate to='/' />}
        <NavbarHome/>
        <div className='bg-product bg-gray-100 h-full'>
        <div style={{fontSize:"20px", fontFamily:"Rubik"}} className="text-justify p-auto px-5 mx-5 py-5 nav-text">
            <span >Favorite & Promo {""}</span><span className="text-yellow-800"> {">"} Add New Promo</span>
        </div>
        <Container>
            <Form onSubmit={(e) => addPromoData(e)}>
            {promo.errorMsg &&
              <div className="alert alert-warning fade show" role="alert" aria-label="Close">
                <strong>{promo.errorMsg}</strong>
              </div>
            }
            <Row className='py-3'>
                <Col xl={6} className="px-5 d-flex flex-column justify-content-center">
                    <div className="d-flex flex-column align-items-center">
                        <Image id='product-image' src={EmptyInputImage} alt="product-image" className='img-fluid' roundedCircle style={{ width: '18rem' }}></Image>
                    </div>                    
                    <Button block variant='pallet-2 my-2 radius save-1'> Take a Picture </Button>
                    <Button block variant='pallet-3 radius save-1' onClick={(e) =>uploadFile(e)}> Choose from Gallery </Button>
                    <input type="file"
                      ref={hiddenFileInput}
                      className='d-none'
                      name='image'
                      accept='image'
                      onChange={(e) => fileInputHandler(e)}
                    />
                    <p className='mt-3'>Enter the Discount : </p>
                    <Form.Select name='discountValue' aria-label="Default select example" className='mt-3 form-control radius'>
                        <option className='d-none'>Select Discount</option>
                        { stock.map((obj, idx) => {
                          return (
                            <option key={idx} value={obj}>{obj}</option>
                          )
                        }) }
                    </Form.Select>
                    <p className='mt-3'>Expired Date : </p>
                    <Form.Control name='dateStart' type="date" aria-label="Default select example" className='mt-3 form-control-1 radius w-100 mh-100 p-2' placeholder='Select Start Hour'></Form.Control>
                    <Form.Control name='dateEnd' type="date" aria-label="Default select example" className='mt-3 form-control-1 radius w-100 mh-100 p-2' placeholder='Select End Hour'></Form.Control>
                    <p className='mt-3'>Input coupon code : </p>
                    <Form.Control name="promoCode" aria-label="Default select example" className='mt-3 form-control-1 radius'></Form.Control>
                </Col>
                <Col xl={6}>
                    <Container >
                        <Row className='px-3'>
                            <Col xl={12} >
                                <InputUnderline label="Name :" name="name" placeholder="Type product name min. 50 characters" block version="input-underline px-0 py-4 underline" ></InputUnderline>
                            </Col>
                            <Col xl={12} className="mt-3">
                                <InputUnderline label="Normal Price :" name="normalPrice" placeholder="Type the price" block version="input-underline px-0 py-4 underline" ></InputUnderline>
                            </Col>
                            <Col xl={12} className="mt-3">
                                <InputUnderline label="Description :" name="description" placeholder="Describe your product min. 150 characters" block version="input-underline px-0 py-4 underline" ></InputUnderline>
                            </Col>
                            <Col xl={12}>
                                <h6 className='mt-4 text-new'>Input Product Size: </h6>
                                <p className='mt-3 text-new-1'>Click size you want to use for this product</p>
                            </Col>
                            <Col xl={12} className="d-flex flex-row justify-content-md-between">
                            {
                              size.size.map((obj, idx) => {
                                return (
                                  <div key={idx} className='d-flex flex-column align-items-center' onClick={(e) => handleSizeValueChange(e)}>
                                    <SizeCard className={sizeValue.includes(String(obj.id)) ? 'btn-pallet-1 text-pallet-4' : 'btn-outline-pallet-1'} radioName={obj.label} value={obj.id} />
                                    <SizeCard className={sizeValue.includes(String(obj.id)) ? 'btn-pallet-1 text-pallet-4' : 'btn-outline-pallet-1'} radioName={obj.description} value={obj.id} />
                                  </div>
                                )
                              })
                            }
                            </Col>
                            <Col xl={12}>
                                <h6 className='mt-4 text-new'>Input Delivery Method: </h6>
                                <p className='mt-3 text-new-1'>Click methods you want to use for this product</p>
                            </Col>
                            <Col xl={12} className="d-flex flex-row justify-content-md-between py-3 ml-20 mt-10 space-y-5">
                            <Button variant={homeDelivery.checked ? 'pallet-2' : 'pallet-4'} onClick={(e) => { e.preventDefault(); setHomeDelivery({ id: 7, checked: !homeDelivery.checked }) }} >
                              Home Delivery
                            </Button>
                            <Button variant={dineIn.checked ? 'pallet-2 mx-5' : 'pallet-4 mx-5'} onClick={(e) => { e.preventDefault(); setDineIn({ id: 9, checked: !dineIn.checked }) }} >
                              Dine in
                            </Button>
                            <Button variant={takeAway.checked ? 'pallet-2' : 'pallet-4'} onClick={(e) => { e.preventDefault(); setTakeAway({ id: 8, checked: !takeAway.checked }) }}>
                              Take Away
                            </Button>
                            </Col>
                            <Col xl={12} className="ml-20 mt-5 space-y-5">
                                <Button onClick={() => setModalShow(true)} type='submit' block variant='pallet-2 my-4 radius save-1'> Save Promo </Button>
                                {
                                  !promo.errorMsg &&
                                    <Modals show={modalShow} onHide={() => setModalShow(false)} />
                                }
                                <Button onClick={Back} block variant='pallet-3 my-2 radius save-1'> Cancel </Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            </Form>
        </Container>
        </div>
        <Footer />
    </>
  )
}

export default NewPromo