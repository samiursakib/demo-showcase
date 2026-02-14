import { chartConfig, chartData } from "@/lib/data";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const DeliveredApplications = () => {
  return (
    <div className="p-4 rounded-lg flex flex-col border">
      <div className="mb-2 text-sm font-semibold">Delivered Applications</div>
      <div>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            {/*<Legend />*/}
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent className="bg-white" indicator="dot" />
              }
            />
            <Bar
              dataKey="web"
              fill="var(

            )"
              radius={4}
            />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          </BarChart>
        </ChartContainer>
        <div className="mx-auto flex justify-center gap-4 my-4">
          {Object.entries(chartConfig).map(([key, { label, color }]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: color }}
              />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveredApplications;
