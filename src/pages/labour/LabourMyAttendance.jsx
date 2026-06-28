
import LabourLayout from "../../layouts/LabourLayout";

const LabourMyAttendance = () => {
  return (
    <LabourLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Attendance
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Present Days
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            24
          </h1>

        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Absent Days
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            2
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Late Entries
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            3
          </h1>

        </div>

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Working Days
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            26
          </h1>

        </div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="month"
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Attendance Table */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Attendance History
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Date
                </th>

                <th className="p-3 text-left">
                  Login Time
                </th>

                <th className="p-3 text-left">
                  Logout Time
                </th>

                <th className="p-3 text-left">
                  Working Hours
                </th>

                <th className="p-3 text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-3">
                  12-06-2026
                </td>

                <td className="p-3">
                  09:00 AM
                </td>

                <td className="p-3">
                  06:00 PM
                </td>

                <td className="p-3">
                  9 Hours
                </td>

                <td className="p-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Present
                  </span>

                </td>

              </tr>

              <tr>

                <td className="p-3">
                  11-06-2026
                </td>

                <td className="p-3">
                  09:15 AM
                </td>

                <td className="p-3">
                  06:00 PM
                </td>

                <td className="p-3">
                  8.5 Hours
                </td>

                <td className="p-3">

                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Late
                  </span>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </LabourLayout>
  );
};

export default LabourMyAttendance;