import { useState } from "react";
import LabourLayout from "../../layouts/LabourLayout";

const LabourMySalary = () => {

  const [salaryHistory] = useState([]);

  const grossSalary = salaryHistory.reduce(
    (total, item) => total + Number(item.grossSalary || 0),
    0
  );

  const advanceTaken = salaryHistory.reduce(
    (total, item) => total + Number(item.advance || 0),
    0
  );

  const netSalary = grossSalary - advanceTaken;

  return (

    <LabourLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Salary
      </h1>

      {/* Salary Summary */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Current Salary
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹{grossSalary}
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Advance Taken
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹{advanceTaken}
          </h1>

        </div>

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Net Salary
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹{netSalary}
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Paid Months
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            {salaryHistory.length}
          </h1>

        </div>

      </div>
            {/* Salary Details */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Current Month Salary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="flex justify-between border p-4 rounded-lg">

            <span>
              Gross Salary
            </span>

            <span className="font-semibold">
              ₹{grossSalary}
            </span>

          </div>

          <div className="flex justify-between border p-4 rounded-lg">

            <span>
              Advance Deduction
            </span>

            <span className="font-semibold text-red-600">
              ₹{advanceTaken}
            </span>

          </div>

          <div className="flex justify-between border p-4 rounded-lg md:col-span-2">

            <span>
              Net Salary
            </span>

            <span className="font-bold text-green-600">
              ₹{netSalary}
            </span>

          </div>

        </div>

      </div>

      {/* Salary History */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Salary History
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Month
                </th>

                <th className="p-3 text-left">
                  Gross Salary
                </th>

                <th className="p-3 text-left">
                  Advance
                </th>

                <th className="p-3 text-left">
                  Net Salary
                </th>

                <th className="p-3 text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {salaryHistory.length > 0 ? (

                salaryHistory.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="p-3">
                      {item.month}
                    </td>

                    <td className="p-3">
                      ₹{item.grossSalary}
                    </td>

                    <td className="p-3">
                      ₹{item.advance}
                    </td>

                    <td className="p-3 font-semibold">
                      ₹{item.netSalary}
                    </td>

                    <td className="p-3">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          item.status === "Paid"
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
                    colSpan="5"
                    className="text-center py-6 text-gray-500"
                  >
                    No Salary Records Found
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

export default LabourMySalary;  