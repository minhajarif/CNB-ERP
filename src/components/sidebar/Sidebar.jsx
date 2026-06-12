import { Link } from "react-router-dom";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {

  const menuItems = [
    { name: "Dashboard", path: "/owner/dashboard" },
    { name: "Labour Management", path: "/owner/labour-management" },
    { name: "Supervisor Management", path: "/owner/supervisor-management" },
    { name: "Department Management", path: "/owner/department-management" },
    { name: "Work Management", path: "/owner/work-management" },
    { name: "Production", path: "/owner/production" },
    { name: "Attendance", path: "/owner/attendance" },
    { name: "Payroll", path: "/owner/payroll" },
    { name: "Advance Management", path: "/owner/advance-management" },
    { name: "Reports", path: "/owner/reports" },
    { name: "Product Gallery", path: "/owner/product-gallery" },
    { name: "Notifications", path: "/owner/notifications" },
    { name: "Settings", path: "/owner/settings" },
    { name: "Profile", path: "/owner/profile" },
  ];

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`
        fixed md:static top-0 left-0 z-50
        h-screen w-72 bg-slate-900 text-white
        flex flex-col
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        `}
      >

        <div className="p-5 border-b border-slate-700 flex justify-between items-center">

          <div>
            <h1 className="text-2xl font-bold">
              CNB ERP
            </h1>

            <p className="text-sm text-slate-400 mt-1">
              Factory Management System
            </p>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-2xl"
          >
            ×
          </button>

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

          <button className="w-full bg-red-600 py-3 rounded-lg">
            Logout
          </button>

        </div>

      </div>
    </>
  );
};

export default Sidebar;