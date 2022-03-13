/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'
import Layout from '../components/Layout'
import imgPromo from '../assets/images/spagetti.png'
import Helmets from '../components/Helmets'

const EditPromo = () => {
   const [checked, setChecked] = useState(false)
   const [size,setSize] = useState(null)

   const handleChange = () =>{
      setChecked(!checked)
      console.log(!checked)
      if(!checked){
         document.getElementById('test').setAttribute('class', 'icon-size bg-pallet-1 rounded-circle pps fw-bold d-flex align-items-center justify-content-center text-pallet-3 checked')
         setSize('R')
      } else{
         document.getElementById('test').setAttribute('class', 'icon-size bg-pallet-3 rounded-circle fs-3 pps fw-bold d-flex align-items-center justify-content-center')
         setSize(null)
      }
   }
   const onEdit = (event)=>{
      event.preventDefault()
      const name = event.target.elements['name'].value
      const price = event.target.elements['price'].value
      const description = event.target.elements['description'].value
      const startDate = event.target.elements['startDate'].value
      const endDate = event.target.elements['endDate'].value
      const promoCode = event.target.elements['promoCode'].value
      const discount = event.target.elements['discount'].value
      console.log( size, 'size' )
      const data = { name, price, description, startDate, endDate, promoCode, discount}
      console.log(data)
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
                           <img src={imgPromo} className='img-promo rounded-circle'></img>
                           <div className='icon-edit-img bg-pallet-4 rounded-circle position-absolute bottom-0 end-0 fa-solid fa-pen d-flex align-items-center justify-content-center'></div>
                        </div>
                     </div>
                     <div className='mb-4'>
                        <div className='text-center text-pallet-3 fs-1 fw-bold'>
                           <div className='pps'>Beef Spaghetti</div>
                           <div className='pps'>20% OFF</div>
                        </div>
                     </div>
                     <div className='mb-4'>
                        <div className='pps fs-4 text-pallet-3 text-center mx-5'>Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</div>
                     </div>
                     <div className='mb-4'>
                        <div className='strip-line'></div>
                     </div>
                     <div className=''>
                        <div className='text-pallet-3 fs-4 pps text-center mb-3'>Cuppon Code</div>
                        <div className='text-pallet-3 fs-1 pps text-center fw-bold mb-3'>FNPR15RG</div>
                        <div className='text-pallet-3 fs-5 pps text-center mb-3'>Valid untill October 10th 2020</div>
                     </div>
                  </div>
                  <div className='col-7'>
                     <div  className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Name :</div>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 px-3 fs-5' placeholder='Name' name='name'/>
                     </div>
                     <div  className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Price :</div>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 px-3 fs-5' placeholder='Price' name='price'/>
                     </div>
                     <div  className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Description :</div>
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 px-3 fs-5' placeholder='Description' name='description'/>
                     </div>
                     {/* contoh bootstrap */}
                     <label id='test' name='test' className='icon-size bg-pallet-3 rounded-circle fs-3 pps fw-bold d-flex align-items-center justify-content-center'>
                        <input type='checkbox' checked={checked} onChange={handleChange}/>
                        My value
                     </label>
                     <div> is 'My value' checked? {size}</div>
                     {/* contoh asli */}
                     <div  className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Input Product Size :</div>
                        <div className='rb mb-3 text-muted'>Click product size you want to use for this promo</div>
                        <div className='d-flex justify-content-between mb-5'>
                           <div className='icon-size bg-pallet-3 rounded-circle fs-3 pps fw-bold d-flex align-items-center justify-content-center'>R</div>
                           <div className='icon-size bg-pallet-3 rounded-circle fs-3 pps fw-bold d-flex align-items-center justify-content-center'>L</div>
                           <div className='icon-size bg-pallet-3 rounded-circle fs-3 pps fw-bold d-flex align-items-center justify-content-center'>XL</div>
                           <div className='icon-size bg-pallet-1 rounded-circle pps fw-bold d-flex align-items-center justify-content-center text-pallet-3'>250 gr</div>
                           <div className='icon-size bg-pallet-1 rounded-circle pps fw-bold d-flex align-items-center justify-content-center text-pallet-3'>300 gr</div>
                           <div className='icon-size bg-pallet-1 rounded-circle pps fw-bold d-flex align-items-center justify-content-center text-pallet-3'>500 gr</div>
                        </div>
                        
                     </div>
                     <div  className='mb-4'>
                        <div className='rb fw-bold fs-4 mb-3'>Input delivery methods :</div>
                        <div className='rb mb-3 text-muted'>Click methods you want to use for this promo</div>
                        <div className='row justify-content-between'>
                           <div className='col col-4'>
                              <button className='btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold'>Home Delivery</button>
                           </div>
                           <div className='col col-4'>
                              <button className='btn-pallet-1 w-100 py-3 rounded-1 rb fw-bold'>Dine In</button>
                           </div>
                           <div className='col col-4'>
                              <button className='btn-pallet-3 w-100 py-3 rounded-1 rb fw-bold'>Take away</button>
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
                              <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 fs-5 px-3' placeholder='Enter discount' type='text' name='discount'/>
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
                        <input className='border border-3 border-pallet-1 w-100 py-3 rounded-1 fs-5 px-3' placeholder='Input promo code' type='text' name='promoCode'/>
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