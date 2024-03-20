import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

export const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>GIẢM GIÁ</h1>
                <p>Chỉ Dành Cho Sản Phẩm Bán Chạy</p>
                <button>Xem Ngay</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers
