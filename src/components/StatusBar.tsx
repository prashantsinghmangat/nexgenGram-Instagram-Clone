import { User, MessageSquare } from "lucide-react";

const StatusBar = () => {
  return (
    <div className="w-full overflow-x-auto bg-white shadow-sm mb-6 p-4">
      <div className="flex gap-4 min-w-max">
        {["John", "Sarah", "Mike", "Emma", "Alex"].map((user) => (
          <div key={user} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-[2px]">
              <div className="w-full h-full rounded-full border-2 border-white">
                <User className="w-full h-full p-2 text-white" />
              </div>
            </div>
            <span className="text-sm font-medium">{user}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusBar;