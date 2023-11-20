import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

const DATA_FOOTER_ACCOUNT = [
  {
    title: "Quyền riêng tư",
  },
  {
    title: "Điều khoản",
  },
  {
    title: "Quảng cáo",
  },
  {
    title: "Lựa chọn quảng cáo",
  },
  {
    title: "Cookie",
  },
  {
    title: "Xem thêm",
  },
];

function FooterAccount() {
  return (
    <span className="block break-words m-w-full text-[13px] text-gray-600 dark:text-primary-200">
      <ul className="list-none flex flex-wrap break-words items-center" style={{ wordBreak: "break-word" }}>
        {DATA_FOOTER_ACCOUNT.map((data, index) => (
          <li key={index} className="m-0 p-0 inline">
            <Link
              to="/"
              className="text-[13px] dark:text-primary-200 text-gray-600 inline hover:underline"
            >
              {data.title}
            </Link>
            {index < DATA_FOOTER_ACCOUNT.length - 1 && (
              <BsDot className="inline text-gray-600 dark:text-primary-200" />
            )}
          </li>
        ))}
      </ul>
      Meta © 2023
    </span>
  );
}

export default FooterAccount;
