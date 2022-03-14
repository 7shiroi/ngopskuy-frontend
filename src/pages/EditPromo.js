/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/Layout'
import Helmets from '../components/Helmets'
import photo from '../assets/images/empty-input-image.png'
import { useDispatch, useSelector } from 'react-redux'
import { editPromo, getPromo, getPromoDeliveryType } from '../redux/actions/promo'
import { useParams } from 'react-router-dom'

const EditPromo = () => {
   const [checked1, setChecked1] = useState(true)
   const [checked2, setChecked2] = useState(true)
   const [checked3, setChecked3] = useState(true)
   const [checked4, setChecked4] = useState(false)
   const [checked5, setChecked5] = useState(false)
   const [checked6, setChecked6] = useState(false)
   const [checked7, setChecked7] = useState(true)
   const [checked8, setChecked8] = useState(false)
   const [checked9, setChecked9] = useState(false)
   const [size1,setSize1] = useState(null)
   const [size2,setSize2] = useState(null)
   const [size3,setSize3] = useState(null)
   const [size4,setSize4] = useState(null)
   const [size5,setSize5] = useState(null)
   const [size6,setSize6] = useState(null)
   const [delivery1, setDelivery1] = useState(null)
   const [delivery2, setDelivery2] = useState(null)
   const [delivery3, setDelivery3] = useState(null)
   const dispatch = useDispatch()
   const promo = useSelector(state=>state.promo)
   const hiddenFileInput = useRef(null)
   const [datas, setDatas] = useState({})

   const handleChange1 = ()=>{
      setChecked1(!checked1)
      if(!checked1){
         setSize1('r')
         document.getElementsByName('sizeR')[0].setAttribute('class', 'icon-size bg-pallet-1 rounded-circle pps fw-bold d-flex align-items-center justify-content-center text-pallet-3 fs-5')
      } else{
         setSize1(null)
         document.getElementsByName('sizeR')[0].setAttribute('class', 'icon-size bg-pallet-3 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center')
      }
   }
   const handleChange2 = ()=>{
      setChecked2(!checked2)
      if(!checked2){
         setSize2('l')
         document.getElementsByName('sizeL')[0].setAttribute('class', 'icon-size bg-pallet-1 rounded-circle pps fw-bold d-flex align-items-center justify-content-center text-pallet-3 fs-5')
      } else{
         setSize2(null)
         document.getElementsByName('sizeL')[0].setAttribute('class', 'icon-size bg-pallet-3 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center')
      }
   }
   const handleChange3 = ()=>{
      setChecked3(!checked3)
      if(!checked3){
         setSize3('xl')
         document.getElementsByName('sizeXL')[0].setAttribute('class', 'icon-size bg-pallet-1 rounded-circle pps fw-bold d-flex align-items-center justify-content-center text-pallet-3 fs-5')
      } else{
         setSize3(null)
         document.getElementsByName('sizeXL')[0].setAttribute('class', 'icon-size bg-pallet-3 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center')
      }
   }
   const handleChange4 = ()=>{
      setChecked4(!checked4)
      if(!checked4){
         setSize4('250gr')
         document.getElementsByName('size250')[0].setAttribute('class', 'icon-size bg-pallet-1 rounded-circle pps fw-bold d-flex align-items-center justify-content-center text-pallet-3 fs-5')
      } else{
         setSize4(null)
         document.getElementsByName('size250')[0].setAttribute('class', 'icon-size bg-pallet-3 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center')
      }
   }
   const handleChange5 = ()=>{
      setChecked5(!checked5)
      if(!checked5){
         setSize5('300gr')
         document.getElementsByName('size300')[0].setAttribute('class', 'icon-size bg-pallet-1 rounded-circle pps fw-bold d-flex align-items-center justify-content-center text-pallet-3 fs-5')
      } else{
         setSize5(null)
         document.getElementsByName('size300')[0].setAttribute('class', 'icon-size bg-pallet-3 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center')
      }
   }
   const handleChange6 = ()=>{
      setChecked6(!checked6)
      if(!checked6){
         setSize6('500gr')
         document.getElementsByName('size500')[0].setAttribute('class', 'icon-size bg-pallet-1 rounded-circle pps fw-bold d-flex align-items-center justify-content-center text-pallet-3 fs-5')
      } else{
         setSize6(null)
         document.getElementsByName('size500')[0].setAttribute('class', 'icon-size bg-pallet-3 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center')
      }
   }
   const handleChange7 = ()=>{
      setChecked7(!checked7)
      if(!checked7){
         setDelivery1('1')
         document.getElementsByName('delivery1')[0].setAttribute('class', 'btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold text-center')
      } else{
         setDelivery1(null)
         document.getElementsByName('delivery1')[0].setAttribute('class', 'btn-pallet-3 w-100 py-3 rounded-1 rb fw-bold text-center')
      }
   }
   const handleChange8 = ()=>{
      setChecked8(!checked8)
      if(!checked8){
         setDelivery2('2')
         document.getElementsByName('delivery2')[0].setAttribute('class', 'btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold text-center')
      } else{
         setDelivery2(null)
         document.getElementsByName('delivery2')[0].setAttribute('class', 'btn-pallet-3 w-100 py-3 rounded-1 rb fw-bold text-center')
      }
   }
   const handleChange9 = ()=>{
      setChecked9(!checked9)
      if(!checked9){
         setDelivery3('3')
         document.getElementsByName('delivery3')[0].setAttribute('class', 'btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold text-center')
      } else{
         setDelivery3(null)
         document.getElementsByName('delivery3')[0].setAttribute('class', 'btn-pallet-3 w-100 py-3 rounded-1 rb fw-bold text-center')
      }
   }
   const {id} = useParams()

   useEffect(()=>{
      dispatch(getPromo(id))
      dispatch(getPromoDeliveryType(id))
      // if(promo){
      //    if(promo.deliveType[0] === 10){
      //       setChecked1(true)
      //    } else{
      //       setChecked1(false)
      //    }
      // }
   },[])

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

   const onEdit = (event)=>{
      event.preventDefault()
      const name = event.target.elements['name'].value
      const normalPrice = event.target.elements['price'].value
      const description = event.target.elements['description'].value
      const dateStart = event.target.elements['startDate'].value
      const dateEnd = event.target.elements['endDate'].value
      const promoCode = event.target.elements['promoCode'].value
      const discountValue = event.target.elements['discount'].value
      const image = datas.image
      const data = {name, normalPrice, description, dateStart, dateEnd, promoCode, discountValue, image}
      const token = window.localStorage.getItem('token')
      console.log(data)
      dispatch(editPromo( token,id, data))
   }
  return (
     <Layout>
        <Helmets children={'Edit Promo'}/>
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
            <form onSubmit={onEdit}>
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
                     <div  className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Name :</div>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 px-3 fs-5' placeholder={promo.promo.name} name='name'/>
                     </div>
                     <div  className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Price :</div>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 px-3 fs-5' placeholder={promo.promo.normal_price} name='price'/>
                     </div>
                     <div  className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Description :</div>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 px-3 fs-5' placeholder={promo.promo.description} name='description'/>
                     </div>
                     <div  className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Input Product Size :</div>
                        <div className='rb mb-3 text-muted'>Click product size you want to use for this promo</div>
                        <div className='d-flex justify-content-between mb-5'>
                           <label name='sizeR' className={checked1? 'icon-size bg-pallet-1 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center text-pallet-3' : 'icon-size bg-pallet-3 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center'}>
                              <input type='checkbox' checked={checked1} onChange={handleChange1} />
                              R
                           </label>
                           <label name='sizeL' className={checked2? 'icon-size bg-pallet-1 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center text-pallet-3' : 'icon-size bg-pallet-3 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center'}>
                              <input type='checkbox' checked={checked2} onChange={handleChange2} />
                              L
                           </label>
                           <label name='sizeXL' className={checked3? 'icon-size bg-pallet-1 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center text-pallet-3' : 'icon-size bg-pallet-3 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center'}>
                              <input type='checkbox' checked={checked3} onChange={handleChange3} />
                              XL
                           </label>
                           <label name='size250' className={checked4? 'icon-size bg-pallet-1 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center text-pallet-3' : 'icon-size bg-pallet-3 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center'}>
                              <input type='checkbox' checked={checked4} onChange={handleChange4} />
                              250 gr
                           </label>
                           <label name='size300' className={checked5? 'icon-size bg-pallet-1 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center text-pallet-3' : 'icon-size bg-pallet-3 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center'}>
                              <input type='checkbox' checked={checked5} onChange={handleChange5} />
                              300 gr
                           </label>
                           <label name='size500' className={checked6? 'icon-size bg-pallet-1 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center text-pallet-3' : 'icon-size bg-pallet-3 rounded-circle fs-5 pps fw-bold d-flex align-items-center justify-content-center'}>
                              <input type='checkbox' checked={checked6} onChange={handleChange6} />
                              500gr
                           </label>
                        </div>
                        
                     </div>
                     <div  className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Input delivery methods :</div>
                        <div className='rb mb-3 text-muted'>Click methods you want to use for this promo</div>
                        <div className='row justify-content-between'>
                           <div className='col col-4'>
                              <label name='delivery1' className={checked7? 'btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold text-center': 'btn-pallet-3 w-100 py-3 rounded-1 rb fw-bold text-center'}>
                                 <input type='checkbox' checked={checked7} onChange={handleChange7}/>
                                 Home Delivery
                              </label>
                           </div>
                           <div className='col col-4'>
                              <label name='delivery2' className={checked8? 'btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold text-center': 'btn-pallet-3 w-100 py-3 rounded-1 rb fw-bold text-center'}>
                                 <input type='checkbox' checked={checked8} onChange={handleChange8}/>
                                 Dine In
                              </label>
                           </div>
                           <div className='col col-4'>
                              <label name='delivery3' className={checked9? 'btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold text-center': 'btn-pallet-3 w-100 py-3 rounded-1 rb fw-bold text-center'}>
                                 <input type='checkbox' checked={checked9} onChange={handleChange9}/>
                                 Take away
                              </label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='row justify-content-between'>
                  <div className='col-4'>
                     <div  className='my-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Expired Date :</div>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 px-3 fs-5 mb-4' placeholder='Start Date' type='date' name='startDate'/>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 px-3 fs-5' placeholder='Start Date' type='date' name='endDate'/>
                     </div>
                  </div>
                  <div className='col-7 d-flex align-items-end'>
                     <div className='col-6 '>
                        <div  className='my-4'>
                           <div className='rb fw-bold fs-4 mb-4'>Enter the discount :</div>
                           <div className='position-relative d-flex align-items-center'>
                              <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 fs-5 px-3' placeholder={promo.promo.discount_value} type='text' name='discount'/>
                              <div className='fa-solid fa-chevron-down fs-2 fw-bold position-absolute end-0 px-3'></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
               </div>
               <div className='row justify-content-between mb-5'>
                  <div className='col-4'>
                     <div  className=''>
                        <div className='rb fw-bold fs-4 mb-3'>Input Promo Code :</div>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 fs-5 px-3' placeholder={promo.promo.promo_code} type='text' name='promoCode'/>
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