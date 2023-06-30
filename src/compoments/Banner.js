import React from 'react'
import ProductGallery from './ProductGallery/ProductGallery/ProductGallery'


const Banner = () => {
  return (
    <div className='row p-3 mt-5'>
        <div className='col-md-5 p-3 m-5 shadow'>
            <h1><strong>Chào mừng bạn đến với COSMETIC!!</strong></h1>
            <p>Mỹ phẩm là những sản phẩm được sử dụng để làm đẹp và chăm sóc da, tóc và móng tay. 
            </p>
            <h4>Giới thiệu</h4>
            <p>Trong thời đại hiện nay, mỹ phẩm trở thành một phần không thể thiếu trong cuộc sống của phụ nữ và ngay cả nam giới. Các sản phẩm mỹ phẩm có thể giúp cải thiện vẻ ngoài của chúng ta, tăng cường tự tin và cảm giác thoải mái trong giao tiếp.</p>
        </div>
        <div className='col-md-6 mt-3 shadow p-4'>
            <ProductGallery/>
        </div>
    </div>
  )
}

export default Banner