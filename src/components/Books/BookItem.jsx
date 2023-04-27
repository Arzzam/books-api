import React from "react";
import BookImg from "../../assets/defaultBook.png";

const BookItem = ({ id, volumeInfo }) => {
  let { title, authors, publisher, previewLink, imageLinks } = volumeInfo;

  title = title || "Title is not available";
  authors = authors || "Author(s) name not available";
  publisher = publisher || "Publisher company not available";
  previewLink = previewLink || "https://books.google.co.in/";

  return (
    <div
      key={id}
      className="w-60 rounded-2xl my-2 p-4 justify-items-center bg-slate-200 transition ease-in delay-75 duration-100 hover:shadow-lg hover:shadow-slate-500 hover:origin-center hover:scale-[1.02]"
    >
      <div>
        <img
          src={imageLinks ? imageLinks.thumbnail : BookImg}
          alt="Product-img"
          className="w-48 rounded-xl"
        />
      </div>
      <div className="mt-2">
        {title && <h3 className="font-semibold">{title}</h3>}
        {authors && (
          <h4 className="font-semibold">
            Author: <span className="font-normal">{authors} </span>
          </h4>
        )}
        {publisher && (
          <h4 className="font-semibold">
            Author: <span className="font-normal">{publisher} </span>
          </h4>
        )}
        {previewLink && (
          <h4 className="font-semibold">
            Read more:{" "}
            <a
              className="font-normal"
              href={previewLink}
              target="_blank"
              rel="noreferrer"
            >
              Google Books
            </a>
          </h4>
        )}
      </div>
    </div>
  );
};

export default BookItem;
