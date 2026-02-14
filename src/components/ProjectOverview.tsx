import { projectOverview } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

const ProjectOverview = () => {
  return (
    <div className="p-4 rounded-lg flex flex-col border">
      <div className="mb-4 text-sm font-semibold">Project Overview</div>
      <div className="flex gap-4">
        {projectOverview.map(({ label, count, rate }) => (
          <div
            key={label}
            className="p-3 border rounded-md flex flex-col flex-grow gap-2"
          >
            <span className="text-4xl font-bold">{count}</span>
            <div className="flex gap-4 text-xs">
              <span className="text-slate-500">{label}</span>
              <div
                className={cn([
                  "flex items-center text-green-500",
                  {
                    "text-red-500": rate < 0,
                  },
                ])}
              >
                <span>{rate < 0 ? <FaArrowDown /> : <FaArrowUp />}</span>
                <span>{rate}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectOverview;
