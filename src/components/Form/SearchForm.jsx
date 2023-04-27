import React, { useState } from "react";

const SearchForm = (props) => {
  const [inputText, setInputState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchingTitle(inputText);
  };
  const changeHandler = (e) => {
    e.preventDefault();
    setInputState(e.target.value);
    props.searchingTitle(e.target.value);
    if (inputText === "") {
      setInputState("Harry Potter");
      props.searchingTitle("Harry Potter");
    }
  };

  return (
    <div className="m-4">
      <form onSubmit={handleSubmit}>
        <input
          className="p-2 text-sm text-gray-500 border border-gray-600 rounded-lg bg-gray-50 focus:ring-zinc-600 focus:border-gray-800"
          type="search"
          placeholder="Search Books..."
          onChange={changeHandler}
        />
        <button
          type="submit"
          className="bg-blue-700 text-white p-2 my-1 mx-2 rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
