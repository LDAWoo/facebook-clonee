function MessageTime() {
  return (
    <div role="row">
      <div className="relative" role="gridcell" tabIndex={0}>
        <div className="flex flex-col">
          <div className="pt-4 pr-5 pl-5 pb-4">
            <div
              className="text-center m-auto max-w-457[px] break-words"
            >
                <div className="flex items-center justify-center text-[13px]">
                  <span className="dark:text-primary-200">
                    <span>13:59, 18 Tháng 5, 2023</span>
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageTime;
