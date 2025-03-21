import React, { useState } from "react";

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("None");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    alert(event.target.value);
  };

  return (
    <div>
      <div className="relative flex items-center h-12 p-2 border border-gray-300 rounded-md w-72">
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleChange}
          className="w-full h-full font-semibold rounded-md appearance-none flexc ps-32 focus:outline-none focus:ring-0"
          onFocus={() => setIsOpen(!isOpen)}
          onBlur={() => setIsOpen(!isOpen)}
        >
          <option value="None">none</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
        <span className="absolute text-gray-500 pointer-events-none left-3">
          sort price by :
        </span>
        <span
          className={`absolute right-3 transall ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </div>
    </div>
  );
}

export default Dropdown;
