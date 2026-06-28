
const SupervisorNavbar = ({ setSidebarOpen }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-16 bg-white border-b shadow-sm flex items-center justify-between px-4 md:px-6">

      <button
        onClick={() => setSidebarOpen(true)}
        className="text-2xl"
      >
        ☰
      </button>

      <h2 className="text-xl font-semibold">
        CNB ERP
      </h2>

      <div className="flex items-center gap-3">

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />

        <div className="hidden sm:block">

          <h4 className="font-medium">
            Supervisor
          </h4>

          <p className="text-xs text-gray-500">
            Department Supervisor
          </p>

        </div>

      </div>

    </div>
  );
};

export default SupervisorNavbar;