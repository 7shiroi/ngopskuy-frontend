import React from 'react'
import editIcon from '../assets/images/edit-icon.png'
import hazelnut from '../assets/images/hazelnut.png'

const PromoCard = ({ isEditable = false, data, image }) => {
  return (
    <div className='shadow container promo-card bg-pallet-3 d-flex flex-column justify-content-around py-5 text-center'>
      <div className='d-flex justify-content-center'>
        <div className='position-relative promo-image-container'>
          {image &&
            <img className='img-fluid circle-image' src={image} alt='promo' />
          }
          {!image &&
            <div className='no-image circle-image'>No Image</div>
          }
          {isEditable &&
            <div className='edit-icon-container'>
              <img className='img-fluid edit-icon' src={data?.image || editIcon} alt='edit' />
            </div>
          }
        </div>
      </div>
      <div className='row'>
        <h1>{data?.name || "Beef Spaghetti"}</h1>
        <h1>{data?.discountValue || "20"}% OFF</h1>
      </div>
      <div className='row'>
        <p>{data?.description || "Buy 1 Choco Oreo and get 20% off for Beef Spaghetti"}</p>
      </div>
      <div className='dash-line'></div>
      <div>
        <p>COUPON CODE</p>
        <h1>{data?.promoCode || "#JASFI12F21"}</h1>
      </div>
      <div>
        <p>Valid until {data?.dateEnd}</p>
      </div>
    </div>
  )
}

export default PromoCard