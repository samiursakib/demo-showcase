import { RiMenu2Fill } from "react-icons/ri";
import { useGlobalState } from "@/providers/GlobalStateContextProvider";
import { CustomButton } from "./CustomButton";
import { BiSearch } from "react-icons/bi";

const Menus = () => {
  const { setGlobalState } = useGlobalState();
  return (
    <div className="mb-4 text-lg flex justify-between items-center">
      <CustomButton
        Icon={RiMenu2Fill}
        text="Menu"
        variant="ghost"
        className="hover:bg-transparent items-center border"
        onClick={() =>
          setGlobalState((prev) => ({
            ...prev,
            isSidebarOpen: !prev.isSidebarOpen,
          }))
        }
      />
      <div className="pl-6 text-xs text-slate-500 flex items-center bg-slate-50 rounded-full">
        Search anything ...{" "}
        <CustomButton Icon={BiSearch} className="rounded-full ml-4" />
      </div>
    </div>
  );
};

export default Menus;
