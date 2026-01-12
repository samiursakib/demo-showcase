import Menus from "./Menus";
import { Artist, artists, chartConfig, chartData } from "@/lib/data";
import { imageLoader } from "@/lib/utils";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import { CustomButton } from "./CustomButton";
import { RxCaretDown } from "react-icons/rx";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Separator } from "@/components/ui/separator";

const Main = () => {
  return (
    <div className="p-4 w-full flex flex-col">
      <Menus />
      <div className="grid gridrows3 grid-cols-4 gap-4">
        <div className="p-4 row-span-4 rounded-lg flex flex-col gap-4 border">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold">Artists</div>
            <CustomButton
              Icon={RxCaretDown}
              variant={"ghost"}
              className="rounded-full"
            />
          </div>
          {artists.map((artist: Artist, index: number) => (
            <div key={index} className="flex items-center">
              <Image
                loader={imageLoader}
                src={artist.imageUrl}
                height={0}
                width={0}
                alt={`${artist.name}`}
                quality={100}
                priority={true}
                className="h-10 w-10 object-cover mr-2 rounded"
              />
              <div className="flex flex-col justify-center gap-1">
                <div className="text-xs text-gray-900 font-semibold">
                  {artist.name}
                </div>
                <div className="text-xs text-gray-500">
                  {artist.designation}
                </div>
              </div>
              <CustomButton
                Icon={HiDotsVertical}
                variant={"ghost"}
                className="rounded-full ml-auto"
              />
            </div>
          ))}
        </div>
        <div className="p-4 row-span-2 rounded-lg flex flex-col col-span-2 border">
          <div className="mb-2 text-sm font-semibold">Charts</div>
          <div>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent className="bg-white" indicator="dot" />
                  }
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </div>
          <Separator className="my-4" />
          <div className="text-sm font-semibold">Progress</div>
          <div>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent className="bg-white" />}
                />
                <defs>
                  <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-desktop)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-desktop)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-mobile)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-mobile)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="url(#fillMobile)"
                  fillOpacity={0.4}
                  stroke="var(--color-mobile)"
                  stackId="a"
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="url(#fillDesktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
        <div className="p-4 rounded-lg border">
          <div className="mb-3 text-sm font-semibold">Background</div>
          <div className="h-64 rounded-lg bg-[url('/images/photo-1547626740-02cb6aed9ef8.jpg')] overflow-hidden">
            <div className="w-full h-full bg-black/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
