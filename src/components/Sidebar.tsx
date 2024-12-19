import { SidebarItem } from "./SidebarItem";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { Logo } from "../icons/Logo";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r-2  w-72 left-0 top-0 fixed pl-6">
      <div className="flex text-2xl font-semibold pt-6 items-center">
        <div className="pr-2 text-purple-600">
          <Logo />
        </div>
        Second Brain
      </div>
      <div className="pt-8 pl-6">
        <SidebarItem text={"Twitter"} icon={<TwitterIcon />} />
        <SidebarItem text={"Youtube"} icon={<YoutubeIcon />} />
      </div>
    </div>
  );
}
