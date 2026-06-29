import { useState } from "react";
import LabourLayout from "../../layouts/LabourLayout";

const LabourMyAttendance = () => {

  const [attendance] = useState([]);

  const [searchMonth, setSearchMonth] = useState("");

  const filteredAttendance = attendance.filter((item) => {

    if (!searchMonth) return true;

    return item.date.startsWith(searchMonth);

  });

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

            {
              attendance.filter(
                (item) => item.status === "Present"
              ).length
            }

          </h1>

        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Absent Days
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            {
              attendance.filter(
                (item) => item.status === "Absent"
              ).length
            }

          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Late Entries
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            {
              attendance.filter(
                (item) => item.status === "Late"
              ).length
            }

          </h1>

        </div>

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Working Days
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {attendance.length}
          </h1>

        </div>

      </div>
            {/* Search */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="month"
          value={searchMonth}
          onChange={(e) =>
            setSearchMonth(e.target.value)
          }
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

              {filteredAttendance.length > 0 ? (

                filteredAttendance.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="p-3">
                      {item.date}
                    </td>

                    <td className="p-3">
                      {item.loginTime}
                    </td>

                    <td className="p-3">
                      {item.logoutTime}
                    </td>

                    <td className="p-3">
                      {item.workingHours}
                    </td>

                    <td className="p-3">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          item.status === "Present"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Absent"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                  </tr>

                ))

              ) : (
                              <tr>

                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500"
                  >
                    No Attendance Records Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </LabourLayout>

  );

};

export default LabourMyAttendance;  