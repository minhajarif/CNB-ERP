
import MainLayout from "../../layouts/MainLayout";

const LabourDetails = () => {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">
        Labour Details
      </h1>

      {/* Profile Card */}

      <div className="bg-white rounded-xl shadow p-6 mb-6">

        <div className="flex flex-col md:flex-row items-center gap-6">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Labour"
            className="w-28 h-28 rounded-full border-4 border-blue-500"
          />

          <div className="flex-1">

            <h2 className="text-2xl font-bold">
              Abdul Rahman
            </h2>

            <p className="text-gray-600">
              Stitching Department
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

              <div>
                <span className="font-semibold">
                  Phone:
                </span>{" "}
                +91 9876543210
              </div>

              <div>
                <span className="font-semibold">
                  Joining Date:
                </span>{" "}
                15 Jan 2025
              </div>

              <div>
                <span className="font-semibold">
                  Employee ID:
                </span>{" "}
                EMP-1025
              </div>

              <div>
                <span className="font-semibold">
                  Status:
                </span>{" "}
                <span className="text-green-600 font-bold">
                  Active
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Present Days
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            24
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-lg">
            Total Production
          </h3>

          <h1 className="text-4xl font-bold mt-2">
            850
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

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

      </div>

      {/* Attendance + Salary Summary */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">

        <div className="bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-semibold mb-4">
            Attendance Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Present</span>
              <span className="font-bold text-green-600">
                24 Days
              </span>
            </div>

            <div className="flex justify-between">
              <span>Absent</span>
              <span className="font-bold text-red-600">
                2 Days
              </span>
            </div>

            <div className="flex justify-between">
              <span>Late Entries</span>
              <span className="font-bold text-yellow-500">
                1 Day
              </span>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-semibold mb-4">
            Salary Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Total Salary</span>
              <span className="font-bold">
                ₹12,500
              </span>
            </div>

            <div className="flex justify-between">
              <span>Advance Deduction</span>
              <span className="font-bold text-red-600">
                ₹2,000
              </span>
            </div>

            <div className="flex justify-between">
              <span>Net Salary</span>
              <span className="font-bold text-green-600">
                ₹10,500
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Work History */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Recent Work History
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

                <td className="p-3">
                  ₹500
                </td>

              </tr>

              <tr className="border-b">

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

                <td className="p-3">
                  ₹480
                </td>

              </tr>

              <tr>

                <td className="p-3">
                  10-06-2026
                </td>

                <td className="p-3">
                  Bag Stitching
                </td>

                <td className="p-3">
                  35
                </td>

                <td className="p-3">
                  ₹15
                </td>

                <td className="p-3">
                  ₹525
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>
  );
};

export default LabourDetails;