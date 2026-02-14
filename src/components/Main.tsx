import Contributors from "./Contributors";
import DeliveredApplications from "./DeliveredApplications";
import Menus from "./Menus";
import Notifications from "./Notifications";
import ProjectOverview from "./ProjectOverview";

const Main = () => {
  return (
    <div className="p-4 w-full flex flex-col">
      <Menus />
      <div className="grid grid-cols-4 gap-4">
        <Contributors />
        <div className="col-span-2 flex flex-col gap-4">
          <ProjectOverview />
          <DeliveredApplications />
        </div>
        <Notifications />
      </div>
    </div>
  );
};

export default Main;
