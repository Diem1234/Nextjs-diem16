import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from 'swiper';


function FlashSale({flashsale}) {
  return (
    <>
    <Swiper
      spaceBetween={0}
      slidesPerView={4}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className='p-3 bg-warning-subtle'
    >
  <div className="row justify-content-center">
        {flashsale &&
          flashsale.map((p) => (
            <SwiperSlide key={p._id} className="col-3 col-sm-4 col-lg mb-2 m-3">
                <div className="card border-0 shadow" style={{ width: "300px" }}>
                  <img src={p.photo} className="card-img-top m-auto" alt="..." width={"200px"} height={"200px"} />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                        <strong className='float-start'>{p.price}</strong>
                        <strong className='float-end'><span class="badge text-bg-danger">Giảm: {p.discount}%</span></strong>
                    </p>
                    <a href={`/products/${p._id}`} className="btn btn-warning mt-3">
                      Add to cart
                    </a>
                  </div>
                </div>
            </SwiperSlide>
          ))}
      </div>
      {/* {gallerys.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img className="imgswiper" src={slide.urlImage} alt={slide.name} width={"100%"} height={"420px"} />
        </SwiperSlide>
      ))} */}
    </Swiper>
      {/* <div className="row justify-content-center">
        {flashsale &&
          flashsale.map((p) => (
            <div key={p._id} className="col-3 col-sm-4 col-lg mb-2">
                <div className="card border-0 shadow" style={{ width: "300px" }}>
                  <img src={p.photo} className="card-img-top m-auto" alt="..." width={"200px"} height={"200px"} />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                        <strong className='float-start'>{p.price}</strong>
                        <strong className='float-end'>{p.discount}</strong>
                    </p>
                    <a href="#" className="btn btn-warning mt-3">
                      Go somewhere
                    </a>
                  </div>
                </div>
            </div>
          ))}
      </div> */}
    </>
  );
}

export default FlashSale;