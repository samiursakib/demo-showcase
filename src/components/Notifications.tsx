import { notifications } from "@/lib/data";

const Notifications = () => {
  return (
    <div className="p-4 rounded-lg border">
      <div className="mb-4 text-sm font-semibold">Notifications</div>
      <div className="flex flex-col gap-4">
        {notifications.map(({ label, time, Icon }) => (
          <div key={label} className="flex gap-2">
            <span>
              <Icon />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs">{label}</span>
              <span className="text-xs text-slate-500">{time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
