import React from 'react'
import editIcon from '../assets/images/edit-icon.png'

const PromoCard = ({isEditable=false, data, image}) => {
  return (
      <div className='shadow container promo-card d-flex flex-column justify-content-around h-100 text-center'>
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
                    <img className='img-fluid edit-icon' src={editIcon} alt='edit' /> 
                </div>
              }
            </div>
          </div>
          <div className='row'>
              <h1>{data?.name}</h1>
              <h1>{data?.discountValue}% OFF</h1>
          </div>
          <div className='row'>
              <p>{data?.description}</p>
          </div>
          <div className='dash-line'></div>
          <div>
            <p>COUPON CODE</p>
            <h1>{data?.promoCode}</h1>
          </div>
          <div>
            <p>Valid until {data?.dateEnd}</p>
          </div>
      </div>
  )
}

export default PromoCard