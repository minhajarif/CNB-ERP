
const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div>
        <h2 className="text-xl font-semibold">
          CNB ERP
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h4 className="font-medium">
              Owner
            </h4>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;