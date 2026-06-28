import SupervisorLayout from "../../layouts/SupervisorLayout";

import AttendanceChart from "../../components/charts/AttendanceChart";
import ProductionChart from "../../components/charts/ProductionChart";
import SalaryChart from "../../components/charts/SalaryChart";

const SupervisorDashboard = () => {
  return (
    <SupervisorLayout>

      <h1 className="text-3xl font-bold mb-6">
        Supervisor Dashboard
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-6 mb-8">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-sm">
            Total Labour
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            35
          </h1>

        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-sm">
            Present Today
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            32
          </h1>

        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-sm">
            Absent Today
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            3
          </h1>

        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl shadow">

          <h3 className="text-sm">
            Late Entries
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            1
          </h1>

        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-sm">
            Production Today
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            450
          </h1>

        </div>

        <div className="bg-indigo-600 text-white p-5 rounded-xl shadow">

          <h3 className="text-sm">
            Salary Cost Today
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            ₹12,500
          </h1>

        </div>

      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

        <AttendanceChart />

        <ProductionChart />

        <SalaryChart />

      </div>

      {/* Department Summary + Top Labour */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">

        {/* Department Summary */}

        <div className="bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-semibold mb-4">
            Department Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Department</span>
              <span className="font-bold">
                Stitching
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total Labour</span>
              <span className="font-bold">
                35
              </span>
            </div>

            <div className="flex justify-between">
              <span>Present</span>
              <span className="font-bold text-green-600">
                32
              </span>
            </div>

            <div className="flex justify-between">
              <span>Absent</span>
              <span className="font-bold text-red-600">
                3
              </span>
            </div>

            <div className="flex justify-between">
              <span>Production Today</span>
              <span className="font-bold">
                450 Pieces
              </span>
            </div>

            <div className="flex justify-between">
              <span>Monthly Salary Cost</span>
              <span className="font-bold text-purple-600">
                ₹2,85,000
              </span>
            </div>

          </div>

        </div>

        {/* Top Labour */}

        <div className="bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-semibold mb-4">
            Top Labour
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="p-3 text-left">
                    Name
                  </th>

                  <th className="p-3 text-left">
                    Production
                  </th>

                  <th className="p-3 text-left">
                    Salary
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b">

                  <td className="p-3">
                    Rahman
                  </td>

                  <td className="p-3">
                    450
                  </td>

                  <td className="p-3">
                    ₹12,500
                  </td>

                </tr>

                <tr className="border-b">

                  <td className="p-3">
                    Ahmed
                  </td>

                  <td className="p-3">
                    390
                  </td>

                  <td className="p-3">
                    ₹11,200
                  </td>

                </tr>

                <tr>

                  <td className="p-3">
                    Ali
                  </td>

                  <td className="p-3">
                    350
                  </td>

                  <td className="p-3">
                    ₹10,000
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* Recent Activities */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Recent Activities
        </h2>

        <div className="space-y-4">

          <div className="border-b pb-3">
            Attendance Updated Successfully
          </div>

          <div className="border-b pb-3">
            Production Entry Added
          </div>

          <div className="border-b pb-3">
            Salary Updated
          </div>

          <div>
            Work Assigned To Labour
          </div>

        </div>

      </div>

    </SupervisorLayout>
  );
};

export default SupervisorDashboard;