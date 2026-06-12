import MainLayout from "../../layouts/MainLayout";

const Attendance = () => {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Attendance Management
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Present Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            118
          </h1>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Absent Today
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            7
          </h1>
        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">
          <h3 className="text-lg">
            Late Entries
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            4
          </h1>
        </div>

      </div>

      {/* Filters */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Search Labour..."
            className="border p-3 rounded-lg"
          />

          <input
            type="date"
            className="border p-3 rounded-lg"
          />

          <select className="border p-3 rounded-lg">
            <option>All Status</option>
            <option>Present</option>
            <option>Absent</option>
            <option>Late</option>
          </select>

        </div>

      </div>

      {/* Attendance Table */}

      <div className="bg-white rounded-xl shadow p-4">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b">

                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Login</th>
                <th className="p-3 text-left">Logout</th>
                <th className="p-3 text-left">Hours</th>
                <th className="p-3 text-left">Status</th>

              </tr>
            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-3">Rahman</td>
                <td className="p-3">Stitching</td>
                <td className="p-3">12-06-2026</td>
                <td className="p-3">09:00 AM</td>
                <td className="p-3">06:00 PM</td>
                <td className="p-3">9 Hours</td>

                <td className="p-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Present
                  </span>
                </td>

              </tr>

              <tr>

                <td className="p-3">Ahmed</td>
                <td className="p-3">Packing</td>
                <td className="p-3">12-06-2026</td>
                <td className="p-3">09:40 AM</td>
                <td className="p-3">06:00 PM</td>
                <td className="p-3">8.2 Hours</td>

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

    </MainLayout>
  );
};

export default Attendance;