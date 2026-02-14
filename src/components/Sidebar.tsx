"use client";

import { sideMenuButtons } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useGlobalState } from "@/providers/GlobalStateContextProvider";
import Image from "next/image";
import { SideMenuButton } from "./Buttons";

const Sidebar = () => {
  const {
    globalState: { isSidebarOpen },
  } = useGlobalState();
  return (
    <div
      className={cn([
        "p-4 w-64 min-h-screen bg-slate-50 transition-all flex flex-col gap-3 items-start overflow-hidden",
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
        <div className="flex gap-4 items-center font-bold text-lg">
          <Image
            src={"/images/profile.jpg"}
            alt="profile"
            width={0}
            height={0}
            className="w-10 h-auto object-contain rounded-full border-2 border-slate-800"
          />
          {isSidebarOpen ? <span>Dashboard</span> : null}
        </div>
      </div>
      {sideMenuButtons.map((b) => (
        <SideMenuButton
          key={b.label}
          isSidebarOpen={isSidebarOpen}
          Icon={b.Icon}
          text={b.label}
        />
      ))}
    </div>
  );
};

export default Sidebar;
