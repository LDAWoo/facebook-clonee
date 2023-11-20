import { AiOutlineSearch } from "react-icons/ai";

function SearchMessage() {
  return (
    <div className="mt-2 mb-2 pl-4 pr-4">
      <div className="flex items-center rounded-full bg-gray-100 p-[6px] dark:bg-primary-500 ">
        <AiOutlineSearch className="text-gray-600 dark:text-primary-200" size={20} />
        <input
          className="flex-grow ml-2 bg-transparent items-center outline-none text-gray-500 dark:text-primary-50 flex-shrink"
          type="text"
          placeholder="Tìm kiếm trên Messenger"
        />
      </div>
    </div>
  );
}

export default SearchMessage;
