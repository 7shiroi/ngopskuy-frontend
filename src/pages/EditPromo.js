/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react'
import Layout from '../components/Layout'
import Helmets from '../components/Helmets'
import photo from '../assets/images/empty-input-image.png'
import { useDispatch, useSelector } from 'react-redux'
import { editPromo, getPromo, getPromoDeliveryType } from '../redux/actions/promo'
import { getSize } from '../redux/actions/size'
import SizeCard from '../components/SizeCard'
import http from '../helpers/http'
import { useParams, Navigate } from 'react-router-dom'

const EditPromo = () => {
   const [delivery1, setDelivery1] = useState({ id: 7, checked: false })
   const [delivery2, setDelivery2] = useState({ id: 9, checked: false })
   const [delivery3, setDelivery3] = useState({ id: 8, checked: false })
   const [sizeValue, setSizeValue] = useState([])
   const dispatch = useDispatch()
   const promo = useSelector(state => state.promo)
   const size = useSelector(state => state.size)
   const auth = useSelector(state => state.auth)
   console.log(auth)
   const hiddenFileInput = useRef(null)
   const [datas, setDatas] = useState({})

   const handleChange7 = () => {
      setDelivery1({ id: 7, checked: !delivery1.checked })
      if (delivery1.checked) {
         document.getElementsByName('delivery1')[0].setAttribute('class', 'btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold text-center')
      } else {
         document.getElementsByName('delivery1')[0].setAttribute('class', 'btn-pallet-3 w-100 py-3 rounded-1 rb fw-bold text-center')
      }
   }
   const handleChange8 = () => {
      setDelivery2({ id: 9, checked: !delivery2.checked })
      if (delivery2.checked) {
         document.getElementsByName('delivery2')[0].setAttribute('class', 'btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold text-center')
      } else {
         document.getElementsByName('delivery2')[0].setAttribute('class', 'btn-pallet-3 w-100 py-3 rounded-1 rb fw-bold text-center')
      }
   }
   const handleChange9 = () => {
      setDelivery3({ id: 7, checked: !delivery3.checked })
      if (delivery3.checked) {
         document.getElementsByName('delivery3')[0].setAttribute('class', 'btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold text-center')
      } else {
         document.getElementsByName('delivery3')[0].setAttribute('class', 'btn-pallet-3 w-100 py-3 rounded-1 rb fw-bold text-center')
      }
   }
   const { id } = useParams()

   useEffect(() => {
      dispatch(getSize())
      dispatch(getPromo(id))
      dispatch(getPromoDeliveryType(id))
      // if(promo){
      //    if(promo.deliveType[0] === 10){
      //       setChecked1(true)
      //    } else{
      //       setChecked1(false)
      //    }
      // }
   }, [])

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

      const productImage = document.querySelector('#promo-image');
      reader.readAsDataURL(image);

      reader.onload = (e) => {
         productImage.src = e.target.result;
         productImage.className += 'img-promo rounded-circle'
      };
      setDatas({
         image: e.target.files[0]
      });
   };

   const uploadFile = (e) => {
      e.preventDefault()
      hiddenFileInput.current.click()
   }

   const onEdit = async (event) => {
      event.preventDefault()
      const name = event.target.elements['name'].value
      const normalPrice = event.target.elements['price'].value
      const description = event.target.elements['description'].value
      const dateStart = event.target.elements['startDate'].value
      const dateEnd = event.target.elements['endDate'].value
      const promoCode = event.target.elements['promoCode'].value
      const discountValue = event.target.elements['discount'].value
      const image = datas.image
      const data = { name, normalPrice, description, dateStart, dateEnd, promoCode, discountValue, image }

      const inputData = new FormData()
      for (const key in data) {
         inputData.append(key, data[key]);
      }
      const editPromoData = await http(auth.token, true).patch(`promo/${id}`, inputData)

      if (editPromoData.status === 200) {
         sizeValue.forEach(async (obj) => {
            const params = new URLSearchParams()
            params.append('id_promo', id)
            params.append('id_size', obj)
            await http(auth.token).post('/promo_size', params) //add product_size data
         })

         if (delivery1) {
            const params = new URLSearchParams()
            params.append('idPromo', id)
            params.append('idDeliveryType', delivery1.id)
            await http(auth.token).post('/promo_delivery_type', params) //add product_delivery_type data
         }
      }
   }
   return (
      <Layout>
         <Helmets children={'Edit Promo'} />
         {auth?.userData.id_role === 3 && <Navigate to='/' />}
         {auth.token == null && <Navigate to='/' />}
         <div className='container'>
            <div className='row py-3 mb-4'>
               <div className='col'>
                  <div className='d-flex align-items-center'>
                     <div className=' me-1 rb fs-5'>Favorite & Promo</div>
                     <div className='fa-solid fa-chevron-right me-1'></div>
                     <div className=' me-1 rb fw-bold fs-5 text-pallet-1'>Edit promo</div>
                  </div>
               </div>
               <div className='col-auto'>
                  <div className='d-flex align-items-center'>
                     <div className='rb fw-bold fs-5 text-pallet-1'>Cancel</div>
                  </div>
               </div>
            </div>
            <form onSubmit={(e) => onEdit(e)}>
               <div className='row justify-content-between'>
                  <div className='col-4 bg-pallet-1 rounded-1 shadow-dark'>
                     <div className='d-flex justify-content-center'>
                        <div className='d-flex position-relative my-5'>
                           <img src={promo.promo.image || photo} id='promo-image' className='img-promo rounded-circle' ></img>
                           <label className='icon-edit-img bg-pallet-4 rounded-circle position-absolute bottom-0 end-0 fa-solid fa-pen d-flex align-items-center justify-content-center'>
                              <input type='file'
                                 ref={hiddenFileInput}
                                 className='d-none'
                                 name='image'
                                 accept='image'
                                 onChange={(e) => fileInputHandler(e)}
                              />
                           </label>
                        </div>
                     </div>
                     <div className='mb-4'>
                        <div className='text-center text-pallet-3 fs-1 fw-bold'>
                           <div className='pps'>{promo.promo.name}</div>
                           <div className='pps'>{promo.promo.discount_value}% OFF</div>
                        </div>
                     </div>
                     <div className='mb-4'>
                        <div className='pps fs-4 text-pallet-3 text-center mx-5'>{promo.promo.description}</div>
                     </div>
                     <div className='mb-4'>
                        <div className='strip-line'></div>
                     </div>
                     <div className=''>
                        <div className='text-pallet-3 fs-4 pps text-center mb-3'>Cuppon Code</div>
                        <div className='text-pallet-3 fs-1 pps text-center fw-bold mb-3'>{promo.promo.promo_code}</div>
                        <div className='text-pallet-3 fs-5 pps text-center mb-3'>Valid untill {promo.promo.date_end}</div>
                     </div>
                  </div>
                  <div className='col-7'>
                     <div className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Name :</div>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 px-3 fs-5' defaultValue={promo.promo.name} placeholder='Promo name' name='name' />
                     </div>
                     <div className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Price :</div>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 px-3 fs-5' defaultValue={promo.promo.normal_price} placeholder='Normal Price' name='price' />
                     </div>
                     <div className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Description :</div>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 px-3 fs-5' defaultValue={promo.promo.description} placeholder='Promo description' name='description' />
                     </div>
                     <div className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Input Product Size :</div>
                        <div className='rb mb-3 text-muted'>Click product size you want to use for this promo</div>
                        <div className='d-flex justify-content-between mb-5'>
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
                        </div>

                     </div>
                     <div className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Input delivery methods :</div>
                        <div className='rb mb-3 text-muted'>Click methods you want to use for this promo</div>
                        <div className='row justify-content-between'>
                           <div className='col col-4'>
                              <label name='delivery1' className={delivery1.checked ? 'btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold text-center' : 'btn-pallet-3 w-100 py-3 rounded-1 rb fw-bold text-center'}>
                                 <input type='checkbox' checked={delivery1.checked} onChange={handleChange7} />
                                 Home Delivery
                              </label>
                           </div>
                           <div className='col col-4'>
                              <label name='delivery2' className={delivery2.checked ? 'btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold text-center' : 'btn-pallet-3 w-100 py-3 rounded-1 rb fw-bold text-center'}>
                                 <input type='checkbox' checked={delivery2.checked} onChange={handleChange8} />
                                 Dine In
                              </label>
                           </div>
                           <div className='col col-4'>
                              <label name='delivery3' className={delivery3.checked ? 'btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold text-center' : 'btn-pallet-3 w-100 py-3 rounded-1 rb fw-bold text-center'}>
                                 <input type='checkbox' checked={delivery3.checked} onChange={handleChange9} />
                                 Take away
                              </label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='row justify-content-between'>
                  <div className='col-4'>
                     <div className='my-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Expired Date :</div>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 px-3 fs-5 mb-4' placeholder='Start Date' type='date' name='startDate' />
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 px-3 fs-5' placeholder='Start Date' type='date' name='endDate' />
                     </div>
                  </div>
                  <div className='col-7 d-flex align-items-end'>
                     <div className='col-6 '>
                        <div className='my-4'>
                           <div className='rb fw-bold fs-4 mb-4'>Enter the discount :</div>
                           <div className='position-relative d-flex align-items-center'>
                              <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 fs-5 px-3' placeholder='Discount Value' defaultValue={promo.promo.discount_value} type='text' name='discount' />
                              <div className='fa-solid fa-chevron-down fs-2 fw-bold position-absolute end-0 px-3'></div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
               <div className='row justify-content-between mb-5'>
                  <div className='col-4'>
                     <div className=''>
                        <div className='rb fw-bold fs-4 mb-3'>Input Promo Code :</div>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 fs-5 px-3' placeholder={promo.promo.promo_code} type='text' name='promoCode' />
                     </div>
                  </div>
                  <div className='col-7 d-flex align-items-end'>
                     <button className='btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold fs-4' type='submit'>Save change</button>
                  </div>
               </div>
            </form>
         </div>
      </Layout>
   )
}

export default EditPromo