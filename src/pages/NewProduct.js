import React, { useEffect, useRef, useState } from 'react'
import { Card, Container, Row, Col, Image, Form } from 'react-bootstrap'
import photo from '../assets/images/photo.png'
import NavbarHome from "../components/NavbarHome"
import Footer from "../components/Footer"
import Button from "../components/Button"
import CoffeeLogo from "../assets/images/CoffeeLogo.png"
import EmptyInputImage from "../assets/images/empty-input-image.png"
import InputUnderline from "../components/InputUnderline"
import SizeCard from '../components/SizeCard'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../redux/actions/category'
import { addProduct } from '../redux/actions/product'
import { getSize } from '../redux/actions/size'
import http from '../helpers/http'

const NewProduct = () => {
  const hiddenFileInput = useRef(null)
  const category = useSelector(state => state.category)
  const size = useSelector(state => state.size)
  const auth = useSelector(state => state.auth)
  const [data, setData] = useState({})
  const [homeDelivery, setHomeDelivery] = useState({id:7, checked:false})
  const [dineIn, setDineIn] = useState({id:9, checked:false})
  const [takeAway, setTakeAway] = useState({id:8, checked:false})
  const [hourStart, setHourStart] = useState([])
  const [hourEnd, setHourEnd] = useState([])
  const [stock, setStock] = useState([])
  const dispatch = useDispatch()
  const [sizeValue, setSizeValue] = useState([])

  useEffect(() => {
    dispatch(getCategory())
    dispatch(getSize())
    setHourEnd([
      '00.00',
      '01.00',
      '02.00',
      '03.00',
      '04.00',
      '05.00',
      '06.00',
      '07.00',
      '08.00',
      '09.00',
      '10.00',
      '11.00',
      '12.00',
      '13.00',
      '14.00',
      '15.00',
      '16.00',
      '17.00',
      '18.00',
      '19.00',
      '20.00',
      '21.00',
      '22.00',
      '23.00',
    ])
    setHourStart([
      '00.00',
      '01.00',
      '02.00',
      '03.00',
      '04.00',
      '05.00',
      '06.00',
      '07.00',
      '08.00',
      '09.00',
      '10.00',
      '11.00',
      '12.00',
      '13.00',
      '14.00',
      '15.00',
      '16.00',
      '17.00',
      '18.00',
      '19.00',
      '20.00',
      '21.00',
      '22.00',
      '23.00',
    ])
    setStock([1,2,3,4,5,6,7,8,9,10])
  }, [])

  const handleSizeValueChange = (e)=> {
    const elementValue = e.target.previousElementSibling.value
    const tempArray = sizeValue
    if(elementValue) {
      if(sizeValue.indexOf(elementValue) >= 0){
        tempArray.splice(sizeValue.indexOf(elementValue), 1)
        setSizeValue(tempArray)
      }else{
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
  
  const addProductData = async (e) =>{
    e.preventDefault()
    const inputData = {}
    inputData.name = e.target.elements['name'].value
    inputData.price = e.target.elements['price'].value
    inputData.description = e.target.elements['description'].value
    inputData.stock = e.target.elements['stock'].value
    inputData.delivery_hour_start = e.target.elements['delivery_hour_start'].value
    inputData.delivery_hour_end = e.target.elements['delivery_hour_end'].value
    inputData.id_category = e.target.elements['category'].value
    inputData.image = data.image
    // dispatch(addProduct(auth.token, inputData))
    const formData = new FormData()
    for (const key in inputData) {
      formData.append(key, inputData[key]);
    }
    const addProduct = await http(auth.token, true).post('/product', formData) //add product data

    if(addProduct.status === 200) {
      const insertedProduct = addProduct.data.result

      // check if sizeValue
      if(sizeValue.length>0){
        sizeValue.forEach( async (obj) => {
          const params = new URLSearchParams()
          params.append('idProduct', insertedProduct.id)
          params.append('idSize', obj)
          await http(auth.token).post('/product_size',params) //add product_size data
        })

        if(homeDelivery){
          const params = new URLSearchParams()
          params.append('id_product', insertedProduct.id)
          params.append('id_delivery_type', homeDelivery.id)
          await http(auth.token).post('/product_delivery_type',params) //add product_delivery_type data
        }
        if(dineIn){
          const params = new URLSearchParams()
          params.append('id_product', insertedProduct.id)
          params.append('id_delivery_type', dineIn.id)
          await http(auth.token).post('/product_delivery_type',params) //add product_delivery_type data
        }
        if(takeAway){
          const params = new URLSearchParams()
          params.append('id_product', insertedProduct.id)
          params.append('id_delivery_type', takeAway.id)
          await http(auth.token).post('/product_delivery_type',params) //add product_delivery_type data
        }
      }
    }
  }
  return (
    <>
        <header>
            Header
        </header>
        <div className='bg-product bg-gray-100 h-full'>
        <div style={{fontSize:"20px", fontFamily:"Rubik"}} className="text-justify p-auto px-5 mx-5 py-5 nav-text">
            <span >Favorite & Promo {""}</span><span className="text-yellow-800"> {">"} Cold Brew</span>
        </div>
        <Container>
          <form onSubmit={(e) => addProductData(e)}>
            <Row className='py-3'>
                <Col xl={6} className="px-5 d-flex flex-column justify-content-center">
                  
                    <div className="d-flex flex-column align-items-center">
                        <Image id='product-image' src={EmptyInputImage} alt="product" className='img-fluid' style={{ width: '18em' }}/>
                    </div>               
                    <Button block variant='pallet-2 my-2 radius save-1'> Take a Picture </Button>
                    <Button block variant='pallet-3 my-1 radius save-1' onClick={(e) =>uploadFile(e)}> Choose from Gallery </Button>
                    <input type="file"
                      ref={hiddenFileInput}
                      className='d-none'
                      name='image'
                      accept='image'
                      onChange={(e) => fileInputHandler(e)}
                    />
                    <p className='mt-4'>Delivery Hour : </p>
                    <Form.Select name='delivery_hour_start' aria-label="Default select example" className='mt-3 form-control radius'>
                        <option className='d-none'>Select Start Hour</option>
                        {hourStart.map((obj, idx) => {
                          return (
                            <option key={idx} value={obj}>{obj}</option>
                          )
                        })}
                    </Form.Select>
                    <Form.Select name='delivery_hour_end' aria-label="Default select example" className='mt-3 form-control radius w-100 mh-100 p-2'>
                        <option className='d-none'>Select End Hour</option>
                        {hourEnd.map((obj, idx) => {
                          return (
                            <option key={idx} value={obj}>{obj}</option>
                          )
                        })}
                    </Form.Select>
                    <p className='mt-4'>Input stock : </p>
                    <Form.Select name='stock' aria-label="Default select example" className='mt-3 form-control radius'>
                        <option className='d-none'>Select Stock</option>
                        { stock.map((obj, idx) => {
                          return (
                            <option key={idx} value={obj}>{obj}</option>
                          )
                        }) }
                    </Form.Select>
                    <p className='mt-4'>Category : </p>
                    <Form.Select name='category' aria-label="Default select example" className='mt-3 form-control radius'>
                        <option className='d-none'>Select Category</option>
                        {category.category.map((obj, idx) => {
                          return (
                            <option key={idx} value={obj.id}>{obj.name}</option>
                          )
                        })}
                    </Form.Select>
                </Col>
                <Col xl={6}>
                    <Container className='h-100'>
                        <Row className='h-100 d-flex flex-column justify-content-between px-3'>
                            <Col xl={12} >
                                <InputUnderline label="Name :" name='name' placeholder="Type product name min. 50 characters" block version="input-underline px-0 py-4 underline" ></InputUnderline>
                            </Col>
                            <Col xl={12} className="mt-3">
                                <InputUnderline label="Price :" name='price' placeholder="Type the price" block version="input-underline px-0 py-4 underline" ></InputUnderline>
                            </Col>
                            <Col xl={12} className="mt-3">
                                <InputUnderline label="Description :" name='description' placeholder="Describe your product min. 150 characters" block version="input-underline px-0 py-4 underline" ></InputUnderline>
                            </Col>
                            <Col xl={12}>
                                <h6 className='mt-4 text-new'>Input Product Size: </h6>
                                <p className='mt-3 text-new-1'>Click size you want to use for this product</p>
                            </Col>
                            <Col xl={12} className="d-flex flex-row justify-content-md-between">
                              {
                                size.size.map((obj, idx)=> {
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
                                <Button variant={homeDelivery.checked ? 'pallet-2' : 'pallet-4'} onClick={(e) => {e.preventDefault(); setHomeDelivery({id:7, checked:!homeDelivery.checked})}} >
                                    Home Delivery
                                </Button>
                                <Button variant={dineIn.checked ? 'pallet-2 mx-5' : 'pallet-4 mx-5'} onClick={(e) => {e.preventDefault(); setDineIn({id:9, checked:!dineIn.checked})}} >
                                    Dine in
                                </Button>
                                <Button variant={takeAway.checked ? 'pallet-2' : 'pallet-4'} onClick={(e) => {e.preventDefault(); setTakeAway({id:8, checked:!takeAway.checked})}}>
                                    Take Away
                                </Button>
                            </Col>
                            <Col xl={12} className="ml-20 mt-10 space-y-5">
                                <Button type='submit' block variant='pallet-2 my-4 radius save-1'> Save Product </Button>
                                <Button block variant='pallet-3 my-2 radius save-1'> Cancel </Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            </form>
        </Container>
        </div>
    </>
  )
}

export default NewProduct