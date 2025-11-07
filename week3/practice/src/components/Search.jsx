import React from "react";

const Search = ({ onChange }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      placeholder="이름을 입력해주세요"
    />
  );
};

export default Search;
