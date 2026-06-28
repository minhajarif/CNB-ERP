
import LabourLayout from "../../layouts/LabourLayout";

const LabourMyProduction = () => {
  return (
    <LabourLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Production
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Today Production
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            50
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            This Month
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            850
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Earnings
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            ₹12,500
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Work Types
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            4
          </h1>

        </div>

      </div>

      {/* Filter */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <input
          type="month"
          className="w-full border p-3 rounded-lg"
        />

      </div>

      {/* Production History */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Production History
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
                  Quantity
                </th>

                <th className="p-3 text-left">
                  Rate
                </th>

                <th className="p-3 text-left">
                  Amount
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="p-3">
                  12-06-2026
                </td>

                <td className="p-3">
                  Wallet Stitching
                </td>

                <td className="p-3">
                  50
                </td>

                <td className="p-3">
                  ₹10
                </td>

                <td className="p-3 font-semibold">
                  ₹500
                </td>

              </tr>

              <tr>

                <td className="p-3">
                  11-06-2026
                </td>

                <td className="p-3">
                  Belt Stitching
                </td>

                <td className="p-3">
                  40
                </td>

                <td className="p-3">
                  ₹12
                </td>

                <td className="p-3 font-semibold">
                  ₹480
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </LabourLayout>
  );
};

export default LabourMyProduction;