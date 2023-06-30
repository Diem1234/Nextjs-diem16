import React, { useState } from 'react';



function ProductList({products}) {
  const itemsPerPage = 4; // số sản phẩm hiển thị trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // trang hiện tại

  // tính toán trang đầu tiên và trang cuối cùng
  const firstItemIndex = (currentPage - 1) * itemsPerPage;
  const lastItemIndex = firstItemIndex + itemsPerPage;
  const displayedProducts = products.slice(firstItemIndex, lastItemIndex);

  // tính toán số lượng trang
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // tạo một mảng các số trang từ 1 đến totalPages
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // xử lý sự kiện khi người dùng chọn trang mới
  const handlePageChange = (event,pageNumber) => {
    event.preventDefault(); // ngăn chặn trình duyệt tải lại trang
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <div>
      <div className="row justify-content-center">
        {displayedProducts.map((p) => (
            <div key={p._id} className="col-3 col-sm-4 col-lg mb-2">
                <div className="card border-0 shadow" style={{ width: "300px" }}>
                  <img src={p.photo} className="card-img-top" alt="..." width={"150px"} height={"200px"} />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                        <strong>{p.price}</strong>
                    </p>
                    <a href={`/products/${p._id}`} className="btn btn-warning">
                      Add to cart
                    </a>
                  </div>
                </div>
            </div>
          ))}
      </div>
      {/* hiển thị thanh phân trang */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
            <a
              className="page-link"
              href="#"
              onClick={(event) => handlePageChange(event,currentPage - 1)}
            >
              Previous
            </a>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${
                currentPage === pageNumber && 'active'
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={(event) => handlePageChange(event,pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages && 'disabled'
            }`}
          >
            <a
              className="page-link"
              href="#"
              onClick={(event) => handlePageChange(event,currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav></div>
    </>
  );
}

export default ProductList;