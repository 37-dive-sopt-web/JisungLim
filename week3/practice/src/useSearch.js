import { useState } from "react";

const useSearch = (initialMember) => {
  const [name, setName] = useState("");
  const [filteredName, setFilteredName] = useState(initialMember);

  const handleSearchChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = () => {
    const result = initialMember.filter((member) => member.name.includes(name));
    setFilteredName(result);
  };

  return { name, filteredName, handleSearchChange, handleSearch };
};

export default useSearch;
