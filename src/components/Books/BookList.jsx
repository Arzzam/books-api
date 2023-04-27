import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import axios from "axios";

const BookList = ({ searchTitle }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const resources = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTitle}&maxResults=11`
      );
      setDetails(resources.data.items);
    };
    fetchDetails();
  }, [searchTitle]);

  const loadMore = async () => {
    const resources = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTitle}&maxResults=8&startIndex=${details.length}`
    );
    setDetails((oldDetails) => [...oldDetails, ...resources.data.items]);
  };

  return (
    <div className={`container mt-4 p-2.5`}>
      <div className={`sm:m-2.5 md:m-4 lg:m-4 rounded-2xl shadow-inner p-4`}>
        <h1 className="text-2xl font-sans font-semibold">Results</h1>
        <hr className="h-px my-6 bg-slate-300 border-0" />
        <div className="grid sm:grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4 gap-5 xl:gap-10 xl:gap-y-3 px-2">
          {details.map((book, index) => (
            <BookItem {...book} key={index} />
          ))}

          <button className="text-center w-60 rounded-2xl my-2 p-4 justify-items-center bg-slate-200 transition ease-in delay-75 duration-100 hover:shadow-lg hover:shadow-slate-500 hover:origin-center hover:scale-[1.02]">
            Need More Books?? <br />{" "}
            <button
              className="text-white bg-blue-700 p-3 m-1 hover:bg-slate-200 hover:text-black"
              onClick={loadMore}
            >
              Load for More!!
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookList;
