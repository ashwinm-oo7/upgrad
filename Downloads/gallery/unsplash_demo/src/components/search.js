const SearchField =() => {
    return(
        <div>
           <input
           className="bg-gray-50 border border-gray-300
           text-sm w-full indent-2 p-2 outline-none focus:border-blue-500 
           focus:ring-2 rounded-tl rounded-bl"
            type="search"/>
           <button>Search</button>

        </div>
    )
}


export default SearchField