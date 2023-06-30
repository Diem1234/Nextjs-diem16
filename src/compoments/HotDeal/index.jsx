import React, { useState } from "react";


function HotDeal({ hotdeal }) {
  const [showAll, setShowAll] = useState(false);
  const displayCount = showAll ? hotdeal.length : 4;

  return (
    <>
    <div className="d-flex justify-content-between">
      <h3 className="justify-content-sm-start mt-2">
          Hot Deal
        </h3>
        {hotdeal && hotdeal.length >= 4 && (
        <div className="text-center mt-2">
          <button
            className="btn btn-outline-warning"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Thu gọn" : "Xem tất cả"}
          </button>
        </div>
      )}</div>
        <hr/>
      <div className="d-flex flex-wrap row-gap-3 mt-5">
        {hotdeal &&
          hotdeal.slice(0, displayCount).map((p) => (
            <div key={p._id} className="">
              {/* <div className="card border-0 shadow" style={{ width: "300px" }}>
                <img
                  src={p.photo}
                  className="card-img-top m-auto"
                  alt="..."
                  width={"200px"}
                  height={"200px"}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    <strong className="float-start">{p.price}</strong>
                    <strong className="float-end">{p.quantity}</strong>
                  </p>
                  <a href="#" className="btn btn-warning mt-3">
                    Go somewhere
                  </a>
                </div>
              </div> */}
              <div className="card1 me-3 mt-4 mb-4">
                <img
                  className="card1-image"
                  src={p.photo}
                />
                <h2 className="card1-title">{p.name}</h2>
                <p className="card1-price">
                  {p.price}<strong className="float-end">{p.quantity} đã bán</strong>
                </p>
                <button className="card1-action text-white"><a href={`/products/${p._id}`}>
                      Add to cart
                    </a></button>
              </div>
            </div>
          ))}
      </div>
      
    </>
  );
}

export default HotDeal;
