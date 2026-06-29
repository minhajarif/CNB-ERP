import { useState } from "react";
import LabourLayout from "../../layouts/LabourLayout";

const LabourWorkHistory = () => {

  const [workHistory] = useState([]);

  const [searchMonth, setSearchMonth] = useState("");

  const [searchWorkType, setSearchWorkType] = useState("");

  const filteredWorkHistory = workHistory.filter((item) => {

    const matchMonth =
      !searchMonth || item.date.startsWith(searchMonth);

    const matchWork =
      item.workType
        .toLowerCase()
        .includes(searchWorkType.toLowerCase());

    return matchMonth && matchWork;

  });

  return (

    <LabourLayout>

      <h1 className="text-3xl font-bold mb-6">
        Work History
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Work
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            {
              workHistory.reduce(
                (total, item) =>
                  total + Number(item.quantity || 0),
                0
              )
            }

          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            This Month
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            {
              filteredWorkHistory.reduce(
                (total, item) =>
                  total + Number(item.quantity || 0),
                0
              )
            }

          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Work Types
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            {
              [...new Set(
                workHistory.map(
                  (item) => item.workType
                )
              )].length
            }

          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Earnings
          </h3>

          <h1 className="text-4xl font-bold mt-2">

            ₹{
              workHistory.reduce(
                (total, item) =>
                  total +
                  Number(item.quantity || 0) *
                  Number(item.rate || 0),
                0
              )
            }

          </h1>

        </div>

      </div>
            {/* Filter */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="month"
            value={searchMonth}
            onChange={(e) =>
              setSearchMonth(e.target.value)
            }
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Search Work Type..."
            value={searchWorkType}
            onChange={(e) =>
              setSearchWorkType(e.target.value)
            }
            className="border p-3 rounded-lg"
          />

        </div>

      </div>

      {/* Work History Table */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Work Records
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Date
                </th>

                <th className="p-3 text-left">
                  Work Type
                </th>

                <th className="p-3 text-left">
                  Department
                </th>

                <th className="p-3 text-left">
                  Quantity
                </th>

                <th className="p-3 text-left">
                  Rate
                </th>

                <th className="p-3 text-left">
                  Amount
                </th>

                <th className="p-3 text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredWorkHistory.length > 0 ? (

                filteredWorkHistory.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="p-3">
                      {item.date}
                    </td>

                    <td className="p-3">
                      {item.workType}
                    </td>

                    <td className="p-3">
                      {item.department}
                    </td>

                    <td className="p-3">
                      {item.quantity}
                    </td>

                    <td className="p-3">
                      ₹{item.rate}
                    </td>

                    <td className="p-3 font-semibold">
                      ₹{Number(item.quantity) * Number(item.rate)}
                    </td>

                    <td className="p-3">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          item.status === "Completed"
                            ? "bg-green-100 text-green-700"
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
                    colSpan="7"
                    className="text-center py-6 text-gray-500"
                  >
                    No Work Records Found
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

export default LabourWorkHistory;