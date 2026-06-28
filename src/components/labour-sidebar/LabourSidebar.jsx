
import { Link } from "react-router-dom";

const LabourSidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    window.location.href = "/login";
  };

  const menuItems = [
    { name: "Dashboard", path: "/labour/dashboard" },
    { name: "My Attendance", path: "/labour/attendance" },
    { name: "My Production", path: "/labour/production" },
    { name: "My Salary", path: "/labour/salary" },
    { name: "Advance History", path: "/labour/advance-history" },
    { name: "Work History", path: "/labour/work-history" },
    { name: "Notifications", path: "/labour/notifications" },
    { name: "My Profile", path: "/labour/profile" },
  ];

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`
          fixed top-16 left-0 z-50
          h-[calc(100vh-64px)]
          w-72 bg-slate-900 text-white
          flex flex-col
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        <div className="p-5 border-b border-slate-700">

          <h1 className="text-2xl font-bold">
            CNB ERP
          </h1>

          <p className="text-sm text-slate-400 mt-1">
            Labour Panel
          </p>

        </div>

        <div className="flex-1 overflow-y-auto p-4">

          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-slate-800 mb-2"
            >
              {item.name}
            </Link>
          ))}

        </div>

        <div className="p-4 border-t border-slate-700">

          <button
             onClick={handleLogout}
             className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg"
          >
              Logout
          </button>

        </div>

      </div>
    </>
  );
};

export default LabourSidebar;