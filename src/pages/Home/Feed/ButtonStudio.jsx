function ButtonStudio({ Icon, title }) {
  return (
    <div className="flex cursor-pointer items-center justify-center space-x-2 dark:hover:bg-primary-400 hover:bg-gray-200 duration-200 flex-grow p-2 rounded-lg">
      <img src={Icon} alt="" width={24} height={24} />
      <span>{title}</span>
    </div>
  );
}

export default ButtonStudio;
