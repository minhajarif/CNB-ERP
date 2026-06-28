import LabourLayout from "../../layouts/LabourLayout";

const LabourAdvanceHistory = () => {
  return (
    <LabourLayout>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        <h1 className="text-3xl font-bold">
          Advance History
        </h1>

        <button className="bg-blue-700 text-white px-5 py-3 rounded-lg">
          Request Advance
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Advance Taken
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹12,000
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Approved
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹10,000
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Pending
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹2,000
          </h1>

        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Rejected
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹1,500
          </h1>

        </div>

      </div>

      {/* Request Form */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          New Advance Request
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="number"
            placeholder="Advance Amount"
            className="border p-3 rounded-lg"
          />

          <input
            type="date"
            className="border p-3 rounded-lg"
          />

          <textarea
            rows="4"
            placeholder="Reason for Advance"
            className="border p-3 rounded-lg md:col-span-2"
          />

        </div>

        <button className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg">
          Submit Request
        </button>

      </div>

      {/* Advance History Table */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Advance Records
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Request ID
                </th>

                <th className="p-3 text-left">
                  Amount
                </th>

                <th className="p-3 text-left">
                  Request Date
                </th>

                <th className="p-3 text-left">
                  Reason
                </th>

                <th className="p-3 text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-3">
                  ADV001
                </td>

                <td className="p-3">
                  ₹2,000
                </td>

                <td className="p-3">
                  12-06-2026
                </td>

                <td className="p-3">
                  Family Expense
                </td>

                <td className="p-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Approved
                  </span>

                </td>

              </tr>

              <tr className="border-b">

                <td className="p-3">
                  ADV002
                </td>

                <td className="p-3">
                  ₹1,500
                </td>

                <td className="p-3">
                  15-06-2026
                </td>

                <td className="p-3">
                  Medical Expense
                </td>

                <td className="p-3">

                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Pending
                  </span>

                </td>

              </tr>

              <tr>

                <td className="p-3">
                  ADV003
                </td>

                <td className="p-3">
                  ₹3,000
                </td>

                <td className="p-3">
                  01-05-2026
                </td>

                <td className="p-3">
                  Personal Work
                </td>

                <td className="p-3">

                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                    Rejected
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

export default LabourAdvanceHistory;