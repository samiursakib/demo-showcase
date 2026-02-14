import { contributors } from "@/lib/data";
import { Contributor } from "@/lib/types";
import { imageLoader } from "@/lib/utils";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import { RxCaretDown } from "react-icons/rx";
import { CustomButton } from "./Buttons";

const Contributors = () => {
  return (
    <div className="p-4 rounded-lg flex flex-col gap-4 border">
      <div className="flex justify-between items-center">
        <div className="text-sm font-semibold">Contributors</div>
        <CustomButton
          Icon={RxCaretDown}
          variant={"ghost"}
          className="rounded-full"
        />
      </div>
      {contributors.map((artist: Contributor, index: number) => (
        <div key={index} className="flex items-center">
          <Image
            loader={imageLoader}
            src={artist.imageUrl}
            height={0}
            width={0}
            alt={`${artist.name}`}
            quality={50}
            priority={true}
            className="h-10 w-10 object-cover mr-2 rounded"
          />
          <div className="flex flex-col justify-center gap-1">
            <div className="text-xs text-gray-900 font-semibold">
              {artist.name}
            </div>
            <div className="text-xs text-gray-500">{artist.designation}</div>
          </div>
          <CustomButton
            Icon={HiDotsVertical}
            variant={"ghost"}
            className="rounded-full ml-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Contributors;
