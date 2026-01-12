"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useGlobalState } from "@/providers/GlobalStateContextProvider";
import { CustomButton } from "./CustomButton";
import { HiDotsVertical } from "react-icons/hi";
import { BiCamera } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { LuMailSearch, LuShoppingBag } from "react-icons/lu";
import { TbCalculator } from "react-icons/tb";
import { MdAlarm } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

const Sidebar = () => {
  const {
    globalState: { isSidebarOpen },
  } = useGlobalState();
  return (
    <div
      className={cn([
        "p-4 w-64 min-h-screen bg-slate-50 transition-all flex flex-col gap-3 items-start",
        {
          "w-24 items-center": !isSidebarOpen,
        },
      ])}
    >
      <div
        className={cn([
          "w-10 h-10 rounded-full mb-2 mt-2 ml-4",
          {
            "mx-auto": !isSidebarOpen,
          },
        ])}
      >
        <Image
          src={"/images/profile.jpg"}
          alt="profile"
          width={0}
          height={0}
          className="w-10 h-auto object-contain rounded-full border-2 border-slate-800"
        />
      </div>
      <CustomButton
        className={!isSidebarOpen ? "rounded-full" : ""}
        Icon={HiDotsVertical}
        variant={"ghost"}
        text={isSidebarOpen ? "Options" : undefined}
      />
      <CustomButton
        className={!isSidebarOpen ? "rounded-full" : ""}
        Icon={BiCamera}
        variant={"ghost"}
        text={isSidebarOpen ? "Camera" : undefined}
      />
      <CustomButton
        className={!isSidebarOpen ? "rounded-full" : ""}
        Icon={IoDocumentTextOutline}
        variant={"ghost"}
        text={isSidebarOpen ? "Documents" : undefined}
      />
      <CustomButton
        className={!isSidebarOpen ? "rounded-full" : ""}
        Icon={CgProfile}
        variant={"ghost"}
        text={isSidebarOpen ? "Profile" : undefined}
      />
      <CustomButton
        className={!isSidebarOpen ? "rounded-full" : ""}
        Icon={LuShoppingBag}
        variant={"ghost"}
        text={isSidebarOpen ? "Shopify" : undefined}
      />
      <CustomButton
        className={!isSidebarOpen ? "rounded-full" : ""}
        Icon={TbCalculator}
        variant={"ghost"}
        text={isSidebarOpen ? "Analytics" : undefined}
      />
      <CustomButton
        className={!isSidebarOpen ? "rounded-full" : ""}
        Icon={MdAlarm}
        variant={"ghost"}
        text={isSidebarOpen ? "Alarm" : undefined}
      />
      <CustomButton
        className={!isSidebarOpen ? "rounded-full" : ""}
        Icon={LuMailSearch}
        variant={"ghost"}
        text={isSidebarOpen ? "Mail" : undefined}
      />
    </div>
  );
};

export default Sidebar;
