function MessageLoading() {
  return (
    <div className="flex items-center pt-3 h-6 pb-3 mt-3 justify-center bg-white dark:bg-primary-600">
      <div className="flex outline-none">
        <img
        className="object-cover bg--primary-500"
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/wVjfNbGZ3CH.gif"
          alt="Loading"
        />
      </div>
    </div>
  );
}

export default MessageLoading;
