
import LabourLayout from "../../layouts/LabourLayout";

const LabourMySalary = () => {
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
            ₹12,500
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Advance Taken
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹2,000
          </h1>

        </div>

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Net Salary
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹10,500
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Paid Months
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            12
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
            <span>Gross Salary</span>
            <span className="font-semibold">₹12,500</span>
          </div>

          <div className="flex justify-between border p-4 rounded-lg">
            <span>Advance Deduction</span>
            <span className="font-semibold text-red-600">₹2,000</span>
          </div>

          <div className="flex justify-between border p-4 rounded-lg md:col-span-2">
            <span>Net Salary</span>
            <span className="font-bold text-green-600">₹10,500</span>
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

              <tr className="border-b">

                <td className="p-3">
                  June 2026
                </td>

                <td className="p-3">
                  ₹12,500
                </td>

                <td className="p-3">
                  ₹2,000
                </td>

                <td className="p-3 font-semibold">
                  ₹10,500
                </td>

                <td className="p-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Paid
                  </span>

                </td>

              </tr>

              <tr>

                <td className="p-3">
                  May 2026
                </td>

                <td className="p-3">
                  ₹11,800
                </td>

                <td className="p-3">
                  ₹1,500
                </td>

                <td className="p-3 font-semibold">
                  ₹10,300
                </td>

                <td className="p-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Paid
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

export default LabourMySalary;