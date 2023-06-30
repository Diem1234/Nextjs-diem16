import Image from 'next/image';
import React from 'react';
import CategoryAll from '../CategoryAll';
import ProductList from '../ProductList';
import FlashSale from './../FlashSale/index';
import Banner from '../Banner';
import HotDeal from '../HotDeal';

function Main({categories, products, flashsale, hotdeal }) {
  return (
    <>
      <div className="container mt-5 " id="depart">
        <div className='mt-5'><Banner/></div>
        <CategoryAll categories={categories}/>
      </div>

      <div className="container" id="weTogether">
      
        <HotDeal hotdeal={hotdeal}/>
        <h3 className=" d-flex  justify-content-center  justify-content-sm-start mt-2 mb-2">
          Flash Sale
        </h3>
        <hr/>
        <FlashSale flashsale={flashsale}/>
        <h3 className=" d-flex  justify-content-center  justify-content-sm-start mt-5 mb-2">
          We are in this together
        </h3>
        <div className="row mt-2">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0">
              <img
                src="https://www.ashleyfurniture.com/on/demandware.static/-/Library-Sites-AshcommSharedLibrary/default/dw7febee45/images/homepage/footer/20200512/MDS_N1b_Footer_DK.jpg"
                className="card-Image-top border-0"
                alt="..."
              />
              <div className="card-body"></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <a href="#" className=" text-secondary nav-link ">
              <div className="card border-0">
                <img
                  src="https://www.ashleyfurniture.com/on/demandware.static/-/Library-Sites-AshcommSharedLibrary/default/dwa6370a3f/images/homepage/footer/20200512/MDS_N1c_Footer_DK.jpg"
                  className="card-Image-top border-0"
                  alt="..."
                />
                <div className="card-body"></div>
              </div>
            </a>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <a href="#" className=" text-secondary nav-link ">
              <div className="card border-0">
                <img
                  src="https://www.ashleyfurniture.com/on/demandware.static/-/Library-Sites-AshcommSharedLibrary/default/dw6f39ef25/images/homepage/footer/20200512/MDS_N1a_Footer_DK.jpg"
                  className="card-Image-top border-0"
                  alt="..."
                />
                <div className="card-body"></div>
              </div>
            </a>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <a href="#" className=" text-secondary nav-link ">
              <div className="card border-0">
                <img
                  src="https://www.ashleyfurniture.com/on/demandware.static/-/Library-Sites-AshcommSharedLibrary/default/dw2ce0442b/images/homepage/footer/20200512/MDS_N1d_Footer_DK.jpg"
                  className="card-Image-top border-0"
                  alt="..."
                />
                <div className="card-body"></div>
              </div>
            </a>
          </div>
        </div>
        <h3 className=" d-flex  justify-content-center  justify-content-sm-start mt-5 mb-2">
          Product List
        </h3>
        <hr/>
        <ProductList products={products}/>
      </div>
    </>
  );
}

export default Main;
