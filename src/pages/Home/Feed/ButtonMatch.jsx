function ButtonMatch({ Icon, title, active }) {
  return (
    <div
      className="flex space-x-2 items-center mt-3 justify-center
        cursor-pointer font-medium text-gray-600 p-2 flex-grow
        hover:bg-gray-200 dark:hover:bg-primary-500 rounded-lg duration-200"
    >
      <Icon className={`${active ? "text-blue-500" : "dark:text-primary-200"}`} style={{ fontSize: 18 }} />
      <p className={`${active ? "text-blue-500" : "dark:text-primary-200"}`}>{title}</p>
    </div>
  );
}

export default ButtonMatch;
