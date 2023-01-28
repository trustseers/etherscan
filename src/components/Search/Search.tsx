import React from 'react';

const Search = () => {
    return (
        <form action="#" className="search-form" method="get">
            <select name="" className='form-select text-xs py-3 rounded-l-lg border-gray-300'>
                <option value="0">All Filters</option>
                <option value="1">Addresses</option>
                <option value="2">Tokens</option>
                <option value="3">Name Tags</option>
                <option value="4">Labels</option>
                <option value="5">Websites</option>
            </select>
            <input type="text" placeholder='Search by Address / Txn Hash / Block / Token / Ens' className='form-input text-xs py-3 border-gray-300 w-96' />
            <button type="submit" className='form-input text-white py-3 text-xs rounded-r-lg bg-[#3498db] border-[#3498db] hover:shadow-lg shadow-blue-500/50'><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
    );
}
export default Search;