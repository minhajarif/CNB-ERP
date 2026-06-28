
import SupervisorLayout from "../../layouts/SupervisorLayout";

const SupervisorNotifications = () => {
  return (
    <SupervisorLayout>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Notifications
        </h1>

        <button className="bg-blue-700 text-white px-5 py-3 rounded-lg">
          Mark All Read
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Notifications
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            25
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Read
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            18
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Unread
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            7
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            4
          </h1>

        </div>

      </div>

      {/* Notifications List */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Recent Notifications
        </h2>

        <div className="space-y-4">

          <div className="border rounded-lg p-4">

            <h3 className="font-semibold">
              Production Entry Added
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              New production entry submitted successfully.
            </p>

          </div>

          <div className="border rounded-lg p-4">

            <h3 className="font-semibold">
              Attendance Updated
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Attendance records updated for today.
            </p>

          </div>

          <div className="border rounded-lg p-4">

            <h3 className="font-semibold">
              New Labour Assigned
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Labour assigned to Stitching Department.
            </p>

          </div>

        </div>

      </div>

    </SupervisorLayout>
  );
};

export default SupervisorNotifications;