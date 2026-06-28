
import SupervisorLayout from "../../layouts/SupervisorLayout";

const SupervisorAttendance = () => {
  return (
    <SupervisorLayout>

      <h1 className="text-3xl font-bold mb-6">
        Attendance Management
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Present Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            32
          </h1>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Absent Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            3
          </h1>
        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Late Entries
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            2
          </h1>
        </div>

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Total Labour
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            35
          </h1>
        </div>

      </div>

      {/* Attendance Entry */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Mark Attendance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <select className="border p-3 rounded-lg">
            <option>Select Labour</option>
            <option>Rahman</option>
            <option>Ahmed</option>
          </select>

          <input
            type="date"
            className="border p-3 rounded-lg"
          />

          <select className="border p-3 rounded-lg">
            <option>Present</option>
            <option>Absent</option>
            <option>Late</option>
          </select>

        </div>

        <button className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg">
          Save Attendance
        </button>

      </div>

      {/* Attendance Records */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Attendance Records
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">Labour</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-3">Rahman</td>
                <td className="p-3">Stitching</td>
                <td className="p-3">12-06-2026</td>

                <td className="p-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Present
                  </span>
                </td>

                <td className="p-3">
                  <div className="flex gap-2">

                    <button className="bg-blue-600 text-white px-3 py-2 rounded-lg">
                      View
                    </button>

                    <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg">
                      Edit
                    </button>

                  </div>
                </td>

              </tr>

              <tr>

                <td className="p-3">Ahmed</td>
                <td className="p-3">Stitching</td>
                <td className="p-3">12-06-2026</td>

                <td className="p-3">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                    Absent
                  </span>
                </td>

                <td className="p-3">
                  <div className="flex gap-2">

                    <button className="bg-blue-600 text-white px-3 py-2 rounded-lg">
                      View
                    </button>

                    <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg">
                      Edit
                    </button>

                  </div>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </SupervisorLayout>
  );
};

export default SupervisorAttendance;