import React from 'react';
import Head from 'next/head';

function CategoryAll({categories}) {
  return (
    <>
        <div className="row justify-content-center">
            <h3 className=" d-flex  justify-content-center  justify-content-sm-start mt-5 mb-3 rounded-end-circle ">
            Shop by Department
            </h3>
            {categories && categories.map((p) => (
                <div key={p._id} className="col-2 col-sm-4 col-lg">
                    <a href="#" className="a text-secondary nav-link ">
                    <div className="card border-0">
                        <img
                        src={p.photo}
                        className="card-Image-top border  border-warning rounded-circle m-auto shadow-lg"
                        width={"100px"}
                        height={"100px"}
                        alt="..."
                        />
                        <div className="card-body">
                        <h5 className="card-title text-center">
                            {p.name}
                        </h5>
                        </div>
                    </div>
                    </a>
                </div>
          ))}
          
        </div>
    </>
  );
}

export default CategoryAll;