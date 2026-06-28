
import MainLayout from "../../layouts/MainLayout";

import AttendanceChart from "../../components/charts/AttendanceChart";
import ProductionChart from "../../components/charts/ProductionChart";
import SalaryChart from "../../components/charts/SalaryChart";

const DepartmentDetails = () => {
  return (
    <MainLayout>

      {/* Department Header */}

      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <div className="flex flex-col md:flex-row justify-between">

          <div>

            <h1 className="text-3xl font-bold">
              Stitching Department
            </h1>

            <p className="text-gray-500 mt-2">
              Complete department performance overview
            </p>

          </div>

          <div className="mt-4 md:mt-0">

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              Active
            </span>

          </div>

        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <div className="bg-blue-600 text-white p-5 rounded-xl shadow">
          <h3>Total Labour</h3>
          <h1 className="text-4xl font-bold mt-2">35</h1>
        </div>

        <div className="bg-green-600 text-white p-5 rounded-xl shadow">
          <h3>Present Today</h3>
          <h1 className="text-4xl font-bold mt-2">32</h1>
        </div>

        <div className="bg-purple-600 text-white p-5 rounded-xl shadow">
          <h3>Monthly Production</h3>
          <h1 className="text-4xl font-bold mt-2">4500</h1>
        </div>

        <div className="bg-orange-500 text-white p-5 rounded-xl shadow">
          <h3>Salary Cost</h3>
          <h1 className="text-4xl font-bold mt-2">₹2.5L</h1>
        </div>

      </div>

      {/* Supervisor Info */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Assigned Supervisor
        </h2>

        <div className="flex items-center gap-4">

          <img
            src="https://i.pravatar.cc/80?img=5"
            alt="Supervisor"
            className="w-16 h-16 rounded-full"
          />

          <div>

            <h3 className="font-bold text-lg">
              Ahmad Khan
            </h3>

            <p className="text-gray-500">
              Stitching Supervisor
            </p>

            <p>
              📞 9876543210
            </p>

          </div>

        </div>

      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">

        <AttendanceChart />

        <ProductionChart />

        <SalaryChart />

      </div>

      {/* Top Labour */}

      <div className="bg-white rounded-xl shadow p-5 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Top Labour Performance
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b bg-gray-50">

                <th className="p-3 text-left">
                  Name
                </th>

                <th className="p-3 text-left">
                  Production
                </th>

                <th className="p-3 text-left">
                  Salary
                </th>

                <th className="p-3 text-left">
                  Attendance
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">Rahman</td>
                <td className="p-3">450</td>
                <td className="p-3">₹12,500</td>
                <td className="p-3">98%</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Ahmed</td>
                <td className="p-3">390</td>
                <td className="p-3">₹11,200</td>
                <td className="p-3">95%</td>
              </tr>

              <tr>
                <td className="p-3">Ali</td>
                <td className="p-3">350</td>
                <td className="p-3">₹10,000</td>
                <td className="p-3">94%</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* Recent Activities */}

      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-xl font-semibold mb-4">
          Recent Activities
        </h2>

        <div className="space-y-4">

          <div className="border-b pb-3">
            Production Entry Updated
          </div>

          <div className="border-b pb-3">
            Attendance Marked
          </div>

          <div className="border-b pb-3">
            Salary Generated
          </div>

          <div>
            New Labour Assigned
          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default DepartmentDetails;