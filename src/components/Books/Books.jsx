import React, { useState } from "react";
import SearchForm from "../Form/SearchForm";
import BookList from "./BookList";

const Books = (props) => {
  const [searchTitle, setSearchTitle] = useState("Harry Potter");

  const titleHandler = (title) => {
    setSearchTitle(title);
  };

  return (
    <>
      <div className="p-5 bg-slate-200 text-center">
        <h1 className="font-sans text-2xl font-bold text-center m-5">
          A Book Library
        </h1>
        <h2 className="font-serif text-xl font-medium ">Search for Books</h2>
        <SearchForm searchingTitle={titleHandler} />
      </div>
      <BookList searchTitle={searchTitle} />
    </>
  );
};

export default Books;
