import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { book, author, id } = data;
  const { img: bookImg, title, about } = book;
  const { img: authorImg, name, pub } = author;

  // Default images for book and author
  const defaultBookImgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV0WxURh4QRU50JJMkKrbIC2Enn77UUqOwKbRb8R-wopOA7Tm2M1jFuVthM3TDyvsWY&usqp=CAU";
  const defaultAuthorImgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV0WxURh4QRU50JJMkKrbIC2Enn77UUqOwKbRb8R-wopOA7Tm2M1jFuVthM3TDyvsWY&usqp=CAU";

  return (
    <>
      <div
        className="col-12 col-md-6 col-lg-6 col-xl-6 flex justify-center card m-2 p-2 main-card"
        style={{ maxWidth: "480px", height: " auto" }}
      >
        <Link to={`/dashboard/details/${id}`} state={{ data }}>
          <div className="row g-0 ">
            <div className="col-md-4 pt-2">
              <img
                src={bookImg || defaultBookImgUrl}
                className="img-fluid  rounded-start"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultBookImgUrl;
                }}
                alt={title || "Book Image"}
              />
            </div>
            <div className="col-md-8 p-2">
              <div className="mb-8 ">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {title || "Title Not Available"}
                </div>
                <p className="text-gray-700 text-base">{about}</p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={authorImg || defaultAuthorImgUrl}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultAuthorImgUrl; // Set default image if author image fails to load
                  }}
                  alt={name || "Author Image"}
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{name || "Author Name"}</p>
                  <p className="text-gray-600">{pub}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
