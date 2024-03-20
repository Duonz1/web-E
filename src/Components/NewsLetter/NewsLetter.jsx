import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Nhận Mã Giảm Giá Qua Email</h1>
            <p>Đăng Ký Để Nhận Mã Giảm Giá Và Các Chương Trình Khuyến Mại</p>
            <div>
                <input type="email" placeholder='Nhập Email' />
                <button>Đăng Ký</button>
            </div>
        </div>
    )
}

export default NewsLetter
