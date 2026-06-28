import MainLayout from "../../layouts/MainLayout";

const Notifications = () => {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Notifications
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Total Notifications
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            48
          </h1>
        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Read
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            35
          </h1>
        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Unread
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            13
          </h1>
        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            8
          </h1>
        </div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="text"
          placeholder="Search Notifications..."
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Notification List */}

      <div className="bg-white rounded-xl shadow p-5">

        <div className="space-y-4">

          <div className="border rounded-lg p-4 hover:bg-slate-50">

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-semibold">
                  Salary Generated Successfully
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Payroll generated for June 2026.
                </p>

              </div>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                New
              </span>

            </div>

          </div>

          <div className="border rounded-lg p-4 hover:bg-slate-50">

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-semibold">
                  New Labour Added
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Employee EMP001 added successfully.
                </p>

              </div>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Info
              </span>

            </div>

          </div>

          <div className="border rounded-lg p-4 hover:bg-slate-50">

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-semibold">
                  Production Updated
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Daily production entry has been updated.
                </p>

              </div>

              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                Alert
              </span>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Notifications;