import { IgntLink, IgntLogo } from "@ignt/react-library";
import IgntAcc from "./IgntAcc";
import { IoReloadCircle } from "react-icons/io5";

type MenuItem = {
  label: string;
  to?: string;
  href?: string;
};
interface IgntHeaderProps {
  navItems: Array<MenuItem>;
}
export default function IgntHeader(props: IgntHeaderProps) {
  const { navItems } = props;

  const updateState = () => {
    return null;
  };

  return (
    <header className="flex justify-center p-5 am-bg-translucent sticky top-0 z-[100]">
      <IgntLogo className="mx-2.5" />
      <nav className="flex justify-between gap-3">
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li className="text-3 px-4 font-normal" key={item.label}>
              <IgntLink item={item}></IgntLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <button className="am-esg-reload text-[2rem]" onClick={updateState}>
            <IoReloadCircle />
          </button>
        </div>
        <div>
          <IgntAcc />
        </div>
      </nav>
    </header>
  );
}
