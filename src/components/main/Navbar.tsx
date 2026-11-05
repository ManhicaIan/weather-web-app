import { FaWind } from "react-icons/fa";
import Button from "./Button";
import { NAV_OPTIONS } from "../../utils/constants/label_icons";

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-10 items-center px-9 w-[5%] h-full bg-ui-secondary rounded-[20px]">
      <div className="p-1 mt-5 mb-5 bg-[#344560] text-[#6884a6] rounded-[10px]"><FaWind size={30} /></div>
      {NAV_OPTIONS.map(({ label, icon }) => (
        <Button key={label} icon={icon} label={label} />
      ))}
    </nav>
  );
};
export default Navbar;
