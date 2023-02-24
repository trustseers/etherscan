import React from 'react';

const Search = () => {
  return (
    <form action="#" className="search-form" method="get">
      <div className="p-1.5 bg-white border rounded-lg dark:bg-[#0a0a0a] dark:border-[#222]">
        <select
          name=""
          className="form-select text-sm border-transparent focus:border-transparent focus:ring-0 focus:rounded-lg mr-2 dark:bg-[#0a0a0a] dark:text-[#bbb]"
        >
          <option value="0">All Filters</option>
          <option value="1">Addresses</option>
          <option value="2">Tokens</option>
          <option value="3">Name Tags</option>
          <option value="4">Labels</option>
          <option value="5">Websites</option>
        </select>
        <input
          type="text"
          placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
          className="form-input text-sm py-1.5 border-transparent focus:border-transparent focus:ring-0 focus:rounded-lg mr-2 md:w-[601px] dark:bg-[#0a0a0a] dark:text-[#bbb]"
        />
        <button
          type="submit"
          className="form-input text-white py-1.5 px-2.5 text-sm rounded-lg bg-[#3498db] border-[#3498db] hover:bg-[#0670a6] hover:border-[#0670a6]"
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  );
};
export default Search;
