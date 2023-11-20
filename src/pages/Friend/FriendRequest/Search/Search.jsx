import PropTypes from 'prop-types'

function Search({data}) {
    return ( 
        <div className="flex p-[6px] items-center rounded-full bg-gray-100 dark:bg-primary-400">
                <div className="text-gray-600 dark:text-primary-200">{data?.icon}</div>
                <input
                className="ml-2 dark:text-primary-50 bg-transparent placeholder-gray-500 dark:placeholder-gray-400 items-center outline-none flex-shrink w-full"
                type="text"
                placeholder={data?.placeholder}
                />  
        </div>
     );
}
Search.propTypes = {
    data: PropTypes.string
}

export default Search;